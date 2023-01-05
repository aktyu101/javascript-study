/**
 * 1231 - function
 * calc
 */

/**
 * 함수의 선언식 
 */
function calc() {
    console.log("calc");
} //기명함수
const calc2 =  function () {
    console.log("calc2");
}; //익명함수, 즉시 실행 함수, 변수에 담아서 쓰거나 (잘 안씀)
//es6 이후
const calc3 = (a, b, c) => {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    return 'a'; //수행되면 종료
    console.log(""); // 실행안됨
}; //익명 함수, 화살표 함수, arrow function

const func = calc3(1, 2, 3);
console.log("return", func);

const sum = (a, b) => {
    return a + b;
};

console.log("sum", sum);
console.log("sum", sum(4, 5));
// const sum1 = sum(10, 20);
// const sum2 = sum(5, 25);
// console.log("sum + sum", sum1 + sum2);
console.log("sum + sum", sum(sum(10, 20), sum(5, 25)));

const subtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    return a / b;
};
console.log("subtract = 50", subtract(60, 10));
console.log("multiply = 30", multiply(5, 6));
console.log("divide = 2", divide(4, 2));

const calcResult = divide(1500, multiply(10, subtract(sum(10, 5), sum(5, 25))));
console.log("calcResult", calcResult);


