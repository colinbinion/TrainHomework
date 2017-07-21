// $(document).ready(function(){

// Colin Solution ----> this may not match your HTML
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDfj5XTDTqwDJluv_VrQMARF2TkgNzfqsg",
  authDomain: "train-schedule-homework.firebaseapp.com",
  databaseURL: "https://train-schedule-homework.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "693611444551"
};

firebase.initializeApp(config);

var trainData = firebase.database();

// Populate Firebase Database with initial data (in this case, I did this via Firebase GUI)
// Button for adding trains
$("#add-train-btn").on("click", function() {

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrainUnix = moment($("#first-train-input").val().trim(), "HH:mm").subtract(10, "years").format("X");
  var frequency = $("#frequency-input").val().trim();

  // Creates local "temporary" object for holding train data
  var newTrain = {

    name: trainName,
    destination: destination,
    firstTrain: firstTrainUnix,
    frequency: frequency
  };

  // Uploads train data to the database
  trainData.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(firstTrainUnix);
  console.log(newTrain.frequency);

  // Alert
  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Determine when the next train arrives.
  return false;
});

// 4. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var tName = childSnapshot.val().name;
  var tDestination = childSnapshot.val().destination;
  var tFrequency = childSnapshot.val().frequency;
  var tFirstTrain = childSnapshot.val().firstTrain;

  // Calculate the minutes until arrival using hardcore math
  // To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time
  // and find the modulus between the difference and the frequency.
  var differenceTimes = moment().diff(moment.unix(tFirstTrain), "minutes");
  var tRemainder = moment().diff(moment.unix(tFirstTrain), "minutes") % tFrequency;
  var tMinutes = tFrequency - tRemainder;

  // To calculate the arrival time, add the tMinutes to the currrent time
  var tArrival = moment().add(tMinutes, "m").format("hh:mm A");

  console.log(tMinutes);
  console.log(tArrival);
  console.log(moment().format("hh:mm A"));
  console.log(tArrival);
  console.log(moment().format("X"));

  // Add each train's data into the table
  $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>"
  + tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
});


// Bill's code

// Initialize firebase database
// function myfunction(a, b) {
//   var tubor = a + b;
//   return tubor;
// }

// var config = {
//     apiKey: "AIzaSyDfj5XTDTqwDJluv_VrQMARF2TkgNzfqsg",
//     authDomain: "train-schedule-homework.firebaseapp.com",
//     databaseURL: "https://train-schedule-homework.firebaseio.com",
//     projectId: "train-schedule-homework",
//     storageBucket: "",
//     messagingSenderId: "693611444551"
//   };
//   firebase.initializeApp(config);
//   console.log(firebase);
// // Variables
//
// var trainData = firebase.database();
//
// // variables for moment js
// var randomDate = "01/23/2014";
// var convertedDate = moment(new Date(randomDate));
// console.log(convertedDate);
//
// // ensuring moment js is connected and working
// var m = moment();
// console.log(m);
// console.log(m.toString());
// var ts = Date.now();
// console.log(ts);
// var clickCounter = 0;

// $("#demoButton").on("click", function(){
// 	clickCounter++;
// 	database.ref().set({
// 		clickCount: clickCounter
// 	})
// });



// Functions


// Processes

// Take the form field inputs and turn them into an object to be stored in firebase

// $('form').submit(function(e){
// 	e.preventDefault();
// 	var newTrainName = $("#name").val().trim();
// 	var newTrainDestination = $("#destination").val().trim();
// 	var newTrainFirstTrain = moment($("#firstTrain").val().trim(), "HH:mm").subtract(10, "years").format("X");
// 	console.log(newTrainFirstTrain);
// 	var newTrainFrequency = $("#frequency").val().trim();
//
// 	var newTrain = {
// 		name: newTrainName,
// 		destination: newTrainDestination,
// 		firstTrain: newTrainFirstTrain,
// 		frequency: newTrainFrequency,
// 		dateAdded: firebase.database.ServerValue.TIMESTAMP
// 	}

	// populate the train schedule with the new values
	// var row = $("<tr>");
	// var newNameElem = $("<td>").text(newTrainName);
	// console.log(newNameElem);
	// var newDestElem = $("<td>").text(newTrainDestination);
	// var newFirstElem = $("<td>").text(newTrainFirstTrain);
	// var newFreqElem = $("<td>").text(newTrainFrequency);
  //
	// row.append(newNameElem);
	// row.append(newDestElem);
	// row.append(newFirstElem);
	// row.append(newFreqElem);
  //
	// var trainTable = $("#trainTable tbody").append(row);
  //
	// //clear the input fields
	// $('#name').val("");
	// $('#destination').val("");
	// $('#firstTrain').val("");
	// $('#frequency').val("");
  //
	// console.log(newTrain);
  //
	// trainData.ref().push(newTrain);

	// take a snapshot of the database
	// trainData.ref().on("child_added", function(childSnapshot, prevChildKey){

	// 	console.log(childSnapshot).val();

	// 	// console.log(childSnapshot).val().name;
	// 	// console.log(childSnapshot).val().destination;
	// 	// console.log(childSnapshot).val().firstTrain;
	// 	// console.log(childSnapshot).val().frequency;
	// 	// console.log(childSnapshot).val().dateAdded;

	// })

	// var currentTime = moment();
	// console.log(currentTime).format;
  //
	// var differenceTimes = moment().diff(moment.unix(newTrainFirstTrain), "minutes");
	// var tRemainder = moment().diff(moment.unix(newTrainFirstTrain), "minutes") % newTrainFrequency ;
	// var tMinutes = newTrainFrequency - tRemainder;






	// $("#name").val("");
	// $("#destination").val("");
	// $("#firstTrain").val("");
	// $("#frequency").val("");

	// database.ref().push({
	// 	trainName: 			newTrainName,
	// 	trainDestination: 	newTrainDestination,
	// 	trainTime: 			newTrainFirstTrain,
	// 	trainFrequency: 	newTrainFrequency
	// })
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
  //  });

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
