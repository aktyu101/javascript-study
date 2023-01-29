//쇼핑 항목 표시, 제어를 하는 클로저 함수
import { defaultNum, items } from "./item.js"; //쇼핑 항목 표시, 제어를 하는 클로저 함수

export function addItem() {
  const btnStyle = `
  width: 30px;
  height:30px;
  `;
  const tdStyle = `
  line-height: 50px;
  border: solid 1px #eee;
  `;

  for (let i = 0; i < items.length; i++) {
    //tbody 생성
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id", "itemlist");
    cartWrap.append(tbody);
    //td생성
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
    td4.setAttribute("type", "button");
    tbody.append(td4);
    td4.innerHTML = "+";
  }
}
