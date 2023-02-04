// splice, slice
// splice : 원본 배열을 바꾼다 / index부터 몇개를 자를 것인지
// *역순, 정순, 중간에 넣는거 복습*
// slice : 원본 배열을 바꾸지 않고 배열 반환 / start index ~ end index 더 많이씀

const months = ["Jan", "March", "April", "June"];
// console.log("원본", months);
// console.log("splice 0, 2", months.splice(0, 2)); //0번째부터 2개
// console.log("원본", months); //원본이 바뀜

// start (start index 포함, end index는 전까지)
console.log("slice 2", months.slice(2)); //index부터
console.log("slice 1, 3", months.slice(1, 3)); // (index, 그 전까지)

const copyMont = [...months];
const copyMont2 = months.slice(); //es6 이전의 복사
console.log("slice -2", months.slice(-2));
console.log("slice -3, 1", months.slice(-3, 1));
console.log("slice -3, 3", months.slice(-3, 3));
console.log("slice -4, -1", months.slice(-4, -1)); //역순접근

console.log("months", months);

const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];

// splice
// console.log("myFish", myFish);
// console.log("myFish splice", myFish.splice(3, 1));
// console.log("myFish", myFish);
// console.log("myFish splice -2,1", myFish.splice(-2, 1));
// console.log("myFish", myFish);

// replace, insert
// push, pop은 앞뒤에서만 가능
// onst replace = myFish.splice(1, 2, "parrot", "anemone", "blue"); //잘라낸 값 자리에
// console.log("replace", replace);
// console.log("myFish", myFish);
// myFish.splice(0, 1, "red");
// console.log(myFish);
