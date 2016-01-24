var Firebase = require("firebase");

var myFirebaseRef = new Firebase("https://automationhome.firebaseio.com/");

myFirebaseRef.child("switches").on("value", function(snapshot) {
  console.dir(snapshot.val());  // Alerts "San Francisco"
});