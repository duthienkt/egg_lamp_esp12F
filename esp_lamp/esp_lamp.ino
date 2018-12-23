#include <ESP8266WiFi.h>

//const char* ssid     = "Diem Thuong";
//const char* password = "ad2h3ttt";
const char* ssid     = "console.log(SSID)";
const char* password = "undefined";
#define LED 2

WiFiServer server(80);

// Variable to store the HTTP request
String header;

void alert(int duration, int delayTime, int times) {
  for (int i = 0; i < times; ++i) {
    digitalWrite(LED, LOW);
    delay(duration);
    digitalWrite(LED, HIGH);
    delay(delayTime);
  }

}

void setup() {
  pinMode(LED, OUTPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    alert(250, 200, 1);

  }
  delay(500);
  alert(100, 100, 5);
  server.begin();
}



void handleClient() {
  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {
    String currentLine = "";
    int endlCount = 0;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        if (c == '\r') continue;
        if (c == '\n') ++endlCount;
        if (endlCount == 2) {
          client.println("HTTP/1.1 200 OK");
          client.println("Server: ESP8266");
          client.println("Access-Control-Allow-Origin: *");
          client.println("Content-type:application/json");
          client.println("Connection: close");
          client.println();
          // Display the HTML web page

          client.println("{ \"id\":\"CatMeow\"}");
          client.println();
          break;
        }
        // print it out the serial monitor
        // add it to the end of the currentLine

      }
    }
    alert(100, 0, 1);
    client.stop();
  }
}

void loop() {
  handleClient();
}
