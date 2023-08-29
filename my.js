function start() {
     let num = 0;
     // let second = 0;
     // let minutes = 0;
     // let hours = 0;
     let second = text("sec");
     let minutes = text("min");
     let hours = text("hour");
     const interval = setInterval(() => {
          const n = ++num;
          //  num = second + n;
          if (n === 10) {
               num = 0;              
          }
          if (num === 0) {
              minutes++;
          }
          if(minutes === 2){
               minutes=0;
               hours++;
          }
          display("sec", num);
          display("min", minutes);
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
