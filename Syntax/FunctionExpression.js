//함수 선언식 - 일반적인 함수. 호이스팅 가능
//함수 표현식 - 호이스팅 불가능
// 호이스팅 : 아직 선언되지 않은 변수나 함수들을 해당 스코프에 가장 위쪽으로 끌어올려서 사용하는 것처럼 보이는 자바스크립트의 작동 방식
// 호이스팅 대상이 아닌 함수 : 순서를 잘 지켜서 코드를 작성해야함. 이를테면 함수 호출문이 선언문보다 위에 있으면 안됨.

let print = function () {
    console.log("hello world");
};

print(); //hello world


// 콜백함수 : 함수를 값 처럼 사용. 다른 함수에 매개변수로 넘겨준 함수.
function start(name, callback){ //2개의 매개변수
    console.log(`안녕하세요 ${name} 입니다.`);
    callback(); // finish(); 매개변수로 전달받은 콜백 함수를 실행 시킴.
}

function finish() {
    console.log("감사합니다.");
}

start("chris", finish);
