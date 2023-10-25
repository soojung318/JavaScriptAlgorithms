//API
//fetch(API주소) : 자바스크립트에서 API를 호출할 때에는 fetch라는 내장함수를 사용한다.
const response = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(response); //Promise {<pending>}
// 이렇게 프로미스 객체를 반환하는 함수는 비동기처리하는 함수이고 이러한 함수는 then메소드를 사용해 결과값을 출력할 수 있다.
// catch 메서드를 사용하여 error도 출력할 수 있다.

