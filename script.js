var timeDisplayEl = $('#currentDay');
const container = document.querySelector('.container')
const clicked = document.querySelector('.clicked')
var timeList = ['9', '10', '11', '12', '13', '14', '15', '16', '17']

function displayTime() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(today)
}

function calendar() {
    var now = new Date().getHours();
    var check;

    for (let i = 0; i < timeList.length; ++i) {
        if (timeList[i] < now) {
            var elem = document.getElementsByName(timeList[i]);
            elem[0].id = "past";
        }
        else if (timeList[i] > now) {
            var elem = document.getElementsByName(timeList[i]);
            elem[0].id = "future";
        }
        else {
            var elem = document.getElementsByName(timeList[i]);
            elem[0].id = "present";
        }

    }
}


function createValues() {
    for (let i = 0; i < timeList.length; ++i) {
        var test = localStorage.getItem(timeList[i]);
        if (test == undefined) {
            localStorage.setItem(timeList[i], " ");
        }
        var t = "input[name=\"" + timeList[i] + "\"]"
        document.querySelector(t).defaultValue = localStorage.getItem(timeList[i]);
    }
}


function saveEvent(button) {
    //input type text
    var elem = document.getElementsByName(button.id);
    localStorage.setItem(elem[0].name, elem[0].value);
    var t = "input[name=\"" + button.id + "\"]"
    document.querySelector(t).value = localStorage.getItem(elem[0].name);
}

setInterval(displayTime, 1000);
calendar();
createValues();