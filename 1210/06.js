/**
 * 06 - 조건문
 * if(if, elseif, else), switch(case)
 */
console.log('** 1210: 조건문 **')

const num = 7;

if (num % 5 === 0) {
    console.log('5의 배수입니다');
} else if(num % 3 === 0) {
    console.log('3의 배수입니다');
} else{
    console.log('5의 배수도 3의 배수도 아닙니다.');
}

console.log("** 1210: 조건문 - end **")