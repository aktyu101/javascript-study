const listForm = document.querySelector("#toDoList");
const input = document.createElement("input");
const btn = document.createElement("button");
const title = document.createElement("div");
const listSum = document.createElement("span");
const ul = document.querySelector("#list");
input.setAttribute("type", "text");
input.placeholder = "할 일을 입력하세요.";
btn.innerHTML = "추가";
const sum = 0;
listSum.innerHTML = "   (sum:" + "" + sum + ")";


title.innerHTML = "To Do List";
listForm.append(title);
title.append(listSum);
listForm.append(input);
listForm.append(btn);
listForm.append(ul);

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
const inputBtnStyle =`
    height: 50px;
    width: 50px;
`;
const ulStyle = `
    margin-top: 10px;
`;

listForm.style = listStyle;
input.style = inputTextStyle;
btn.style = inputBtnStyle;
ul.style = ulStyle;

//추가하기
// btn.addEventListener("click", () => {
//     const li = document.createElement("li");
//     ul.append(li);
//     li.innerHTML = input.value;
// });

//할 일 추가하기
btn.addEventListener("click", e => {
    e.preventDefault();   
    let list = input.value;
    let num = Number(1);

    if(list.length === 0) {
        alert('할 일을 작성해주세요.');
    }else {
        ul.innerHTML += "<li>" + num + "." + list + "</li>";
    }
    input.value = "";
    console.log(num);
    //총 리스트 개수 +1
    //if
});

//클릭개수 제한
//전체삭제
//삭제
