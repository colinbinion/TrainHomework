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

// var clickCounter = 0;

// $("#demoButton").on("click", function(){
// 	clickCounter++;
// 	database.ref().set({
// 		clickCount: clickCounter
// 	})
// });



// Functions

function submitTrain(form) {

}

// Processes

// Take the form field inputs and turn them into an object to be stored in firebase

$('form').submit(function(e){
	e.preventDefault();
	var newTrainName = $("#name").val().trim();
	var newTrainDestination = $("#destination").val().trim();
	var newTrainFirstTrain = $("#firstTrain").val().trim();
	var newTrainFrequency = $("#frequency").val().trim();
	
	var newTrain = {
		name: newTrainName,
		destination: newTrainDestination,
		firstTrain: newTrainFirstTrain,
		frequency: newTrainFrequency
	}

	console.log(newTrain);
	
	database.ref().set({
		name: newTrainName,
		destination: newTrainDestination,
		firstTrain: newTrainFirstTrain,
		frequency: newTrainFrequency
	})
	// database.ref().push({
	// 	trainName: 			newTrainName,
	// 	trainDestination: 	newTrainDestination,
	// 	trainTime: 			newTrainFirstTrain,
	// 	trainFrequency: 	newTrainFrequency 
	})
	// var $inputs = $('#newTrain :input:not(:button)');
	// returns the four input paremeters - name, destination, first train, frequency
	// console.log($inputs);
	// // creates a new object to be stored in the database
 //  	$inputs.each(function() {
 //    var newTrain = $(this)[0].id;
 //    console.log(newTrain);
 //    trains[newTrain] = $(this).val();
 //    // trains[name] = $(this).val();
    //  $(this).val('');
   });
  	
  // console.log(values);
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

// }
