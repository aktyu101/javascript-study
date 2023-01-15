import {
  sum as utilSum,
  subtract as utilSub,
  multiply as utilMul,
} from "./utils.js";
//sum as utilSum => 이름을 바꿔줌

//명칭통일, 위치 맞추기
export default function Counter() {
  let count = 0;
  function sum(num) {
    count = utilSum(count, num);
  }
  function subtract(num) {
    count = utilSub(count, num);
  }
  function multiply(num) {
    count = utilMul(count, num);
  }
  function getCount() {
    return count;
  }
  return {
    sum,
    subtract,
    multiply,
    getCount,
  };
}

// export const sum = (num1, num2) => {
//   return num1 + num2;
// };

// export const subtract = (num1, num2) => {
//   return num1 - num2;
// };
