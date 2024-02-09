var birthday = new Date('June 26, 2000 08:00:00');


//function that returns time until next birthday

function timeUntilBirthday() {
 
  if (today > nextBirthday) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  var timeUntil = nextBirthday - today;
  return timeUntil;
}



//birthdayTimer id is the id of the div that will display the time until the next birthday
function displayTimeUntilBirthday(birthdayTimer) {
  var today = new Date();  
  var time = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (today > time) {
    time.setFullYear(time.getFullYear() + 1);
  }
  time = time - today;
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  birthdayTimer.innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds until next birthday ";
}

//update every second
setInterval(function() {
  displayTimeUntilBirthday(document.getElementById('birthdayTimer'));
}, 1000);
