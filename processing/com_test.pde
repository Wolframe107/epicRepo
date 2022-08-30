
// 2B: Shared drawing canvas (Client)

import processing.net.*;

import processing.serial.*; //import the Serial library
Serial myPort;  //the Serial port object
String val;
// since we're doing serial handshaking,
// we need to check if we've heard from the microcontroller
boolean firstContact = false;

Client c;
String input;
int data;

void setup() {
  size(450, 255);
  background(204);

  myPort = new Serial(this, Serial.list()[0], 9600);
  myPort.bufferUntil('\n');

  stroke(0);
  frameRate(5); // Slow it down a little
  // Connect to the server’s IP address and port­
  c = new Client(this, "192.168.0.103", 8000); // Replace with your server’s IP and port
}

void draw() {
  // Receive data from server
  if (c.available() > 0) {
    input = c.readString();
    // Draw line using received coords
    print(input);
  }
}

void serialEvent( Serial myPort) {
  //put the incoming data into a String -
  //the '\n' is our end delimiter indicating the end of a complete packet
  val = myPort.readStringUntil('\n');
  //make sure our data isn't empty before continuing
  if (val != null) {
    //trim whitespace and formatting characters (like carriage return)
    val = trim(val);
    println(val);

    //look for our 'A' string to start the handshake
    //if it's there, clear the buffer, and send a request for data
    if (firstContact == false) {
      if (val.equals("A")) {
        myPort.clear();
        firstContact = true;
        myPort.write("A");
        println("contact");
      }
    } else { //if we've already established contact, keep getting and parsing data
      println(val);

      if (mousePressed == true)
      {                           //if we clicked in the window
        myPort.write('1');        //send a 1
        println("1");
      }

      // when you've parsed the data you have, ask for more:
      myPort.write("A");
    }
  }
}
