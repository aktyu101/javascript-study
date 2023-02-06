const people = [
  { name: "chris", age: 28, address: "seoul" },
  { name: "judy", age: 45, address: "incheon" },
  { name: "mike", age: 11, address: "bucheon" },
  { name: "tom", age: 55, address: "busan" },
  { name: "sara", age: 35, address: "jeju" },
];

//map
const map = people.map((value, index) => {
  return {
    id: index,
    nick: value.name,
    age: value.age,
    address: value.address,
  };
});
console.log("map", map);

//forEach
let count = 0;
let str = "";
people.forEach((value, index) => {
  console.log("forEach index", index); //for, forof랑 기능이 동일함 -> forEach
  str += `${value.name} : ${value.address}`;
  count += value.age;
});

//forEach
people.forEach((value, index) => {
  console.log("forEach", index, value);
});

//filter
const filter = people.filter((value) => value.age < 20);
console.log("filter", filter);
