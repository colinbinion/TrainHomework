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

var train = {
	name: Thomas,
	destination: Sodor,
	firstTrain: 07:30,
	frequency: 30
}


// Functions

function submitTrain(form) {

}

// Processes


})