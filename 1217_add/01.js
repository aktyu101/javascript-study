console.log('** 1217 과제 **')
//얕은 복사 과정
//숫자 배열을 가진 변수 a가 있습니다. 변수 b에 복사한 후 6, 7을 추가해보세요.
const a = [1, 2, 3, 4, 5];
const b = [...a, 6, 7];

console.log(b);

/**사람의 이름과 나이를 정보로 가진 변수 classA가 있습니다. 변수 classB에 classA 정보를 복사한 후,
26살의 kein을 추가해보세요.*/

const classA = {
	judy: {
		age: 25
	},
	pillip: {
		age: 24
	}
};

const classB = {
	...classA,
	 "kein" : {
		age : 26
	}
};
console.log(classB);
/**
 * 숫자 배열을 가진 변수 c가 있습니다. 변수 d에 복사한 후 9, 10을 추가하고 숫자 1, 2는 각각 10과 20으로 변경하세요.
 */
const c = [1, 2, 3, 4, 5];
// 변수 d에 복사 후 9, 10 추가
const d = [...c, 9, 10];
console.log(d);
// 그 후 변수 d의 1, 2를 각각 10, 20으로 변경
d[0] = 10;
d[1] = 20;
console.log(d);

/**
 * classA에 1년을 있었던 judy와 pillip은 classB로 이동하기로 했습니다.
그리고 classB에는 27살의 kein이 있습니다. judy와 pillip은 각각 1살씩을 더 먹었기 때문에 26살과 25살이 되었습니다.
그리고 학생부에서는 학생들 정보에 이름@gmail.com 형태의 email 정보를 추가하기로 했습니다.
변수 classB에 위의 문제에 해당하는 정보를 넣되 classA의 정보가 변경되서는 안됩니다.
 */
const classA2 = {
	judy: {
		age: 25
	},
	pillip: {
		age: 24
	}
};
// 변수 classB에 kein: { age: 27 } 추가
const classB2 = {
	judy: {
		...classA2.judy,
		age: 26
	},
	pillip: {
		...classA2.pillip,
		age: 25
	},
	kein: {
		age: 27,
		email: 'pillip@gmail.com'
	}
};
//const classB2 = Object.assign({}, classA2, { judy: {age : 26}}, { pillip: {age : 25}, "kein": {age : 27}});
//console.log(classB2);

// classB 학생들 정보에는 name@gmail.com 형태의 email 정보 각각 추가

console.log(classB2);
//반복문 과제
//차례대로 출력해 보세요.
const a3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a3);

for (let i = 0; i < a3.length; i++ ) {
    console.log(a[i]);
}
//반대로 출력해 보세요.
for (let i = a3.length - 1; i >= 0; i-- ) {
    console.log(a[i]);  //a3[i]
}
//짝수만 출력해 보세요.
for (let i = 0; i < a3.length; i++ ) {
		//const num = a[i];
	if(a3[i] % 2 !== 0) continue; {
		console.log("짝수", a3[i]);
	}
}
//3과 5가 아닌 수만 출력해 보세요.
for (let i = 0; i <= a3.length; i++ ) {
	if(a3[i] !== 3 && a3[i] !== 5) continue; { //3, 5라면 무시
		console.log("3과 5가 아닌 수", a3[i]);
	}
}
//5의 배수만 출력해 보세요.
for (let i = 0; i <= a3.length; i++ ) {
	if(a3[i] % 5 !== 0 ) continue; { //5의 배수라면 무시 
		console.log("5의 배수", a3[i]);
	}
}
//if (num === 3 || num === 5) continue;

//forof

const obj = { a: 1, b: 2, c: 3 };
//key a, b, c만 출력해 보세요.

const keyArr = Object.keys(obj);
for ( let k of keyArr ){
	console.log(k);
}

//value 1, 2, 3만 출력해 보세요.
const valueArr = Object.values(obj);
for ( let v of valueArr ){
	console.log(v);
};
//entry에 해당하는 [key, value] 형태를 출력해 보세요.
const entryArr = Object.entries(obj);
for (let [k, v] of entryArr) {
	console.log('key', k);
	console.log('value', v);
};

//key: a를 제외하고 출력해 보세요.
const keyArr2 = Object.keys(obj);
for (let k of keyArr2) {
	if(k === 'a') continue; {
		console.log('for of', k);
	}
};
//value가 짝수인 경우만 출력해 보세요.
const valueArr2 = Object.values(obj);
for (let v of valueArr2) {
	if (v % 2 !== 0) continue;
	console.log(v);
};

//a, b, c의 총합을 변수 sum에 담아 출력해 보세요.
let sum = 0; //외부변수가 필요함
for (let value of valArr3){
	sum += value;
};
console.log('** 1217 과제 - end **')
