
const eventDate = new Date('May 18, 2025, 19:00:00');
const timeStampEvent = eventDate.getTime();

const timeCount = setInterval(function(){
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeStampGap = timeStampEvent - timeStampNow;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60;
    const secondsMs = 1000;

    const daysCountDown = Math.floor(timeStampGap / (daysMs));
    const hoursCountDown = Math.floor(timeStampGap % (daysMs) / (hoursMs));
    const minutesCountDown = Math.floor(timeStampGap % (hoursMs) / (minutesMs));
    const secondsCountDown = Math.floor(timeStampGap % (minutesMs) / 1000);

    document.getElementById('countdown').
    innerHTML = `${daysCountDown}d ${hoursCountDown}h ${minutesCountDown}m ${secondsCountDown}s`;

    if (timeStampGap <= 0) {
        clearInterval(timeCount);

        document.getElementById('countdown').innerHTML = 'Event has finished';
        document.getElementById('button').style.display = 'none';  
    }



}, 1000);