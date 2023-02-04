import Cart from "./cart.js";

const cart = Cart();
const container = document.querySelector("#container");
container.append(cart.createTable());
container.append(cart.createSum());
container.append(cart.createSumPrice());

// const sum = document.createElement("div");
// const quantites = document.querySelector(`td[id^=quantity]`);
// console.log(quantites);
// sum.append("총수량 :");
// container.append(sum);
