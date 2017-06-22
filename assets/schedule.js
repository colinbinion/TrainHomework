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
var trains = {};

var data = {
	name: "Steve",
	destination: "Truckee",
	firstTrain: 0620,
	frequency: 30
}

ref.push(trains);

// Functions

function submitTrain(form) {

}

// Processes

// Take the form field inputs and turn them into an object to be stored in firebase

$('form').submit(function(e){
	e.preventDefault();
	var $inputs = $('#newTrain :input:not(:button)');
	// returns the four input paremeters - name, destination, first train, frequency
	console.log($inputs);
	// creates a new object to be stored in the database
  	$inputs.each(function() {
    var train = $(this)[0].id;
    console.log(train);
    trains[train] = $(this).val();
    // trains[name] = $(this).val();
    //  $(this).val('');
   });
  	console.log(trains);
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

})

})