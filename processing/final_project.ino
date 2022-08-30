#include "Adafruit_VL53L0X.h"

int LED1 = 8;
int LED2 = 9;
int LED3 = 10;
int LED4 = 11;

int buzzerPin = 12;

int ThermistorPin = A0;
int Vo;
float R1 = 10000; // value of R1 on board
float logR2, R2, T;
float prevT = 0.0;
float c1 = 0.001129148, c2 = 0.000234125, c3 = 0.0000000876741; //steinhart-hart coeficients for thermistor

int output = 0;
int stage1 = 0;
int stage2 = 0;
int stage3 = 0;
int stage4 = 0;

char val;
bool start = false;

Adafruit_VL53L0X lox = Adafruit_VL53L0X();

void setup() {
  Serial.begin(9600);

  while (! Serial) {
    delay(1);
  }

  Serial.println("Adafruit VL53L0X test");
  if (!lox.begin()) {

    Serial.println(F("Failed to boot VL53L0X"));
    while (1);
  }

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);
  pinMode (buzzerPin, OUTPUT);

  //establishContact();
}

void loop() {
  // <---------------------------------------------->  TEMP
  Vo = analogRead(ThermistorPin);

  R2 = R1 * (1023.0 / (float)Vo - 1.0); //calculate resistance on thermistor
  logR2 = log(R2);
  T = (1.0 / (c1 + c2 * logR2 + c3 * logR2 * logR2 * logR2)); // temperature in Kelvin
  T = T - 273.15; //convert Kelvin to Celcius

  Serial.println(T);

  // <---------------------------------------------->  DISTANCE + LED
  VL53L0X_RangingMeasurementData_t measure;
  lox.rangingTest(&measure, false);

  if (measure.RangeStatus != 4) {  // phase failure shave incorrect data
    //Serial.print("Distance (mm): "); Serial.println(measure.RangeMilliMeter);

    if (measure.RangeMilliMeter >= 140) { // TOP (GREEN) LED
      stage4 = 1;
      digitalWrite(LED4, HIGH);

    } else {
      stage4 = 0;
      digitalWrite(LED4, LOW);
    }

    if (measure.RangeMilliMeter >= 119) { // THIRD LED
      stage3 = 1;  
      digitalWrite(LED3, HIGH);
    } else {
      stage3 = 0;
      digitalWrite(LED3, LOW);
    }

    if (measure.RangeMilliMeter >= 88) { // SECOND LED
      stage2 = 1;
      digitalWrite(LED2, HIGH);
    } else {
      stage2 = 0;
      digitalWrite(LED2, LOW);
    }

    if (measure.RangeMilliMeter >= 57 && start == false) { // BOTTOM LED before START
      start = true;
      stage1 = 1;    
      digitalWrite(LED1, HIGH);
    } else {
      stage1 = 0;      
      digitalWrite(LED1, LOW);
    }

    if (measure.RangeMilliMeter <= 88 && start == true) { // BOTTOM LED after START
      stage1 = 1;
      digitalWrite(LED1, HIGH);
    } else {
      stage1 = 0;
      digitalWrite(LED1, LOW);
    }

  } else {
    Serial.println(" out of range ");
  }

  
  if (Serial.available() > 0) { // If data is available to read,
    val = Serial.read(); // read it and store it in val

    if (val == '1') { //if we get a 1 (GAME OVER)
      Serial.println("---------- GAME OVER ----------");
      int signalCount = 0;
      while(signalCount < 4){
        digitalWrite(buzzerPin, HIGH);
        delay(100);
        digitalWrite(buzzerPin, LOW);
        delay(100);
        signalCount += 1;
      }

      digitalWrite(buzzerPin, HIGH);
    }
  } else {
    if (prevT != 0.0 && prevT != T && start == true) {
      
      if (T - prevT >= 0) {
        Serial.println(T);
        //Serial.print(prevT);
      } else {
        Serial.println(T);
        //Serial.print(prevT);
      }
    }
  }

  prevT = T;
  delay(100);
}

void establishContact() {
  while (Serial.available() <= 0) {
    Serial.println("A");   // send a capital A
    delay(300);
  }
}
