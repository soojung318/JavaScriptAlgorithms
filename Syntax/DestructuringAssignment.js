/* 구조 분해 할당?
*  배열이나 객체의 요소 및 프로퍼티를 분해해서,
*  그 값들을 각각의 변수에 할당하는 자바스크립트의 표현식
*/
// 1. 배열의 구조 분해 할당
// 일반적으로 배열의 요소에 접근하는 방법
let colors = ["green", "blue", "purpple"];

let c1 = colors[0];
let c2 = colors[1];
let c3 = colors[2];

console.log(c1);
console.log(c2);
console.log(c3);

// 위의 소스코드를 구조분해를 사용하여 구현
let colors = ["green", "blue", "purpple"];
let [c1, c2, c3] = colors;

console.log(c1);
console.log(c2);
console.log(c3);

// 위의 소스코드를 더 간단하게 구현
// 선언 분리 할당 : 변수의 선언을 분리해서 배열의 값을 할당하는 방법
let c1, c2, c3, c4;
[c1, c2, c3] = ["green", "blue", "purpple"];
// [c1, c2] = ["green", "blue", "purpple"];  // 배열의 길이 보다 더 적은 수의 변수를 값에 할당할 경우, 배열 요소 순서대로 값이 할당된다.
// [c1, c2, c3, c4] = ["green", "blue"];  // 배열의 길이 보다 더 많은 수의 변수를 값에 할당할 경우, 배열의 요소들이 각각의 변수에 할당된 이후에 남은 변수들에는 "undefined"라는 값이 할당된다.

console.log(c1);
console.log(c2);
console.log(c3);
//console.log(c4);  //undefined

// 위의 예제에서 배열의 길이보다 더 많은 변수를 값에 할당했을 시, undefined를 원하지 않는다면 default값을 할당해 줄 수 있다.
// 이것을 "기본값 할당" 이라고 한다.
let c1, c2, c3, c4;
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purpple"];
console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);  //yellow


/*
* 배열의 구조분해 할당은 이렇게 배열요소의 값을 추출할 때 자주 사용되지만 두 개의 변수값을 서로 바꿀 때 사용되기도 한다.
*/


// 구조분해를 사용하지 않고 두 변수의 값을 서로 바꾸는 코드.
// tmp라는 임시변수를 사용하여 바꿔야한다.
let a = 10;
let b = 5;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(a, b); //5 10

// tmp 변수를 따로 사용하지 않고 "구조분해를 사용하여" 두 변수의 값을 교환하는 코드를 구현하기.
let a = 10;
let b = 5;

[a, b] = [b, a];  // << 구조분해할당
console.log(a, b);  // 5 10




// 2. 객체의 구조분해할당
// 일반적으로 객체에 접근하는 방법
let colors = {
    c1: "green",
    c2: "blue",
    c3: "purple"
};

let c1 = colors.c1;
let c2 = colors.c2;
let c3 = colors.c3;

console.log(c1);
console.log(c2);
console.log(c3);


// 객체접근 : 구조분해할당 사용함
let colors = {
    c1: "green",
    c2: "blue",
    c3: "purple"
};

// let { 객체 } = 분해할 객체;
let { c1, c2, c3 } = colors; // << 객체 구조 분해 할당 방법

console.log(c1); //green
console.log(c2); //blue
console.log(c3); //purple

/* 배열과 객체의 구조분해할당 차이점
* 배열의 구조 분해 할당은 인덱스를 이용해 인덱스의 순서대로 변수의 값을 할당.
* 객체의 구조 분해 할당은 키값을 기준으로 객체를 분해하여 변수에 할당.
* */

// 위 소스코드에서, 키 값에 구조분해할당을 적용하지 않고 새로운 변수에 구조분해할당을 적용하려면 어떻게 해야할까?
// 먼저, 구조분해할당을 사용하지 않고 구현.
let colors = {
    c1: "green",
    c2: "blue",
    c3: "purple"
};

let color1 = colors.c1;
let color2 = colors.c2;
let color3 = colors.c3;

console.log(c1);  //green
console.log(c2);  //blue
console.log(c3);  //purple

// 구조분해할당을 사용하여 구현
let colors = {
    c1: "green",
    c2: "blue",
    c3: "purple"
};

// c1, c2, c3를 각각 colors1, colors2, colors3로 변경하겠다는 의미
let { c1: colors1, c2: color2, c3: color3 } = colors; // << 구조 분해 할당


// 위 코드에서 "기본값 할당"을 사용하여 구현
let colors = {
    c1: "green",
    c2: "blue",
    c3: "purple"
};

let { c1, c2, c3, c4="yellow"} = colors;
console.log(c1);  //green
console.log(c2);  //blue
console.log(c3);  //purple
console.log(c4);  //yellow