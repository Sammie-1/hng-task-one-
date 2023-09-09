
const currentDate = new Date();
const currentDayOfWeek = currentDate.getUTCDay();


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const currentUTCHours = currentDate.getUTCHours();
const currentUTCMinutes = currentDate.getUTCMinutes();
const currentUTCSeconds = currentDate.getUTCSeconds();


function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

const formattedTime = `${formatTimeUnit(currentUTCHours)}:${formatTimeUnit(currentUTCMinutes)}:${formatTimeUnit(currentUTCSeconds)}`;


const dayOfWeekText = `Today is ${daysOfWeek[currentDayOfWeek]}`;
const utcTimeText = `Current UTC Time: ${formattedTime}`;
 
document.getElementById('dayofWeek').textContent = dayofWeekText; 
document.getElementById('utcTIme').textContent = utcTimeText; 