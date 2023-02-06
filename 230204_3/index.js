const request = new XMLHttpRequest();
request.addEventListener("load", postsEventHandler); //json형태가 perse가 맞으면 배열 형태로 전환);

//요청단계
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();
const container = document.querySelector("#container");
function postsEventHandler() {
  const posts = JSON.parse(request.responseText);
  const ul = document.createElement("ul");
  // ul.style.listStyle = "none";
  const lists = posts.map((post) => {
    const li = document.createElement("li");
    // li.style = `
    // border: solid 1px #ddd;
    // background-color: #eee;
    // padding : 10px;
    // margin-top: 10px;`;
    const title = document.createElement("h1");
    // title.style.fontSize = "18px";
    const content = document.createElement("p");
    title.append(post.title);
    content.append(post.body);
    li.setAttribute("id", `list-${post.id}`);
    li.append(title, content);
    // content.style = `
    // font-size : 14px
    // color : #666;
    // `;
    return li;
  });
  lists.forEach((list) => {
    ul.append(list);
  });
  container.append(ul);
  // console.log("lists", lists);
}
//slice, reduce, api 호출
//map, forEach
