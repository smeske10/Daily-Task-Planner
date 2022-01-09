//DOM Elements
var timeDisplayEl = $('#currentDay');
var nextTaskDisplayEl = $('#nextTask');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
var currentHour = Number(moment().format('HH'));
const scheduleHour = document.getElementsByClassName('hour');
const mySelect = document.getElementById('validationCustom04');

//Displays date & time in header

function displayTime() {
    timeDisplayEl.text(rightNow);
}

setInterval(displayTime,1000);

// ****BONUS**** Allow user to set start time and edit Schedule
            // function defineRow() {
            //     let text = "";

            //     for (let i = 0; i<7; i++) {
            //         text += i;
            //     };

            //     scheduleHour2.innerHTML = text;
            //     console.log(text);
            // };

            // defineRow(); 
            
            // mySelect.addEventListener("select", defineRow);

// ****BONUS**** Set default start time
        // for(var i, j = 0; i = mySelect.options[j]; j++) {
        //     var temp = "9";
        //     if(i.value == temp) {
        //         mySelect.selectedIndex = j;
        //         break;
        //     };
        // };

//Change Element Style based on current time

function checkTime(){
    [...scheduleHour].forEach(
        function time (scheduleHour) {
            var scheduleHourValue = scheduleHour.innerText;
            var nowValue = parseInt(scheduleHourValue);
                if(currentHour > nowValue){
                    $(scheduleHour).addClass("past");
                }                
                else if (currentHour === nowValue){
                    $(scheduleHour).addClass("present");
                }
                else{
                    $(scheduleHour).addClass("future");
                }
        }
    );
};

checkTime();
setInterval(checkTime, (1000 * 60) * 5);

// ****BONUS**** Displays time to next task in aside card
    // function displayNextTask() {
    //     var nextTask = (timeObj.value - moment().format('hh:mm:ss'));
    //     nextTaskDisplayEl.text(nextTask);
    //   }

    //   setInterval(displayNextTask, 1000);

var task = document.getElementsByClassName('form-control')
const saveBtn = document.getElementsByClassName('saveBtn')
//Add event listener to save button and store text input on localStorage
function saveTask(){
    var taskValue = $("textarea").val();
    localStorage.setItem("task", taskValue)
};

$(".saveBtn").click(saveTask)
