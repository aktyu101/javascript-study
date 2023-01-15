//230114 study
//생성자함수(기억할 수 있는 공간을 만듦)
// function Account() {
//   // let  this{}
//   // return this
// } // 기본 함수 호출
//규격화, 공개할 때

function test() {
  // return undefined
  // undefined
}

function User(name, age) {
  // let this{}
  this.name = name;
  this.age = age;
  this.information = function () {
    console.log(this);
    return `user info : ${this.name}, ${this.age}`;
  };
  // return this
}

const user1 = new User("chris", 20);
const user2 = new User("jake", 27);

console.log(user1.information());
console.log(user2);
console.log(user1 === user2); //false

// const Call2 = () => {
//   console.log(this); //window 전역 개체
// };
// //arrow 함수는 this(x)

///////////////////////////////////////////////////////////////////
function Calculator(initial = 0) {
  this.count = initial;

  this.sum = function (num) {
    this.count = this.count + num;
    return this.count;
  };

  this.subtract = function (num) {
    this.count = this.count - num;
  };

  this.multiply = function (num) {
    this.count = this.count * num;
  };

  this.divide = function (num) {
    this.count = this.count / num;
  };
}

const calcultor1 = new Calculator();
const calcultor2 = new Calculator(50);

calcultor1.sum(10);

calcultor1.subtract(5);
calcultor1.multiply(5);

console.log(calcultor1.count);
// console.log(calcultor2.count);
console.log("calculator1.count", calcultor1.count);

//closer (일반적인 함수 호출 키워드 사용)
//내부 변수값을 숨기고 싶을 때(캡슐화, 은닉화)
function fruit() {
  let type = "apple";
  return function (t) {
    type = t;
    return type;
  };
}
const fr = fruit();
console.log("fr funtion", fr("strawberry"));

//계산기
function calc() {
  let count = 0; //초기값
  function sum(num) {
    count += num;
    // return count;
  }
  function mul(num) {
    count *= num;
    // return count;
  }
  function getCount() {
    return count;
  }
  return {
    sum,
    mul,
    getCount,
  };
}

const cl = calc();
const cl2 = calc();
cl.sum(10);
cl.mul(20);
console.log("cl", cl.getCount());
console.log("cl", cl2.getCount());
