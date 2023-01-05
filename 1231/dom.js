/**
 * 1231 - dom 함수
 * dom
 */

/**
 * es5 이전
 */
// const container = document.getElementById("container");
// const pTag = document.getElementsByTagName("p");
// const box = document.getElementsByClassName("box");
// const box2 = document.getElementsByName("box2");

/**
 * es6
 */

const container = document.querySelector("#container"); //id
const pTag = document.querySelectorAll("p"); //tag //All
const box = document.querySelectorAll(".box"); //class
//name (x)

// console.log("container", container);
// console.log("p", pTag); //array
// console.log("box", box);
// console.log("box2", box2);

const el = document.createElement("span");
el.innerHTML = "container";
container.appendChild(el);

const btn = document.querySelector("#calcButton");
// console.log("btn", btn);

btn.addEventListener("click", () => {
    console.log("click");
});