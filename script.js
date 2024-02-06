let interval;
let timeGap;
let clicked = 0;
$(document).ready(function() {
  $(".btnClick").click(function() {
    if ($(this).html() == "Start") {
      $(this).html("Stop");
      if (clicked == 0) {
        updateTime(0);
      } else {
        updateTime(timeGap);
      }
      clicked++;
    } else if ($(this).html() == "Stop") {
      clearInterval(interval);
      $(this).html("Start");
    };
  });
  $(".btnReset").click(function() {
    clicked = 0;
    if (interval) {
      clearInterval(interval);
      displayTime(0, 0, 0, 0);
      $(".btnClick").html("Start");
    };
  });
});
function updateTime(elapsedTime) {
  startTime = Date.now();
  interval = setInterval(function() {
    timeGap = Date.now() - startTime + elapsedTime;
    let hours = parseInt(timeGap / 1000 / 60 / 60);
    let minutes = parseInt(timeGap / 1000 / 60);
    if (minutes >= 60) {
      minutes %= 60;
    };
    let seconds = parseInt(timeGap / 1000);
    if (seconds >= 60) {
      seconds %= 60;
    };
    let milliseconds = parseInt(timeGap);
    if (milliseconds >= 1000) {
      milliseconds %= 1000;
    };
    displayTime(hours, minutes, seconds, milliseconds);    
  }, 1);
};
function displayTime(h, m, s, ms) {
  $(".hour").html(addZeroes(h, 2));
  $(".minute").html(addZeroes(m, 2));
  $(".second").html(addZeroes(s, 2));
  $(".millisecond").html(addZeroes(ms, 3));
};
function addZeroes(number, digits) {
  let myNum = new String(number);
  return new Array(digits - myNum.length + 1).join("0") + myNum;
};