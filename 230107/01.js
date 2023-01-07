//230107 계산기 script

let value = 0;
let calcType = "";

const container = document.querySelector("#container");
const input = document.createElement("input");
input.setAttribute("type", "text"); //붙여나가기 //실제 가지고 있는 요소를 변경
input.setAttribute("readonly", true); //입력 못 함
const btnStyle = `
    margin-right: 2px;
    background-color: #fff;
    border: 1px solid #eee;
    font-size: 10px;
    padding: 7px;
    cursor: pointer;
`;

container.append(input); 
//html 요소를 받을 수 있음, text 요소를 받을 수 있음

const btnContainer = document.createElement("div");
//style
btnContainer.style.marginTop = "10px";


for (let i = 0; i < 10; i++) {
    const btn = document.createElement("button");
    
    btn.addEventListener("click", (event) => {
        console.log("button event", event);
        const el = event.target;
        input.value = input.value + el.textContent; //계속 이어붙이는 개념
    });

    // btn.textContent = i; //btn text 요소 
    // btn.style.marginRight = "2px";
    // btn.style.backgroundColor = "#fff";
    // btn.style.border = "1px solid #eee";
    // btn.style.fontSize = "10px";
    // btn.style.padding = "7px";
    // btn.style.cursor = "pointer";

    btn.style = btnStyle;
    btn.textContent = i === 9 ? 0 : i + 1; // true ? true : false
    btnContainer.append(btn);
}

container.append(btnContainer);
const calcContainer = document.createElement("div");
const removeBtn =document.createElement("button");
removeBtn.textContent = "reset";
removeBtn.style = btnStyle;
removeBtn.addEventListener("click", () => {
    input.value = "";
}); //초기화 버튼

calcContainer.append(removeBtn);
container.append(calcContainer);

const calc =["+", "-", "*", "/"]; //여러개 만들지 않기 위해 

for (let c of calc) {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.style = btnStyle; //style 먼저

    btn.addEventListener("click",(event) => {
        const val = event.target.textContent;
        switch (val) { //val = 기준
            case "+": {
                value = Number(input.value);
                input.value = "";
                calcType= val;
                console.log("value", value);
                console.log("input.value", input.value);
                break;
            }
            case "-": {

                break;
            }
            case "*": {

                break;
            }
            case "/": {

                break;
            }
            default: {
                console.log("not calc"); //or retunr;
            }
        }
    });
    calcContainer.append(btn);
}

const resultContainer = document.createElement("div");
const enter = document.createElement("button");
enter.textContent = "enter";
enter.style = btnStyle;
enter.addEventListener("click", () => {
    switch (calcType) {
        case "+": {
            input.value = value + Number(input.value);
            break;
        }
    }
    resultContainer.append("result -", "value: ", `${value} / `, "input.value: ", input.value);
    console.log("calcType", calcType);
    console.log("value", value);
    console.log("input.value", input.value);
});
calcContainer.append(enter);
container.append(calcContainer);

container.append(resultContainer);


// const plusBtn = document.createElement("button");
// plusBtn.textContent = "+";
// calcContainer.append(plusBtn);
// plusBtn.style = btnStyle;

// for (let c of calc) {
//     console.log(c);
// };

//switch, style, append, setatribute, 베틱(변수랑 조합할때) &{}; -> 변수값을 가져올수있음 베틱일때, 줄내림 가능