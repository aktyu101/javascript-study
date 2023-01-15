import Counter from "./counter.js";
import people from "./people.js";

const counter = Counter();
counter.sum(10);
counter.subtract(20);
counter.multiply(5);
console.log("count", counter.getCount());

//poeple 공통화된 규격의 객체는 생성자 함수로 생성! 반드시
const peopleList = [
  new people("chris", 20, "korea"),
  new people("jake", 25, "china"),
  new people("sara", 13, "canada"),
]; //배열로 생성

console.log("peoplelist", peopleList);

const container = document.querySelector("#container");
const ul = document.createElement("ul");

for (let people of peopleList) {
  const { info } = people; //info = name, age, address
  const li = document.createElement("li");
  li.append(`${info()}`);
  ul.append(li);
}

container.append(ul);
