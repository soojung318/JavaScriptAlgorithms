//예제1
function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 15); //25



//예제2
function sum(num1, num2) {
    return num1 + num2;
    console.log("함수 호출"); //return문 아래는 실행되지 않음
}

//Text Interporation 2가지 방식
console.log(`두 숫자를 더한 결과는 ${`${sum(10, 15)}`} 입니다.`); // 1. 템플릿 리터럴(ES6)
console.log(`두 숫자를 더한 결과는 ${sum(10, 10)} 입니다.`); // 2. JSTL



//예제3 : 가독성이 좋지 않은 일반 코드에서 early return pattern을 적용한 코드
//일반 코드
function func(num) {
    if (num > 0) {
        if (num >= 10) {
            console.log("num의 값이 10보다 크거나 같습니다.");
        } else {
            console.log("num의 값이 0보다 크고 10보다 작습니다.");
        }
    } else if (num === 0) {
        console.log("num의 값이 0입니다.");
    } else {
        console.log("num의 값이 0보다 작습니다.");
    }
}
func(15);

//early return pattern을 적용한 코드 :가독성이 좋아 자주 사용되는 패턴
function func(num) {
    if (num === 0) return "num의 값이 0입니다.";
    if (num < 0) return "num의 값이 0보다 작습니다.";
    if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
    return "num의 값이 0보다 크고 10보다 작습니다";
}
console.log(func(15));



//예제4
//호출을 통해 실행(일반적인 함수)
function print() {
    console.log("자바스크립트1");
}
print();

//선언되자마자 즉시 실행 함수(IIFE;Immediately Invoked Function Expression 함수)
(function () {
    console.log("자바스크립트2");
})();



//예제5
//함수 실행 순서 유의
function func() {
    console.log("2");
    console.log("3");
}

console.log("1");
func();
console.log("4");
//1 2 3 4 출력



//예제6 - 지역변수: 함수의 내부에서 선언된 변수
function add(num1, num2) {
    let sum = num1 +num2; //지역변수
    return sum;
}

add(10,15);
console.log(sum); //error : 지역변수를 함수 외부에서 접근함



//예제7 - 외부변수: 함수 외부에서 선언된 변수
let sum = 0; //외부변수(전역변수)

function add(num1, num2) {
    sum = num1 + num2;
}
add(10,15);
console.log(sum);  //25
