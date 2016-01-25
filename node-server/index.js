var Firebase = require("firebase");
var Gpio = require('onoff').Gpio;

var myFirebaseRef = new Firebase("https://automationhome.firebaseio.com/");
var led = new Gpio(17, 'out');

myFirebaseRef.child("switches/17").on("value", function(snapshot) {
  console.dir(snapshot.val());  // Alerts "San Francisco"
  led.writeSync(snapshot.val().state);
});


function exit() {
  led.unexport();
  process.exit();
}

process.on('SIGINT', exit);