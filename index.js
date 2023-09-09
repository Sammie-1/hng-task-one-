
const currentDate = new Date();
const currentDayOfWeek = currentDate.getUTCDay();


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

// const formattedTime = `${formatTimeUnit(currentUTCHours)}:${formatTimeUnit(currentUTCMinutes)}:${formatTimeUnit(currentUTCSeconds)}`;


setInterval(() => {
  const currentDate = new Date();
  const currentUTCHours = currentDate.getUTCHours();
  const currentUTCMinutes = currentDate.getUTCMinutes();
  const currentUTCSeconds = currentDate.getUTCSeconds();
  const formattedTime = `${formatTimeUnit(currentUTCHours)}:${formatTimeUnit(currentUTCMinutes)}:${formatTimeUnit(currentUTCSeconds)}`;
  const utcTime = document.querySelector('[data-testid="currentUTCTime"]');
  utcTime.textContent = `Current UTC Time: ${formattedTime}`;
 }, 1000);

const dayOfWeekText = `Today is ${daysOfWeek[currentDayOfWeek]}`;
 
// dayOfTheWeek = dayOfTheWeek;

const weekDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');

weekDay.textContent = dayOfWeekText;




// document.getElementById('utcTIme').textContent = utcTimeText; 