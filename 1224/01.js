/**
 * 1224 - 반복문
 */

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x;
}

console.log("cars text", text);

const str = "javascript";

let text2 = "";
for (let x of str) {
        if (x === "s" || x === "t") continue; //조건 무시
        text2 += x
}
console.log("str", text2);


let text3 = "";
for (let x of str) {
    if (x === "s") break;
    text3 += x;
}
console.log("text3", text3);