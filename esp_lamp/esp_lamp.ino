#include <ESP8266WiFi.h>
#include "stringbuilder.h"
const char* ssid     = "Diem Thuong";
const char* password = "ad2h3ttt";
//const char *ssid = "console.log(SSID)";
//const char *password = "undefined";


#define LED 2

#define L_RED D1  
#define L_GREEN D2 
#define L_BLUE D8 2

#define R_RED D5
#define R_GREEN D6
#define R_BLUE D7

#define HUE_PHARE 1000


#define IS_NUM(x) (x >= '0' && x <= '9')

WiFiServer server(80);


int COLOR[6];
char *data;
char *cmd = "?cmd";

int newColorCode[6];
int32_t now;

int mapAnalogValue(int c) {
  return 0 + (c * 1023 / 255);
}

int mapPharseRed(int32_t val) {
  int p = val / HUE_PHARE;
  if (p == 0 || p == 5) return 255;
  if (p == 1) return 225 - (val - HUE_PHARE) * 225 / HUE_PHARE;
  if (p == 2 || p == 3) return 0;
  if (p == 4) return (val - HUE_PHARE * 4) * 225 / HUE_PHARE;
}


void updateNewColorCode()
{
  for (int i = 0; i < 6; ++i) {
    COLOR[i] = newColorCode[i];
  }

  // I use Ortak Anot led, I must to revert PWM value
  analogWrite(L_RED, 1023 - mapAnalogValue(COLOR[0]));
  analogWrite(L_GREEN, 1023 -  mapAnalogValue(COLOR[1]));
  analogWrite(L_BLUE, 1023 - mapAnalogValue(COLOR[2]));

  analogWrite(R_RED, 1023 - mapAnalogValue(COLOR[3]));
  analogWrite(R_GREEN, 1023 - mapAnalogValue(COLOR[4]));
  analogWrite(R_BLUE, 1023 - mapAnalogValue(COLOR[5]));

}

//https://en.wikipedia.org/wiki/Hue
// Six pharse
void autoColor() {
  now = millis();
  for (int i = 0; i < 6; ++i)
  {
    now %= HUE_PHARE * 6;
    newColorCode[i] = mapPharseRed(now);
    now += HUE_PHARE;
  }

  updateNewColorCode();
}

void alert(int duration, int delayTime, int times)
{
  for (int i = 0; i < times; ++i)
  {
    digitalWrite(LED, LOW);
    delay(duration);
    digitalWrite(LED, HIGH);
    delay(delayTime);
  }
}

void setup()
{

  pinMode(LED, OUTPUT);
  autoColor();
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    alert(100, 100, 1);
    autoColor();
  }
  delay(500);
  alert(100, 100, 5);
  server.begin();
  // maximum length of string is 1023
  data = stbd_init(1024);

}


// request: http://192.168.1.xx?cmd=255,255,255,255,255,255

void handleClient()
{
  WiFiClient client = server.available(); // Listen for incoming clients
  int cmdIndex = 0;
  int newColorCodeIndex = -1;
  char lastChar = '_';
  char c = '_';
  if (client)
  {
    int endlCount = 0;
    stbd_clear();
    while (client.connected())
    {
      if (client.available())
      {
        lastChar = c;
        c = client.read();
        if (cmd[cmdIndex])
        {
          //not end of cmd
          if (c == cmd[cmdIndex])
            cmdIndex++;
          else
          {
            //reset automata
            cmdIndex = 0;
          }
        }
        else
        {
          if (newColorCodeIndex < 6)
          {
            // reading number
            if (IS_NUM(c))
            {
              if (IS_NUM(lastChar))
              {
                newColorCode[newColorCodeIndex] = newColorCode[newColorCodeIndex] * 10 + c - 48;
              }
              else
              {
                //newNum
                newColorCodeIndex++;
                if (newColorCodeIndex < 6)
                  newColorCode[newColorCodeIndex] = c - '0';
              }
            }
          }
        }

        if (c == '\r')
          continue;
        if (c == '\n')
          ++endlCount;
        if (endlCount == 2)
        {
          // send data
          stdbd_print("HTTP/1.1 200 OK\r\n");
          stdbd_print("Server: ESP8266\r\n");
          stdbd_print("Access-Control-Allow-Origin: *\r\n");// cross-orgin
          stdbd_print("Content-type:application/json\r\n");
          stdbd_print("Connection: close\r\n");
          stdbd_print("\r\n");
          // Display the HTML web page

          stdbd_print("{ \"id\":\"EagleSaysScreech\"");

          if (newColorCodeIndex >= 5)
          {
            //enought
            stdbd_print(",\"status\":\"OK\"");
            updateNewColorCode();
          }
          else
          {
            stdbd_print(",\"error\":\"NOT_ENOUGHT_COLOR_CODE\"");
          }

          stdbd_print(", \"color\":[");
          for (int k = 0; k < 6; ++k)
          {
            if (k > 0)
              stdbd_print(",");
            stdbd_print(COLOR[k]);
          }
          stdbd_print("]");



          stdbd_print("}\r\n");
          stdbd_print("\r\n");
          break;
        }
      }
    }
    client.print(data);

    alert(50, 0, 1);
    client.stop();
  }
}

void loop()
{
  handleClient();
}
