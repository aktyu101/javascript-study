//쇼핑 항목 표시, 제어를 하는 클로저 함수
import Item from "./item.js";

export default function cart() {
  const header = ["물품명", "가격", "수량", "추가"];
  const items = [
    new Item("우유", 1500, 1),
    new Item("커피", 500, 2),
    new Item("딸기", 1000, 3),
    new Item("과자", 2000, 4),
    new Item("빵", 500, 5),
  ];

  const createTable = () => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadList = document.createElement("tr");

    for (let [i, item] of header.entries()) {
      const th = document.createElement("th");
      th.append(item);
      theadList.append(th);
    }

    thead.append(theadList);
    table.append(thead);

    const tbody = document.createElement("tbody");

    for (let [i, List] of items.entries()) {
      //of의 인덱스넘버를 가져오는법
      const tbodyList = document.createElement("tr");
      for (let [key, value] of Object.entries(List)) {
        const tbodyItem = document.createElement("td");
        tbodyItem.setAttribute("id", `${key}${i}`);
        tbodyItem.append(value);
        tbodyList.append(tbodyItem);
      }
      const buttonItem = document.createElement("td");
      const button = document.createElement("button");
      button.addEventListener("click", (event) => {
        // const target = event.target;
        // const quantity = target.parentElement.previousElementSibling;
        // console.log(quantity);
        const target = document.querySelector(`#quantify${i}`);
        const quantity = Number(target.textContent) + 1;
        target.innerHTML = quantity;
        //버튼을 눌렀을때 추가되야 하니까 이 위치에!
        const sum = document.querySelector("#sum");
        const sumCount = Number(sum.textContent) + 1;
        sum.innerHTML = sumCount;
      });
      button.append("추가");
      buttonItem.append(button);
      tbodyList.append(buttonItem);
      tbody.append(tbodyList);
    }

    table.append(tbody);

    return table;
  };
  const creatSum = () => {
    let sum = 0;
    const box = document.createElement("div");
    const quantites = document.querySelectorAll(`td[id^=quantify]`);
    console.log(quantites);
    for (let quantity of quantites) {
      const value = Number(quantity.textContent);
      sum += value;
    }
    box.append(`총수량 :`);
    const span = document.createElement("span");
    span.append(`${sum}`);
    span.setAttribute("id", "sum");
    box.append(span);
    return box;
  };

  return {
    createTable,
    creatSum,
  };
}

//총금액과 추가했을때 총금액도 같이 늘어나게 과제!
//itterator
