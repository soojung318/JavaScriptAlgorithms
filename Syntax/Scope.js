//Scope: 범위, 변수 혹은 함수가 갖게 되는 유효범위
//1. 전역 스코프(Global Scope) - 어디서든지 해당 변수에 접근 가능
//2. 지역 스코프(Local Scope) - 지역을 벗어난 곳에서는 접근 불가능
const num = 10; //전역 스코프

function print() {
    const num = 100; //지역 스코프
    console.log(`지역 스코프 ${num}`); //100
}
print();
console.log(`전역 스코프 ${num}`);  //10

//3. 블록 스코프(Block Scope) - 같은 범위 {..} 내에서만 접근 가능
function print() {
    for (let i = 0; i < 10; i++) {
        console.log(`블록 스코프 : ${i}`);
    }
    console.log(i); //ERROR
}

print();


//cf) let과 var의 차이
//원본코드
let num1 = 10;  //상수
var num2 = 20;  //변수

num1 = 100;
num2 = 200;

console.log(num1); //100
console.log(num2); //200


//let으로 상수 선언 <<주로 사용
let num1 = 10;
let num1 = 100;

console.log(num1); //ERROR - 재선언 불가능

//함수 스코프(let)


//var로 변수 선언
var num2 = 20; //무시됨.
var num2 = 200; //출력

console.log(num2); //200 - 재선언 가능, 같은 이름의 변수를 여러번 선언하는 것이 가능.
//단점
//1)특정변수가 어디에 선언되어 있는지 판단 불가.
//2)어디서 어떻게 사용되고 있는지 파악 불가.
//3)프로그램 상의 오류를 발생시킬 수 있다.

//블록 스코프(var)
function print(){
    for(var i=0; i<10; i++){
        console.log(`블록 스코프 : ${i}`);
    }
    console.log(i); //10
    //var 키워드는 해당 함수 내부에서만 접근 가능한 범위를 갖는 함수 스코프이기 때문에 해당 함수 내부에서 변수 i에 접근하는 것이 가능해짐.
    //for문 안에 선언된 변수가 var로 선언되게 되면 해당 for문이 종료되더라도 같은 함수 내부에서 계속 접근이 가능하기 때문에 여러가지 오류를 발생시킬 수 있다.
}
print();

//정리 - let은 같은 이름으로 변수를 재선언하면 오류를 발생시키지만, var는 오류없이 가장 마지막에 작성된 값으로 변수의 값이 변경된다.
//    - let, const: 블록 스코프, var: 함수 스코프