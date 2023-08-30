// let startBtn = document.getElementById('start')
// let stopBtn = document.getElementById('stop')
// let textField = document.getElementById('input')
// let intervalId = 1;
//     startBtn.addEventListener('click', () => {
//         intervalId = setInterval(()=>{
//             const currentValue = parseInt(textField.textContent)
//             textField.textContent = currentValue + 1;
//         }, 1000);

//     } )
// stopBtn.addEventListener('click', () => {
//     clearInterval(intervalId);
//     intervalId = null;
// })
// function start() {
//      let intervalId = 1;
//      // let num = 0 ;
//      // let second = text("sec").innerText='00';
//      // let second = text("sec");
//      // let minutes = text("min");
//      // let hours = text("hour");
//       intervalId = setInterval(() => {
//           // console.log(intervalId)
          
//           let second = text("sec").innerText='00';
//           let minutes = text("min");
//           let hours = text("hour");
//           console.log(second)
//           // const n = ++num;
//           if (intervalId === 5) {
//                second.textContent = 0;
//           }
//           if (second === '00') {
//               minutes++;
//           }
//           if(minutes === 2){
//                minutes='00';
//                hours++;
//           }
          
//           display("min", minutes);
//           display("sec", num);
//           display("hour", hours);

//      }, 1000);
//      // stop
//      const stop = document.getElementById("stop");
//      stop.addEventListener("click", function () {
//           clearInterval(intervalId);
//           intervalId = null;
//      });
//      // +++++++++++++++++++++++++++++++++
// }
// // function text(id) {
// //      const hours = document.getElementById(id);
// //      const a = hours.innerText;
// //      const aa = parseInt(a);
// //      return aa;
// // }
// function text(id) {
//      const hours = document.getElementById(id);
//      const currentValue = parseInt(hours.textContent)
//      hours.textContent = currentValue + 1
//      return hours;
     
// }
// function display(elementId, value) {
//      const element = document.getElementById(elementId);
//      element.innerText = value;
// }
// function reset(){
//      document.getElementById('hour').innerText = '00';
//      document.getElementById('min').innerText = '00';
//      document.getElementById('sec').innerText = '00';
// }


















// let startBtn = document.getElementById('start')
// let stopBtn = document.getElementById('stop')
// let textField = document.getElementById('input')
// let intervalId = 1;
//     startBtn.addEventListener('click', () => {
//         intervalId = setInterval(()=>{
//             const currentValue = parseInt(textField.textContent)
//             textField.textContent = currentValue + 1;
//         }, 1000);

//     } )
// stopBtn.addEventListener('click', () => {
//     clearInterval(intervalId);
//     intervalId = null;
// })