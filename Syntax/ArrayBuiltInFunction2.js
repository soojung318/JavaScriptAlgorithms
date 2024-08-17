// 9. concat(): 두 개의 배열을 하나로 합쳐 새로운 배열로 반환 가능한 메서드.
let array1 = ["green", "blue"];
let array2 = ["purple","yellow"];

console.log(array1.concat(array2)); //["green", "blue", "purple", "yellow"]



// 10. join() : 하나의 배열에서 배열 요소들의 값들을 "문자열"로 이어주는 메서드.(concat 메서드와 비슷하지만 다르다)
let array1 = ["green", "blue", "purple", "yellow"];

console.log(array1.join());  //green,blue,purple,yellow : 기본 구분자는 쉽표(,)
console.log(array1.join(" "));  //green blue purple yellow : 구분자를 넣어주면 원하는 구분자가 출력됨.



// 11. sort() : 배열을 정렬할 때 사용하는 내장함수
let colors = ["green", "blue", "purple"];

colors.sort();
console.log(colors); // ["blue", "green", "purple"] : 알파벳 순으로 정렬됨. default는 오름차순.

// 그럼 내림차순 정렬은 어떻게 할까?
// 12. compare(a,b) : a는 배열의 다음 요소, b는 배열의 이전 요소
// 반환값 : 0보다 작은 값(-1) == a가 b보다 앞에 있어야 함, 0보다 큰 값(1) == b가 a보다 앞에 있어야 함, 0 == 순서 변경 X
// (1) 배열이 문자열일 경우
const compare = (a,b)=>{
    if(a>b) return -1;
    else if(a<b) return 1;
    else return 0;
}

let colors = ["green", "blue", "purple"];

colors.sort(compare);   // ["blue", "green", "purple"] : 알파벳 순서로 정렬됨.
console.log(colors);    // ["purple", "green", "blue"]


// (2) 배열이 정수형일 경우
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort();
console.log(numbers);   //[1, 100, 120, 25, 3, 50] : 숫자의 크기 순이 아닌, 사전 순으로 정렬이 된다.

// 그렇다면 숫자의 크기 순으로는 어떻게 정렬할까?
const compare = (a,b) => {
    //오름차순 = 다음요소-이전요소>0 (a-b>0)가 음수면 순서를 바꾸도록 한다.
    return a - b;
};

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers);  //[1, 3, 25, 50, 100, 120]

// 이번엔 내림차순으로!
const compare = (a,b) => {
    //내림림차순 = 이전요소-다음요소>0 (b-a)>0)가 음수면 순서를 바꾸도록 한다.
    return b - a;
};

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare);
console.log(numbers);  //[120, 100, 50, 25, 3, 1]


/* sort() 사용시 주의할 점!!
* sort() 메서드는 배열의 요소를 원하는 순서대로 정렬할 때 사용되는 내장함수로
* sort() 메서드를 사용할 때에는 이 메서드를 한번 사용하면 이후의 해당 배열의 요소의 순서는
* 정렬된 그대로 변경되어 있다는 것을 주의해서 사용해야 한다.
* */



/*
12. reduce(Accumulator, Current Value, index) : 배열의 모든 요소들에 대해 확인하고 누적된 값들을 출력하고 싶을 때
유용하게 사용할 수 있고 코드를 훨씬 깔끔하게 만들어주는 유용한 내장함수.
*/
// Accumulator : 콜백 함수의 반환값을 누적하는 매개변수
// Current Value : 내가 계속 사용했었던 현재 처리할 요소의 값을 나타냄.
// index : 처리할 현재 배열 요소의 인덱스 값을 나타냄.
//forEach문으로 구현
let numbers = [1, 100, 25, 50];
let sum = 0;
numbers.forEach((elm)=>{
    sum+=elm;
});
console.log(sum);

//위 코드를 reduce()메서드로 구현
let numbers = [1, 100, 25, 50];
let sum = numbers.reduce((acc,cur,idx)=>{
    console.log(acc, cur, idx);
    return acc + cur;
},0); //0은 초기화값
console.log(sum); //176

/*

0  1  0         >> acc, cur, idx의 값. cur은 numbers의 0번째 값 출력. acc는 초기화값. idx는 numbers에서 cur이 가리키는 현재값의 인덱스를 출력
1  100  1       >> 1 = acc + cur = 0 + 1, 100 = numbers 요소의 1번째 요소, 1 = currunt value의 인덱스
101  25  2      >> 101 = acc + cur = 1 + 101,
126  50  3
176
*/




// 13. isArray() : 전달된 매개변수가 배열인지 아닌지를 판별하는 내장함수이다.(boolean) 자주 사용되는 유용한 매개 변수
// JavaScript를 사용해 프로그램을 작성하다 보면 특정 변수가 담고 있는 값이 배열인지 객체인지 혹은 특정 숫자인지 헷갈릴 경우가 종종 발생할 수 있다.
// 이럴 경우에 isArray()를 사용하여 특정 변수에 담고 있는 값이 배열인지 아닌지를 쉽게 확인할 수 있다.
let a = Array.isArray([1,100,50]);
let b = Array.isArray({id:1, color:"green"});
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);     //true false false false : 배열이면 true, 아니면 false

/*
    정리
    이외에도 다양한 내장함수가 존재.
    Mozilla 재단의 공식사이트를 읽어본다.
    https://developer.mozilla.org/ko/docs/Web/JavaScript
*/
