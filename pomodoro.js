let timeInMinutes = 25;
let currentTime = Date.parse(new Date());
let deadline = new Date(currentTime + timeInMinutes*60*1000);

function getTimeRemaining (endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor( (t / 1000) % 60 );
  let minutes = Math.floor( (t / 1000 / 60) % 60 );

  return {
    'total' : t,
    'minutes' : minutes,
    'seconds' : seconds
  };
}

function initializeClock(id, endtime){
  let clock = document.getElementById(id);
  let minutes = clock.querySelector('.minutes');
  let seconds = clock.querySelector('.seconds');

  function updateClock(){
    var t = getTimeRemaining(endtime);
    minutes.innerHTML = ('0' + t.minutes).slice(-2);
    seconds.innerHTML = ('0' + t.seconds).slice(-2);
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock(); // run function once at first to avoid delay
  var timeinterval = setInterval(updateClock,1000);
}

initializeClock('timer', deadline);
