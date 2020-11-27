var countDownDate = new Date("Nov 27, 2020 00:00:00").getTime();
// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  diff= countDownDate - today;
  
  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  if (diff >0){
    document.getElementById("timer").innerHTML =
      "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
      <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
      <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
      <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
      </div>";
  }
  
  if (diff < 0){
    clearInterval(timer);
    document.getElementById("timer").hidden=true;

  }

}, 1000);
