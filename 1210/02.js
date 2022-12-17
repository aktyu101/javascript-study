/**
 * 02 - 변수 타입
 */
console.log('** 1210: 변수 타입 **')

//원시타입(원본은 바뀌지 않으나 값이 바뀜 콜스텍 내에서 관리 됨)
const str = "string"; // type : string
const num = 1; //type : nummber
const bool = true; //type : boolean(true, false)
const undfi = undefined; //type: undefined
const nul = null; //type: null

//객체타입 (원본이 바뀜, 같은 참조주소를 바라보고 있음)
const obj = { key : 'value', key2: "value2"}; //type: object
const arr = [1, 2, 3, 4, 5]; //type: array(object)
const func = function(){}; //type: function
function func2() {}

const a = 'frult';
let b = a;
b = "aaple";

console.log('원시타입 a', a);
console.log("원시타입 a 복사", b);

const obj1 = {x:100, y:200};
const obj2 = obj1;

obj2.x = 9999;

console.log("obj1 원본", obj1);
console.log("obj 복사본", obj2);

const obj3 = {
    obj: {
        x : 200,
        y : 200,
    },
    obj2: {
        d: 100,
        z: 50,
    },
};

console.log("obj3", obj3);
console.log("obj3 - obj1", obj3.obj);
console.log("obj3 - obj2", obj3["obj2"]); //키값은 스트링으로
console.log("obj3 - obj - y", obj3.obj.y);
console.log("obj3 - obj2 - d", obj3.obj2.d);





console.log("** 1210: 변수 타입 - end **")

//객체타입, 원시타입 차이
//자바스크립트는 싱글스레드 언어 cpu 1개만
