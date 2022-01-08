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

var scheduleHourValue = scheduleHour.innerText;//Change Element Style based on current time


function checkTime(){
    [...scheduleHour].forEach(
        function time (scheduleHour) {
            var nowValue = parseInt(scheduleHour.innerHTML);

            for (let i = 0; i<7; i++) {
                if(currentHour > nowValue){
                    $(".hour").addClass("past");
                }
                else if(currentHour === nowValue){
                    $(".hour").addClass("present");
                }
                else{
                    $(".hour").addClass("future");
                };}
            console.log(nowValue)
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

const task = document.getElementsByClassName('form-control')
const saveBtn = document.getElementsByClassName('saveBtn')


for (var i = 0; i<saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", () => {
        localStorage.setItem("task", task.innerText)
            console.log(task.innerText)
    });
};


    

