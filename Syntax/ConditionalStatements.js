let num = 7;

// 1. if문
if (num === 10) {
    //조건
    console.log("num의 값은 10 입니다."); //실행 코드
}

// 2. if-else문
if (num === 5) {
    console.log("num값은 5 입니다.");
} else {
    console.log("num값은 ${num}입니다.");
}


// 3. if - else if - else 문
if (num === 10) {
    console.log("num값은 10입니다.");
} else if (num < 10){
    console.log("num값은 10보다 작습니다.");
} else {
    console.log("num값은 10보다 큽니다.");
}

// 4. switch-case문 (자주 사용)
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("바나나");
        break;
    case "orange":
        console.log("오렌지");
        break;
    case "apple":
        console.log("사과");
        break;
    case "grape":
        console.log("포도");
        break;
    default:
        console.log("다른 과일");
}