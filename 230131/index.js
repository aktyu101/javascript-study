//iterator 함수
const people = [
  { name: "chris", age: 28, address: "seoul" },
  { name: "judy", age: 45, address: "incheon" },
  { name: "mike", age: 11, address: "bucheon" },
  { name: "tom", age: 55, address: "busan" },
  { name: "sara", age: 35, address: "jeju" },
];

//map (배열 쓸 때 가장 많이 씀)
const map = people.map((value, index) => {
  return {
    id: index,
    nick: value.name,
    age: value.age,
    address: value.address,
  };
});
//callback 함수 //한 번 return시 중괄호 없어도 됨
//뒤는 배열의 순서를 가져옴

//return `{$value.name}`, `{$value.age}`;

// return {
//   ...value, //기존값에 추가할 때
//   nick: value.name,
// };

//배열 형태를 바꿀때도 많이 씀
console.log("map", map);

//forEach
//return 없음, for문 돌 때 역할
let count = 0;
let str = "";
people.forEach((value, index) => {
  console.log("forEach index", index); //for, forof랑 기능이 동일함 -> forEach
  str += `${value.name} : ${value.address}`;
  count += value.age;
});
// console.log("loop", loop);
// console.log("count", count);
// console.log("str", str);

//filter
const filter = people.filter((value) => value.age >= 90); //조건이 맞지않으면 빈 배열 반환, 조건이 맞는거 전부 배열로 반환
console.log(filter);

//find(조건이 몇개든 먼저 걸리는거 먼저 반환, 배열로 반환x, 그 라인값만 반환) 없으면 undefined 반환, 딱 하나만 찾고자 할 때
const find = people.find((value) => {
  return value.age >= 40;
});
const findIndex = people.findIndex((value) => {
  return value.age >= 5;
});
const findLast = people.findLast((value) => {
  return value.age >= 5;
}); //맨 마지막
const findLastIndex = people.findLastIndex((value) => {
  return value.age >= 5;
});
console.log(find);
console.log("findIndex", findIndex); //
console.log("findlast", findLast);
console.log("findlastIndex", findLastIndex);

// some(true, false만 반환) 하나라도 있으면 true
const some = people.some((value) => value.age >= 24);
console.log("some", some);

// every(true, false)전부다 조건이 맞아야 함
const every = people.every((value) => value.age >= 10);
console.log("every", every);

// includes 값만 체크(간단하게 있는지만 체크)
const strArr = ["sara", "chris", "sara"];
const includes = strArr.includes("chris");
console.log(includes);

const index = strArr.indexOf("sara");
console.log("indexOf", index); //제일 처음 걸리는 값만 반환

const last = strArr.lastIndexOf("sara"); //가장 마지막 값 반환
console.log("indexOf", last);

//flat (배열을 풀어줌), 한 뎁스만 풀어줌 자주 안 씀
const arr = [
  [1, [2, 3, [4, 5]]],
  [6, 7],
  [8, 9],
];
const flat1 = arr.flat();
//console.log("flat", flat1);
const flat2 = arr.flat(2);
//console.log("flat2", flat2);
const flat3 = arr.flat(Infinity); //쓰는 일 거의 없음
//console.log("flat3", flat3);

//------------------------------------------------------------------------------------
//at 개념 이후 배열의 역순이 가능해짐

const at = people.at(0);
const at2 = people.at(2);
console.log("at 0", at2); // =people[2]
console.log("at-", people.at(-2)); //length - 1

const arr2 = [1, 2, 3, 4, 5];
console.log("fill", arr2.fill(1));

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [...arr3];
//push -> 원본의 값이 바뀜
arr4.push(6, 7);
console.log("arr3", arr3);
const pop = arr3.pop();
console.log("arr3", arr3, pop);
//map은 원본이 바뀌지 않음, filter, find -> 원본을 바꾸지 않음

const shift = arr4.shift(); //앞에서 뺌
// console.log("shift", shift);
// console.log("arr3", arr3);

arr3.unshift(4, 5); //push와 같은 용도 //역순으로 넣으면 성능이 떨어짐
// console.log("arr3", arr3);
//push는 배열의 원본을 바꿈

//반환값까지 쓰면서 복사체까지 만드는
const copy = [9, 10];
const arr5 = [...arr3, ...copy];
console.log("arr5", arr5);
const arr6 = arr3.concat([15, 20]); //배열의 값을 추가할 때
console.log("arr6", arr6);
arr6.pop();
console.log("arr3", arr3);

//주말엔 silce
