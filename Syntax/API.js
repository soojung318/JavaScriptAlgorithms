//API
//fetch(API주소) : 자바스크립트에서 API를 호출할 때에는 fetch라는 내장함수를 사용한다.
//              : 프로미스 객체를 반환하는 비동기처리 함수.
const response = fetch("https://jsonplaceholder.typicode.com/posts");

console.log(response); //Promise {<pending>}
// 이렇게 프로미스 객체를 반환하는 함수는 비동기처리하는 함수이고 이러한 함수는 then메소드를 사용해 결과값을 출력할 수 있다.
// catch 메서드를 사용하여 error도 출력할 수 있다.
// 다음은 위 코드를 then()과 catch()를 사용하여 구현한 것이다.
const response = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

console.log(response);
/*
    코드 설명: fetch함수는 프로미스 객체를 반환하는 비동기처리 함수이기 때문에 가장 아래에 있는 response를 출력하는 코드가 먼저 실행되었고
    이후 프로미스에서 resolve함수를 통해 전달된 결과값을 then 메서드에서 매개변수로 받아 API 호출의 결과값이 출력된다.
*/

// 원하는 값을 전달받기 위해 getData 함수를 생성한 다음 함수 내부에서 fetch를 통해 api를 호출하는 코드
const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
};

getData();

// api를 호출할 때 정상작동하지 않을 경우의 예외처리(에러처리)법
const getData = async () => {
    try {
        const res = await fetch("https://sonplaceholder.typicode.com/posts"); //일부러 j를 뺌.
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(console.log(error));
    }
};

getData();
