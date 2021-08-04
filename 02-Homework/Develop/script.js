

var timeDisplayEl = $('#currentDay');
const container = document.querySelector('.container')
const clicked = document.querySelector('.clicked')
const tasks = []
var timeList = ['9', '10', '11', '12', '13', '14', '15', '16', '17']

function displayTime() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(today)
}


function calendar() {
    var now = new Date().getHours();
    var check;

    if (now > 12) {
        check = now % 12 + "PM"
    }
    else {
        check = now + "AM"
    }

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


function saveEvent() {

}

setInterval(displayTime, 1000);
calendar();

// for(let i = 0; i < 10; i++){
//   const holder = document.createElement('div')
//   const input = document.createElement('input')
//   const button = document.createElement('button')
//   button.textContent = i
//   holder.appendChild(input)
//   holder.appendChild(button)
//   container.appendChild(holder)
// }

// container.addEventListener('click', function(e){
//   clicked.textContent = e.target.previousSibling.value
//   task.push(e.target.previousSibling.value)
//   window.localStorage.setItem(
//     'task',
//     JSON.stringify(tasks)
//   )
// })