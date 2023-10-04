let arr = new Array();
console.log(arr); // [] 출력, 객체는 {} 출력

// 배열 생성 방법 2가지
// 1. 생성자 사용
let array1 = new Array(1,2,3);
let array2 = new Array(3);

console.log(array1);// [1, 2, 3]
console.log(array2);//[undefined, undefined, undefined]


//2. 배열 리터럴 사용
let array1 = [1, 2, 3];
let array2 = [3];

console.log(array1);
console.log(array2);


// 배열엔 다양한 자료형이 들어갈 수 있다.
let arr = [
    { name: "홍길동"},
    1,
    "배열",
    function (){
        console.log("hello world!");
    },
    null,
    undefined
];
console.log(arr);


// 배열에 접근하는 방법
let arr = [1, "hello", null];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


// 배열에 새로운 요소 추가하기 : push
let arr = [1, "hello", null];

arr.push(4); // [1, "hello", null, 4]
// unshift() : 배열의 가장 앞 쪽에 요소를 추가함
arr.unshift(0); //[0, 1, "hello", null]
console.log(arr);


// 배열의 요소 수정하기 : let 으로 배열 선언
let arr = [1, "hello", null];

arr[0] =5;
arr[2] =undefined;
console.log(arr);  //[5, "hello", undefined]

// 배열의 요소 수정하기 : const 로 배열 선언
const arr = [1, "hello", null];

arr[0] =5;
arr[2] =undefined;
console.log(arr);  //[5, "hello", undefined]
/*
   상수선언했는데도 정상 작동하는 이유:
   자밥스크립트에서 배열은 객체로 분류되는 자료형으로
   객체라고 볼 수 있기 때문에 객체와 동일하게 const로 선언되니 배열의 요소를 수정하더라도
   배열 자체를 수정하는 것이 아니어서 const로 선언된 배열의 요소 또한 수정 가능하다.
 */


//배열의 요소 삭제하기 2가지 방법
//1. pop() 내장함수 사용 : 가장 마지막 값 삭제함
const arr = [1, "hello", null];

arr.pop();//[1, "hello"]

//2. shift() 내장함수 사용 : 배열의 가장 앞에 있는 요소를 삭제함
arr.shift();// ["hello"]
console.log(arr);



// 특정 배열의 길이 구하기
const arr = [1, "hello", null];
arr.pop(); //배열의 가장 마지막 요소 삭제

console.log(arr.length); //2 (null이 삭제됨.)
