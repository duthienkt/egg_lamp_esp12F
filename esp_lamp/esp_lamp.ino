#include <ESP8266WiFi.h>

#include <DNSServer.h>        //Local DNS Server used for redirecting all requests to the configuration portal
#include <ESP8266WebServer.h> //Local WebServer used to serve the configuration portal
#include <WiFiManager.h>      //https://github.com/tzapu/WiFiManager WiFi Configuration Magic

#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include "stringbuilder.h"

#define AIO_SERVER "mqtt.absol.cf"
#define AIO_SERVERPORT 1883

#define AIO_USERNAME "iNet"
#define AIO_KEY "12345iNet"
#define AIO_ID "EGGV4_001"

WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, AIO_SERVER, AIO_SERVERPORT, AIO_ID, AIO_USERNAME, AIO_KEY);
WiFiManager wifiManager;
bool wifiAvailable;

Adafruit_MQTT_Subscribe presenceSub = Adafruit_MQTT_Subscribe(&mqtt, "presence");

void setup()
{
    Serial.begin(9600);
    wifiManager.autoConnect("EGG_LAMP_CONFIG", "12345");
    wifiAvailable = WiFi.status() == WL_CONNECTED;
    WiFi.setAutoReconnect(true);
    delay(1000);
    mqtt.subscribe(&presenceSub);
}

bool wifi_connect()
{
    wifiAvailable = WiFi.status();
    if (!wifiAvailable)
    {
        WiFi.reconnect();
        int retries = 10;
        while (WiFi.status() != WL_CONNECTED && (retries >= 0))
        {
            Serial.print("Retry in ");
            Serial.println(retries);
            delay(100);
            retries--;
        }
        delay(500);
        wifiAvailable = WiFi.status();
    }
    if (!wifiAvailable)
    {
        Serial.println("Wifi is not available!");
    }
    return wifiAvailable;
}

bool MQTT_connect()
{
    if (!wifiAvailable)
    {
        return false;
    }
    int8_t ret;

    // Stop if already connected.
    if (mqtt.connected())
    {
        return true;
    }

    Serial.print("Connecting to MQTT... ");

    uint8_t retries = 3;
    while ((ret = mqtt.connect()) != 0)
    { // connect will return 0 for connected
        Serial.println(mqtt.connectErrorString(ret));
        Serial.println("Retrying MQTT connection in 5 seconds...");
        mqtt.disconnect();
        delay(5000); // wait 5 seconds
        retries--;
        if (retries == 0)
        {
            // basically die and wait for WDT to reset me
            while (1)
                ;
        }
    }
    Serial.println("MQTT Connected!");
    return true;
}

void loop()
{
    if (wifi_connect())
    {
        if (MQTT_connect())
        {

            Adafruit_MQTT_Subscribe *subscription;
            while ((subscription = mqtt.readSubscription(5000)))
            {
                // Check if its the onoff button feed
                if (subscription == &presenceSub)
                {
                    uint8 *data = (uint8 *)presenceSub.lastread;
                    Serial.print(data[0]);
                    Serial.print(data[1]);
                    Serial.print(data[2]);
                    Serial.println(data[3]);
                }
            }

            // ping the server to keep the mqtt connection alive
            if (!mqtt.ping())
            {
                mqtt.disconnect();
            }
        }
    }

    // handleClient();
}
