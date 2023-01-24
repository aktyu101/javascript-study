//쇼핑 항목 표시, 제어를 하는 클로저 함수
//item row
import { items } from "./item.js"; //쇼핑 항목 표시, 제어를 하는 클로저 함수

export function addItem() {
  const btnStyle = `
  width: 30px;
  height:30px;
  `;
  const tdStyle = `
  line-height: 50px;
  border: solid 1px #eee;
  `;
  for (let i = 0; i < 5; i++) {
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "itemlist");
    cartWrap.append(tbody);

    const td = document.createElement("td");
    tbody.append(td);
    td.innerHTML = items[i].itemName;

    const td2 = document.createElement("td");
    tbody.append(td2);
    td2.innerHTML = items[i].perPrice;

    const td3 = document.createElement("td");
    tbody.append(td3);
    td3.innerHTML = items[i].amount;

    const td4 = document.createElement("button");
    const td5 = document.createElement("button");
    td4.setAttribute("type", "button");
    td5.setAttribute("type", "button");
    tbody.append(td4, td5);
    td4.innerHTML = "+";
    td5.innerHTML = "-";

    //버튼 클릭 이벤트
    td4.addEventListener("click", function () {});
  }
}
