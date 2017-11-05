function getTimeRemaining (endtime) {
  let t = endtime - Date.parse(new Date());
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

  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

function startTimer(){
  let timeInMinutes = 25;
  let currentTime   = Date.parse(new Date());
  let deadline      = (Date.parse(new Date()) + timeInMinutes*60*1000);

  initializeClock('timer', deadline);
}

let btn = document.getElementsByTagName('button')[0];
btn.onclick = function(){
  startTimer();
}
