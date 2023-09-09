
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDate = new Date();
    var currentDay = daysOfWeek[currentDate.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = 'Current Day: ' + currentDay;

    var currentUTCTime = currentDate.getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = 'Current UTC Time: ' + currentUTCTime;