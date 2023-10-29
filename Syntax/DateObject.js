// YYYY-MM-DD
let nowDate = new Date();
console.log(nowDate); //현재 시간 + 요일까지 알려줌

// getMonth, getDate, getDay 사용하여 날짜 출력하기
let nowDate = new Date();
let month = nowDate.getMonth();
let date = nowDate.getDate();
let day = nowDate.getDay();

console.log(`${month}월 ${date}일 ${day}요일`) //9월 29일 0요일
/*
    왜 10월 29일 일요일이 아닌 '9월 29일 0요일'이 출력될까?
    지구에서 1년은 총 12개월로 1월부터 12월까지 나타낼 수 있기 때문에 이 Date객체도 총 12개의 월을 갖고 있다.
    하지만 이렇게 10월이 9월로 표시되는 이유는 데이트 객체가 월을 표기할 때,
    1월을 0으로, 2월을 1로 나타내고, 12월을 11월로 표기하기 때문이다.
    따라서 데이트 객체를 사용해 몇 월인지를 나타낼 때에는 항상 getMonth method의 결과값 뒤에 1을 더해주어야 한다.

    getDay method는 특정 날짜의 요일에 해당하는 값을 숫자로 반환하는 메서드이다.
    getDay메서드는 일요일부터 토요일까지 순서대로 0부터 6까지의 숫자로 요일을 나타내기 때문에
    내가 실제 사용하는 요일로 원하는 값을 얻기 위해서는 내가 사용할 요일의 값이 담긴 "배열"을 사용해야 한다.

*/
const week = ["일", "월", "수", "목", "금", "토"];

let nowDate = new Date();
let month = nowDate.getMonth() + 1;
let date = nowDate.getDate();
let day = nowDate.getDay();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
let seconds = nowDate.getSeconds();

console.log(`${month}월 ${date}일 ${week[day]}요일`); // 10월 29일 일요일
console.log(`${hours}:${minutes}:${seconds}`); // 13:45:46