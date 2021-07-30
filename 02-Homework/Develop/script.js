var timeDisplayEl = $('#currentDay');
const container = document.querySelector('.container')
const clicked = document.querySelector('.clicked')
const tasks = []

function displayTime() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(today)
}
setInterval(displayTime, 1000);





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