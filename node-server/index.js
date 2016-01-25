var Firebase = require("firebase");
var Gpio = require('onoff').Gpio;
var gpios = [17, 18];
var myFirebaseRef = new Firebase("https://automationhome.firebaseio.com/");
var leds = [];

for (var x in gpios) {
    var gpio = gpios[x];
    leds[gpio] = new Gpio(gpio, 'out');

    (function(gpio) {
        myFirebaseRef.child("switches/" + gpio).on("value", function(snapshot) {
            leds[gpio].writeSync(snapshot.val().state);
            console.log("setting gpio "+gpio+" with state "+snapshot.val().state);
        });
    })(gpio);
};

function exit() {
    for (var x in gpios) {
        var gpio = gpios[x];
        leds[gpio].unexport();
    }
    process.exit();
}

process.on('SIGINT', exit);
