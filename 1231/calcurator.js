/**
 * 1231 - 계산하기
 */

const result = document.querySelector("#result");
const input = document.querySelector("#insertInput");
const sumBtn = document.querySelector("#sum");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

let num = 0;

// console.log("input", input.value);
// input.value = 22;

result.innerHTML = num;
input.value = num;
const finishCalcurator = (num) => {
    result.innerHTML = num;
    input.value = 0;
};

const sum = () => {
    num = num + Number(input.value); //형변환 Number
    // console.log("current click", num); 
    // result.innerHTML = num;
    finishCalcurator(num); //input.value = 0; //초기화
};

const subtract = () => {
    num = num - Number(input.value); 
    // result.innerHTML = num;
    finishCalcurator(num);
};

const multiply = () => {
    num = num * Number(input.value); 
    // result.innerHTML = num;
    finishCalcurator(num);
};

const divide = () => {
    num = num / Number(input.value); 
    // result.innerHTML = num;
    finishCalcurator(num);
};

sumBtn.addEventListener("click", sum);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//