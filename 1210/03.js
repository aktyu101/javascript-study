/**
 * 03 - 배열(객체타입)
 */
console.log('** 1210: 배열 타입 **')
const arr1 = [1, 2, 3, 4, 5]; // 0 ~

console.log('index 0', arr1[0]);
console.log('index 1', arr1[1]);
console.log('index 2', arr1[2]);

arr1[0] = 10; //배열 순서로 접근해서 바꿔주면 값이 바뀜
console.log("arr", arr1);

const arr2 = arr1;
arr2[4] = 90;

console.log('arr 원본', arr1);
console.log('arr 복사본', arr2);

console.log("** 1210: 배열 타입 - end **")

