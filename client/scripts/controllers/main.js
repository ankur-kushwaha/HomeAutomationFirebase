'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($firebaseObject ,$firebaseArray) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var ref = new Firebase("https://automationhome.firebaseio.com/switches");
// download the data into a local object
  var syncObject = $firebaseObject(ref);
  this.switches= syncObject;
  //syncObject.$bindTo(this, "switches");
  // synchronize the object with a three-way data binding
  // click on `index.html` above to see it used in the DOM!
 // syncObject.$bindTo(this, "switches");
  });

