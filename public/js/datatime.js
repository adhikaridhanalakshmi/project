var date = new Date();
var displayDate = date.toLocaleDateString();
var displayTime = date.toLocaleTimeString();
document.getElementById('datetime').innerHTML = displayDate + " " + displayTime;