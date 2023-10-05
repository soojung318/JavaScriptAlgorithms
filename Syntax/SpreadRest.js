//spread : 확산, 퍼짐, 전파 ; 특정 배열의 요소나 객체의 프로퍼티 값들을 펼치는 역할.
// 1. 객체에서의 사용법
const toy = {
    type: "bear",
    price: 15000
};

const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
};

const yellowToy = {
    type: "bear",
    priec: 15000,
    color: "yellow"
};

/*
    위 코드의 문제점:
    비슷한 프로퍼티를 가진 객체를 생성하려면 동일한 코드를 여러번 작성해야함.
    => spread로 해결 (...객체명)
*/
const toy = {
    type: "bear",
    price: 15000
};

const blueToy = {
    ...toy,
    color: "blue"
};

const yellowToy = {
    ...toy,
    color: "yellow"
};

console.log(blueToy);  //{type: "bear", price: 15000, color: "blue"}
console.log(yellowToy);  //{type: "bear", price: 15000, color: "yellow"}


// 2. 배열에서의 사용법
const color1 = ["red", "orange", "yelllow"];
const color2 = ["blue", "navy", "purple"];

const rainbow = [...color1, "green", ...color2];

console.log(rainbow);  //["red", "orange", "yelllow", "green", "blue", "navy", "purple"]

/*
    스프레드 문법은 배열이나 객체에서 반복적인 부분을 이 점 3개의 기호를 사용해 퍼뜨릴 수 있고
    위의 rainbow 배열처럼 순서에 상관없이 여러번 반복해서 사용할 수도 있다.
*/








//rest : 나머지 매개 변수
/* spread와 rest의 차이점
   spread는 객체나 배열에서 반복적인 값을 퍼뜨려주는 문법이지만,
   rest는 이와는 반대로, 특정 부분들을 하나의 배열이나 객체로 묶어주는 문법임.
*/
// 1. 객체에서 rest 사용하는 법
const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
};

const {type, price, color} = blueToy;

console.log(type); //bear
console.log(price); //15000
console.log(color); //blue


// 위의 소스코드에서 price와 color를 하나의 객체로 묶어서 출력하고 싶을 때, rest 문법을 사용한다.
const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
};

const {type, ...rest} = blueToy;

console.log(type); //bear
console.log(rest); //{price: 15000, color: "blue"} : type값을 제외한 나머지 값 존재.

/*
    rest는 구좁분해 할당을 통해 원하는 값들을 꺼내고 나머지 값들을 별도로 묶어서 할당할 수 있다.
*/

//⚠️rest문법 사용시 주의사항 ⚠️
const blueToy = {
    type: "bear",
    price: 15000,
    color: "blue"
};

const {...rest, type} = blueToy;

console.log(type); //error
console.log(rest);  //error
//SyntaxError: /src/index.mjs: The rest element has to be the last element when destructuring (7:16)
//⭐️rest 문법은 스프레드와는 다르게 순서에 상관없이 여러번 작성할 수 없고 항상 맨 마지막에 작성해야 한다.




// 2. 배열에서 rest 사용하기
const colors = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest] = colors;
console.log(c1, c2);  //red orange
console.log(rest);    //["yellow", "green"]




// 3. 함수에서 rest 사용하기
//일반코드
const print = (a, b, c, d, e, f) => {
    console.log([c, d, e, f]);
};
//아, 이거 헷갈렸는데 이름만 print인 함수임.
print(1, 2, 3, 4, 5, 6);  //[3, 4, 5, 6]

//rest사용
const print = (a,b, ...rest) => {  //c,d,e,f를 rest로 묶음
    console.log(a,b, rest);//1 2 [3, 4, 5, 6]
};

print(1,2,3,4,5,6);

/*
    rest매개변수는 함수의 매개변수가 매우 많거나 몇 개가 될지 모를 때 함수에서 받아온
    매개변수들을 배열로 나타내야 될 떄 유용하게 사용되는 문법.
*/




// spread와 rest의 차이점
// spread와 rest를 사용하지 않으면 매우 불편하다.
const print = (a,b,c,d,e,f) => {
    console.log(a,b,c,d,e,f);
};
const numbers = [1,2,3,4,5,6];
print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);  //1 2 3 4 5 6

// 프린트 함수의 인수부분을 스프레드 문법을 이용하여 간단하게 작성해보기
const print = (a,b,c,d,e,f) => {
    console.log(a,b,c,d,e,f);
};
const numbers = [1,2,3,4,5,6];
print(...numbers);  //1 2 3 4 5 6

// 프린트 함수의 매개변수 부분을 rest문법을 이용하여 간단하게 작성해보기
const print = (...rest) => {
    console.log(rest);
};
const numbers = [1,2,3,4,5,6];
print(...numbers);  //[1, 2, 3, 4, 5, 6]


/*  정리
    spread 문법은 객체나 배열에서 중복된 부분을 퍼뜨릴 때 혹은 함수를 호출할 때 인수로 전달할 값을 퍼뜨릴 때 사용.
    rest 문법은 객체나 배열에서 특정 부분을 하나의 객체나 배열로 묶어야 할 때 혹은 구조분해할당을 사용해 배열이나 객체의 값을 묶어서 할당할 때
    그리고 함수의 매개변수로 많은 값들을 전달 받거나 특정 매변수들을 제외한 나머지 매개변수들을 묶어서 사용할 때 사용되는 문법이다.
*/
