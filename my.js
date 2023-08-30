
let num = 0 ;
function start() {
     let second = text("sec");
     let minutes = text("min");
     let hours = text("hour");
     const interval = setInterval(() => {
          const n = ++num;
          if (n === 3) {
               num = '00';
          }
          if (num === '00') {
              minutes++;
          }
          if(minutes === 2){
               minutes='00';
               hours++;
          }
          
          display("min", minutes);
          display("sec", num);
          display("hour", hours);

     }, 1000);
     // stop
     const stop = document.getElementById("stop");
     stop.addEventListener("click", function () {
          clearInterval(interval);
          // interval = null;
     });
     // +++++++++++++++++++++++++++++++++
}
function text(id) {
     const hours = document.getElementById(id);
     const a = hours.innerText;
     const aa = parseInt(a);
     return aa;
}
function display(elementId, value) {
     const element = document.getElementById(elementId);
     element.innerText = value;
}
function reset(){
     document.getElementById('hour').innerText = '00';
     document.getElementById('min').innerText = '00';
     document.getElementById('sec').innerText = '00';
}