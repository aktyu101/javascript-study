//reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];

//for of
let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log("sum", sum);

//functino 즉시실행함수
const sumFunc = (() => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
})(); //즉시실행함수
console.log(sumFunc);

//reduce (배열이 기반이 됨)
const reduceSum = numbers.reduce((prev, cur) => {
  //return 시킨게 초기값에 들어감
  return prev + cur;
}, 0); //0 -> 누적값
console.log("reducSum", reduceSum);

const myFishReduce = myFish.reduce((prev, cur, index) => {
  console.log("prev", prev);
  prev[cur] = index;
  return prev;
}, {}); //{} -> 누적시킴
console.log(myFishReduce);
//*reduce ↑ 복습할 것 !

//lest api
//get : 데이터를 가져옴
//post : 데이터 생성
//pahtch, put : 업데이트
//delete :
//crud
