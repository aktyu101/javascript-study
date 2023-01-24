// import { items } from "./item.js"; //쇼핑 항목 표시, 제어를 하는 클로저 함수
import { addItem } from "./cart.js"; // 쇼핑 물품에 대한 정보를 담고 있는 생성자 함수

const title = document.querySelector(".cartTitle");
const cartWrap = document.querySelector("#cartWrap");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const th_01 = document.createElement("th");
const th_02 = document.createElement("th");
const th_03 = document.createElement("th");
const th_04 = document.createElement("th");

//css
cartWrap.style = `
margin: 70px auto 0; 
`;
title.style = `
width: 1280px;
line-height: 50px;
text-align: left;
margin: 0 auto 10px;
text-indent: 10px;
font-weight: bold;
`;
thead.style = `
width: 1280px;
border: solid 1px #eee;
margin: 20px auto 20px; 
line-height: 50px;
box-sizing: border-box;
`;
const thStyle = `
line-height: 50px;
border: solid 1px #eee;
`;
th_01.style = thStyle;
th_02.style = thStyle;
th_03.style = thStyle;
th_04.style = thStyle;

//append
cartWrap.append(thead);
thead.append(tr);
tr.append(th_01);
tr.append(th_02);
tr.append(th_03);
tr.append(th_04);
th_01.innerHTML = "물품명";
th_02.innerHTML = "개당 가격";
th_03.innerHTML = "수량";
th_04.innerHTML = "추가";

addItem();
