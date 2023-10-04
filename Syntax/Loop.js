//for문
//초기화식, 조건식, 증감식
for(let i=1; i<6; i++){
    console.log(i);
}

for(let i=5; i>0; i--){
    console.log(i);
}

//while문
let i = 1;
while(i<6){
    console.log(i);
    i++;
}

//반복문을 사용하여 배열의 모든 요소에 접근하는 법
let arr = [1,2,3,4,5];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}

//반복문을 사용하여 객체의 프로퍼티 순회하는 법 -> 객체를 배열의 형태로 변경 후 시작!
let person = {
    name: "홍길동",
    age: "25",
    height: 100
};

console.log(Object.keys(person));


let person = {
    name: "홍길동",
    age: "25",
    height: 100
};


//반복문을 이용해 객체의 프로퍼티를 순회하는 법
//1. 객체의 프로퍼티를 (키 값들로만 이루어진) 배열 형태로 바꾼다. (3가지)
// ㄱ.객체를 배열로 변경하는 첫 번째 방법 : Object.keys(객체)
console.log(Object.keys(person)); //["name", "age", "height"]

//2. for문을 이용해 객체의 프로퍼티를 순회
let newArray = Object.keys(person);//["name", "age", "height"]
for(let i=0; i<newArray.length; i++){
    let nowKey = newArray[i]; //person객체의 키값을 변수에 저장.
    console.log(`key: ${nowKey}, value: ${person[nowKey]}`)
}
/*
key: name, value: 홍길동
key: age, value: 25
key: height, value: 100
*/

// ㄴ.객체를 배열로 변경하는 두 번째 방법 : Object.values
let person = {
    name: "홍길동",
    age: "25",
    height: 100
};

//1. 객체의 프로퍼티를 (value 값들로만 이루어진) 배열 형태로 바꾼다.
console.log(Object.values(person)); //["홍길동", "25", 100]

//2. for문을 이용해 객체의 프로퍼티를 순회
let newArray = Object.values(person);//["홍길동", "25", 100]
for(let i=0; i<newArray.length; i++){
    console.log(`value: ${newArray[i]}`);
}

/*
value: 홍길동
value: 25
value: 100
*/


//ㄷ. 객체를 배열로 변경하는 마지막 방법 : object.entries()
// key와 value 값을 배열에 담아 새로운 배열로 반환해 주는 메서드.
let person = {
    name: "홍길동",
    age: "25",
    height: 100
};

let newArray = Object.entries(person);

for(let i=0; i<newArray.length; i++){
    console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`)
}

/*
3) [Array(2), Array(2), Array(2)]
0: Array(2)
    0: "name"
    1: "홍길동"
1: Array(2)
    0: "age"
    1: "25"
2: Array(2)
    0: "height"
    1: 100
*/


// for-of문 : 배열의 모든 요소에 접근해야할 때 사용
let arr = [1,2,3,4,5];
for (let i of arr){
    console.log(i);
}

// for-in문 : 주로 객체에서 사용, for문과 달리 객체의 모든 프로퍼티들을 바로 순회할 수 있도록 도와줌
let person = {
    name: "홍길동",
    age: "25",
    height: 180
};

for (let key in person){ //키값에 해당하는 value값 알 수 있다.
    console.log(`key ${key}, value: ${person[key]}`);
}

/*
key name, value: 홍길동
key age, value: 25
key height, value: 180
* */