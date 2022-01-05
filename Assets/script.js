//DOM Elements
var timeDisplayEl = $('#currentDay');
var nextTaskDisplayEl = $('#nextTask');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var currentHour = moment().format('hh a');
var scheduleHour = document.getElementsByClassName('hour')

//Displays date & time in header
function displayTime() {
    timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

//Allow user to set start time
// function defineRow() {
//     let timeObj = {
//         "5 AM" : 5,
//         "6 AM" : 6,
//         "7 AM" : 7,
//         "8 AM" : 8,
//         "9 AM" : 9,
//         "10 AM" : 10,
//         "11 AM" : 11,
//         "12 PM" : 12,
//         "1 PM" : 13,
//         "2 PM" : 14,
//         "3 PM" : 15,
//         "4 PM" : 16,
//         "5 PM" : 17,
//         "6 PM" : 18,
//         "7 PM" : 19,
//         "8 PM" : 20,
//         "9 PM" : 21,
//         "10 PM" : 22,
//     }
// document.getElementsByClassName('.hour')

//Create time object for selecting work hours 
// var localOption = new Option(item.text, JSON.stringify(item), false, false);
// $("#workTime").append($(localOption));

var currentWorkTime = JSON.parse($("#competency").val());


//Change Element Style based on current time
function checkTime(){
if(currentHour > Option.value){
    $(".hour").addClass("past");
}
else if(currentHour === Option.value){
    $(".hour").addClass("present");
}
else{
    $(".hour").addClass("future");
};
}

//Check time every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);  

//Displays time to next task in aside card
// function displayNextTask() {
//     var nextTask = (timeObj.value - moment().format('hh:mm:ss'));
//     nextTaskDisplayEl.text(nextTask);
//   }

//   setInterval(displayNextTask, 1000);



