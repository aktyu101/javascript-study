/**
 * 04 - 비교연산자
 */
console.log('** 1210: 비교연산자 **')
// 같은가, 다른가, 크건가 같은가, 작거나 같은가, 작은가, 큰가, 비슷한가
// ==, ===(type 까지), !==(완전히다른가), >, <, >=, <=, 

const num1 = 10;
const num2 = "10";

console.log('10 ==', num1 == num2 );
console.log('10 ===', num1 === num2 ); //거의 type까지 비교

const num3 = 200;
console.log('200과 "200"이 다른가?', num3 !== "200");
console.log('200과 "200"이 다른가?', num3 !== 200);

console.log("200은 99보다 큰가", num3 > 99);
console.log("200은 500보다 작은가", num3 < 500);
console.log("200은 200보다 크거나 같은가", num3 >= 200);
console.log("200은 300보다 작거나 같은가", num3 <= 200);

console.log("** 1210: 비교연산자 - end **")
