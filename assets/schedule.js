$(document).ready(function(){

// Initialize firebase database

var config = {
    apiKey: "AIzaSyDfj5XTDTqwDJluv_VrQMARF2TkgNzfqsg",
    authDomain: "train-schedule-homework.firebaseapp.com",
    databaseURL: "https://train-schedule-homework.firebaseio.com",
    projectId: "train-schedule-homework",
    storageBucket: "",
    messagingSenderId: "693611444551"
  };
  firebase.initializeApp(config);
  console.log(firebase);
// Variables

var database = firebase.database();

var ref = database.ref('trains');
var trains = [];

// Functions

function submitTrain(form) {

}

// Processes

// Take the form field inputs and turn them into an object to be stored in firebase

$('form').submit(function(e){
	e.preventDefault();
	var $inputs = $('#newTrain :input:not(:button)');
	console.log($inputs);
  	// var train = {
  	// 	var name = $inputs[0].value,
  	// 	"destination" = $inputs[1].value,
  	// 	"firstTrain" = $inputs[2].value,
  	// 	"frequency" = $inputs[3].value
  	// };
  	// console.log(train);
    // $inputs.each(function() {
    // var name = $(this)[0].id;
  //  	values[id] = $(this).val();
  //    $(this).val('');
  //  });
  // console.log(values);

})

})