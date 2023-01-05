const input = document.querySelector(".input");
const resetBtn = document.querySelector(".reset");

const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const multiBtn = document.querySelector(".multi");
const divideBtn = document.querySelector(".divide");

const Btn7 = document.querySelector(".num:nth-child(1)");
const Btn8 = document.querySelector(".num:nth-child(2)");
const Btn9 = document.querySelector(".num:nth-child(3)");
const Btn4 = document.querySelector(".num:nth-child(4)");
const Btn5 = document.querySelector(".num:nth-child(5)");
const Btn6 = document.querySelector(".num:nth-child(6)");
const Btn1 = document.querySelector(".num:nth-child(7)");
const Btn2 = document.querySelector(".num:nth-child(8)");
const Btn3 = document.querySelector(".num:nth-child(9)");
const dot = document.querySelector(".num:nth-child(10)");

const log = document.querySelector("#log");

let num = 0;

log.innerHTML = num;
input.value = num;

const finishCalcrator = (num) => {
    log.innerHTML = num;
    //input.value = 0;
};

// const finishCalc = (num) => {
//     result.innerHTML = num;
//     input.value = 0;
// };

const plus = () => {
    num = num + Number(input.value);
    finishCalcrator(num);
};

const minus = () => {
    num = num - Number(input.value);
    finishCalcrator(num);
};

const multi = () => {
    num = num * Number(input.value);
    finishCalcrator(num);
};

const divide = () => {
    num = num / Number(input.value);
    finishCalcrator(num);
};

const allReset = () => {
    num = num * 0;
    input.value = num * 0;
    log.innerHTML = num = 0 ;
};

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);
multiBtn.addEventListener("click", multi);
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", allReset);