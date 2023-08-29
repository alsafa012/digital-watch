function start() {
     let num = 0 ;
     // let second = 0;
     // let minutes = '00';
     // let hours = '00';
     let second = text("sec").innerText='00';
     let minutes = text("min").innerText='00';
     let hours = text("hour").innerText='00';
     const interval = setInterval(() => {
          const n = ++num;
          //  num = second + n;
          if (num === 10) {
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

          // stop
          const stop = document.getElementById("stop");
          stop.addEventListener("click", function () {
               clearInterval(interval);
          });
          // +++++++++++++++++++++++++++++++++
     }, 1000);
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
