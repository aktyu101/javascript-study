/**
 * 1217 - shallow copy
 */

console.log("** 1217: 얕은 복사 **");

const obj = { // aaa
    x: 10,
};

const obj1 = obj; //aaa
obj1.x = 20;

//console.log('원본 obj', obj);
//console.log('복사 obj', obj1);

const people = { //aaa
    name: "judy",
};
const woman = Object.assign({}, people); // bbb
woman.name = "selly";

// spread oporator
// object, array (o), funcction (x) - 자료구조
// 할당하고자 하는 객체의 타입이 같아야 한다.
const woman2 = { ...people }; //안에있는 값만 카피 //ccc
woman2.name = "candy";

//console.log("복사 people - woman", woman);
//console.log("원본 people - people", people);

//console.log("복사 people - woman2", woman2);
//console.log("원본 people", people);

const man = {
    name: "chris",
    age: 30,
};

const man2 = Object.assign({}, man, { name: 'pillip'}, {email: 'pillip@naver.com'}); //기존에 있는 값이면 오버라이드 없으면 추가
//console.log("man", man);
//console.log("man2", man2);

// es6부터
const man3 = {...man, name: "evan", email: "evan@gmail.com"}; //evan, email : evan@gmail.com
//console.log("man3", man3);

const dObj = { // aaa
    a: 1, 
    b: { //bbb
        x: 10,
        z: 20
    },
};

const copyObj = { ...dObj, b: { ...dObj.b }};

copyObj.a = 5;
copyObj.b.x = 33;

console.log("dup obj - dnjsqhs", dObj);
console.log("dup obj copy - 복사본", copyObj);

console.log("** 1217: 얕은 복사 - end **");
