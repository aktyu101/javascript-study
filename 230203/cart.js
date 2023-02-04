import Item from "./item.js";

export default function cart() {
  const header = ["물품명", "가격", "수량", "추가"];
  const items = [
    new Item("우유", 1500, 1),
    new Item("커피", 2500, 2),
    new Item("딸기", 10000, 3),
    new Item("과자", 1200, 4),
    new Item("빵", 1000, 5),
  ];

  const createTable = () => {
    const caption = document.createElement("caption");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadList = document.createElement("tr");
    //theadList = tr / thead > tr > th*4

    //caption
    table.append(caption);
    caption.innerHTML = "cart";

    //thead
    for (let [i, item] of header.entries()) {
      const th = document.createElement("th");
      th.append(item);
      theadList.append(th);
    }
    thead.append(theadList);
    table.append(thead);

    //tbody
    const tbody = document.createElement("tbody");
    for (let [i, List] of items.entries()) {
      const tbodyList = document.createElement("tr");
      for (let [key, value] of Object.entries(List)) {
        const tbodyItem = document.createElement("td");
        tbodyItem.setAttribute("id", `${key}${i}`);
        tbodyItem.append(value);
        tbodyList.append(tbodyItem);
      }
      //button
      const buttonItem = document.createElement("td");
      const button = document.createElement("button");
      //버튼 클릭이벤트
      button.addEventListener("click", (event) => {
        //눌렀을때 추가
        const target = document.querySelector(`#quantity${i}`);
        const quantity = Number(target.textContent);
        target.innerHTML = quantity + 1;
        //총수량 +
        const sum = document.querySelector("#sum");
        const sumCount = Number(sum.textContent) + 1;
        sum.innerHTML = sumCount;
        //총가격 +
        const sumPrice = document.querySelector("#sumPrice");
        const price = target.previousElementSibling.textContent;
        const sumPriceCount = Number(sumPrice.textContent) + Number(price);
        sumPrice.innerHTML = sumPriceCount;
        console.log(sum);
      });

      button.append("추가");
      buttonItem.append(button);
      tbodyList.append(buttonItem);
      tbody.append(tbodyList);
    }

    table.append(tbody);
    return table;
  };

  //총수량
  const createSum = () => {
    let sum = 0;
    const sumBox = document.createElement("div");
    const quantites = document.querySelectorAll(`td[id^=quantity]`);
    for (let quantity of quantites) {
      const value = Number(quantity.textContent);
      sum += value;
    }
    container.append(sumBox);
    sumBox.append("총 수량 :");
    const span = document.createElement("span");
    span.append(`${sum}`);
    sumBox.append(span);
    span.setAttribute("id", "sum");
    return sumBox;
  };

  //총금액
  const createSumPrice = () => {
    let sumPrice = 0;
    const sumBox = document.createElement("div");
    const totalPrice = document.querySelectorAll(`td[id^=price]`);
    // [1500, 1000, 10000, 300, 200]
    // [1, 2, 3, 4, 5]
    const quantities = document.querySelectorAll(`td[id^=quantity]`);
    for (let [index, value] of totalPrice.entries()) {
      const price = value.textContent;
      const quantity = quantities[index].textContent;
      sumPrice += price * quantity;
    }
    container.append(sumBox);
    sumBox.append("합계 : ");
    const span = document.createElement("span");
    span.append(`${sumPrice}`);
    sumBox.append(span);
    span.setAttribute("id", "sumPrice");
    return sumBox;
  };

  return {
    createTable,
    createSum,
    createSumPrice,
  };
}
