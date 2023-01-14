const listForm = document.querySelector("#toDoList");
const input = document.createElement("input");
const btn = document.createElement("button");
const title = document.createElement("div");
const listSum = document.createElement("span");
const ul = document.querySelector("#list");
const resetBtn = document.createElement("input");

input.setAttribute("type", "text");
resetBtn.setAttribute("type", "button");
input.placeholder = "할 일을 입력하세요.";
btn.innerHTML = "추가";

// title.innerHTML = "To Do List";
title.append("To Do List", listSum); //.
listForm.append(title);
listForm.append(input);
listForm.append(btn);
listForm.append(ul);
listForm.append(resetBtn);

//스타일
const listStyle = `
        width: 500px;
        margin: 0 auto;
        margin-top: 50px;
    `;
const inputTextStyle = `
    width: 440px;
    margin-right: 10px;
    height: 50px;
    display: block;
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    margin-top: 10px;
`;
const inputBtnStyle = `
        height: 50px;
        width: 50px;
    `;
const ulStyle = `
        margin-top: 10px;
        border: solid 1px #eee;
        height: 170px;
        line-height: 30px;
        box-sizing: border-box;
        padding: 10px;
    `;
const resetBtnStyle = `
        margin-top: 15px;
        width: 100px;
        line-height: 30px;
        text-allign: right:
    `;
listForm.style = listStyle;
input.style = inputTextStyle;
btn.style = inputBtnStyle;
ul.style = ulStyle;
resetBtn.style = resetBtnStyle;

let num = 0;
let liNum = 0;

//할 일 추가하기
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let value = input.value;

  //li개수 제한
  if (liNum < 5) {
    if (!value) {
      alert("할 일을 작성해주세요.");
    } else {
      //   ul.innerHTML += "<li>" + num + "." + list + "</li>";
      const li = document.createElement("li");
      li.append(`${++num}.${value}`);
      ul.append(li);
      //총합
      listSum.innerHTML = ` sum: ${num}`;
      //   ++num;
    }
  } else {
    alert("5개까지 추가 가능");
  }

  //li개수
  const li = document.querySelectorAll("#list li");

  liNum = li.length;
  console.log(li);

  //초기화
  input.value = "";
  // ++num;
});
//전체삭제
//삭제
