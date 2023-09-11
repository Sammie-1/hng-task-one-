function updateDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const utcTime = currentDate.toUTCString().split(" ")[4]; // Get UTC time

  // Update the elements with data-testid attributes
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    dayOfWeek;
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    utcTime;
}

// Initial call to updateDateTime function
updateDateTime();

// Update time every minute
setInterval(updateDateTime, 1000); // Update every 1 seconds