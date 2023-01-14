//timer
//interval 시간마다
//setTimeOut

setTimeout(() => {
  console.log("start");
}, 2000);

const container = document.querySelector("#container");
const btn = document.createElement("button");
btn.append("setTimeOut");
container.append(btn);
const viewer = document.createElement("div");
container.append(viewer);
btn.addEventListener("click", setTimeOutHandler);

//event handler
function setTimeOutHandler() {
  setTimeout(() => {
    const span = viewer.querySelector("span");
    span && span.remove();
    const text = document.createElement("span");
    text.innerHTML = "...loading";
    viewer.append(text);
    setTimeout(() => {
      text.append("timeout");
      viewer.append("text");
    }, 3000);
    // text.append("timeout");
    // viewer.append("text");
  }, 3000);
}

const countBox = document.createElement("div");
container.append(countBox);

//style
countBox.style = `
    background-color: #eee;
    margin-top: 20px;
    min-height: 50px;
`;

let count = 0;
let timer = null; //여기에 interval을 담아줌

const countText = document.createElement("p");
countText.append(count);
countBox.append(countText);

//btn
const startBtn = document.createElement("button");
startBtn.append("start");
const stopBtn = document.createElement("button");
stopBtn.append("stop");
const resetBtn = document.createElement("button");
resetBtn.append("reset");
countBox.append(startBtn, stopBtn, resetBtn);

startBtn.addEventListener("click", () => {
  console.log("start");
  timer && clearInterval(timer); //중첩방지
  timer = setInterval(() => {
    countText.innerHTML = `${++count}`;
  }, 1000);
  //   countText.innerHTML = `${++count}`; //클릭했을때늘어남
});
stopBtn.addEventListener("click", () => {
  console.log("stop");
  clearInterval(timer);
});
resetBtn.addEventListener("click", () => {
  console.log("reset");
  clearInterval(timer);
  count = 0;
  countText.innerHTML = `${count}`;
});

//이렇게해야 제어 가능
// const interval = setInterval(() => {
//   console.log("interval");
// }, 1000);

//즉시실행함수
// (function test() {
//   console.log("test!!!");
// });
// test();

const dateBox = document.createElement("div");
container.append(dateBox);
dateBox.style = `
    background-color: #eee;
    min-height: 50px;
    margin-top: 20px;
`;
const dateText = document.createElement("span");
// const date = new Date("October 13, 2014 11:13:00");
// const date = new Date("2022-12-25 11:00:00");
// const date = new Date(2022, 9, 10, 10, 25, 5);
const date = new Date();
date.setFullYear(2020);
const month = date.getMonth() + 1;
// date.setMonth(month - 1); //set할 때 -1
date.setMonth(2);
date.setDate(date.getDate() + 20);
date.setHours(date.getHours() + 2);
date.setMinutes(date.getMinutes() + 30);
//1000 * 60 * 60 * 24
// 1000 * 60(1분) * 60(한시간) * 24;(하루)

//.  dateText.append(`${date.toDateString()}`);
// dateText.append(`${date.getFullYear()}`); //년도만
// dateText.append(`${date.getMonth() + 1}`); //달 *무조건 +1
// dateText.append(`${date.getDate()}`);
// dateText.append(`${date.getHours()}`);
// dateText.append(`${date.getMinutes()}`);
// dateText.append(`${date.getSeconds()}`);
// dateText.append(`${date.getDay()}`); //요일 0이 일요일 0~6
// dateText.append(`${date.getTime()}`); //기준부터 ~
dateText.append(`${Date.now()}`);
dateBox.append(dateText);

//date 바꾸기
dateText.append(`${date}`);
//set, get
