import check from "./check.js";

const request = new XMLHttpRequest();
request.addEventListener("load", postsEventHandler); //json형태가 perse가 맞으면 배열 형태로 전환);

//요청단계
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
const container = document.querySelector("#container");
//상단
const div = document.createElement("div");
const ulTodo = document.createElement("ul");
ulTodo.setAttribute("class", "ulTodo");
container.append(div, ulTodo);
const title = document.createElement("h3");
title.append("할 일 목록");
const boxStyle = `
width: 600px;
border: solid 1px #ddd;
margin: 0 auto;
box-sizing: border-box;
`;
div.style = boxStyle;
ulTodo.style = boxStyle;
ulTodo.style = `
display: flex;
text-align : center;
padding: 0;
justify-content: space-evenly;
padding: 0 50px;
`;
title.style = `
text-align: center;
font-size: 20px;
`;
//총 목록
const sum = document.createElement("li");
sum.append("총 완료: /");
//완료
const complet = document.createElement("li");
complet.append("완료: /");
//미완료
const completN = document.createElement("li");
completN.append("미완료: /");
//li style
const liStyle = `
list-style : none;
`;
sum.style = liStyle;
complet.style = liStyle;
completN.style = liStyle;
//top ul append
ulTodo.append(sum, complet, completN);
div.append(title, ulTodo);
function postsEventHandler() {
  const posts = JSON.parse(request.responseText);
  const ul = document.createElement("ul");
  ul.style = `
  margin : 0 auto;
  list-style: none;
  width: 600px;
  marign: 0 auto;
  padding-left: 0;
  `;
  console.log(request);
  const lists = posts.map((post, index) => {
    const li = document.createElement("li");
    li.style = `
    border: solid 1px #ddd;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;`;
    const title = document.createElement("h1");
    title.style = `
    font-size: 15px;
    line-heigth: 15px;`;
    const content = document.createElement("p");
    title.append(post.title);
    content.append(post.completed);
    li.setAttribute("id", `list-${post.id}`);
    li.append(title, content);
    content.style = `
    font-size : 13px;
    `;
    if (`li.[id^=list]`) {
      return li;
    }
  });
  lists.forEach((list) => {
    ul.append(list);
  });
  container.append(ul);
}
