var timeDisplayEl = $('#currentDay');


function displayTime() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(today)
}
setInterval(displayTime, 1000);
