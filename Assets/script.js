//DOM Elements
var timeDisplayEl = $('#currentDay');
var nextTaskDisplayEl = $('#nextTask');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var currentHour = moment().format('hh');
var scheduleHour = document.getElementsByClassName('hour');
var mySelect = document.getElementById('validationCustom04');

//Displays date & time in header


function displayTime() {
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime,1000);

console.log(mySelect.value)
//Allow user to set start time and edit Schedule

function defineRow() {
    var scheduleTime = mySelect.value;
    var rowValue = scheduleHour.createTextNode(scheduleTime);

};


//Set default start time
var temp = "9";

for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
        break;
    };
}

defineRow();
mySelect.addEventListener("select", defineRow);

//Change Element Style based on current time
function checkTime(){
    if(currentHour > scheduleHour.value){
        $(".hour").addClass("past");
    }
    else if(currentHour === scheduleHour.value){
        $(".hour").addClass("present");
    }
    else{
        $(".hour").addClass("future");
    };
};


//Check time every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);  

//Displays time to next task in aside card
// function displayNextTask() {
//     var nextTask = (timeObj.value - moment().format('hh:mm:ss'));
//     nextTaskDisplayEl.text(nextTask);
//   }

//   setInterval(displayNextTask, 1000);