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
const Btn0 = document.querySelector(".num:nth-child(10)");

const log = document.querySelector("#log");

let num = 0;

log.innerHTML = num;
input.value = num;

const finishCalcrator = (num) => {
    log.innerHTML = num;
    input.value = 0;
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


// const input7 = () => {
//     if (num === 0) {
//         input.value = num = 7;
//     }else {
//         input.value = num += 7;
//     };
// };
// const input8 = () => {
//     if (num === 0) {
//         input.value = num = 8;
//     }else {
//         input.value += num = 8;
//     };
// };
// const input9 = () => {
//     if (num === 0) {
//         input.value = num = 9;
//     }else {
//         input.value += num = 9;
//     };
// };
// const input4 = () => {
//     if (num === 0) {
//         input.value = num = 4;
//     }else {
//         input.value += num = 4;
//     };
// };
// const input5 = () => {
//     if (num === 0) {
//         input.value = num = 5;
//     }else {
//         input.value += num = 5;
//     };
// };
// const input6 = () => {
//     if (num === 0) {
//         input.value = num = 6;
//     }else {
//         input.value += num = 6;
//     };
// };
// const input1 = () => {
//     if (num === 0) {
//         input.value = num = 1;
//     }else {
//         input.value += num = 1;
//     };
// };
// const input2 = () => {
//     if (num === 0) {
//         input.value = num = 2;
//     }else {
//         input.value += num = 2;
//     };
// };
// const input3 = () => {
//     if (num === 0) {
//         input.value = num = 3;
//     }else {
//         input.value += num = 3;
//     };
// };



//숫자
// Btn7.addEventListener("click", input7);
// Btn8.addEventListener("click", input8);
// Btn9.addEventListener("click", input9);
// Btn4.addEventListener("click", input4);
// Btn5.addEventListener("click", input5);
// Btn6.addEventListener("click", input6);
// Btn1.addEventListener("click", input1);
// Btn2.addEventListener("click", input2);
// Btn3.addEventListener("click", input3);

//calc
plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);
multiBtn.addEventListener("click", multi);
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", allReset);
