/* 배경지식
    웹페이지를 조작하는 DOM
    HTML(Hyper Text Markup Language) : 브라우저에게 웹 사이트의 요소들이 어떻게 구성되어 있는지 알려주는 역할
    CSS(Cascading Style Sheets) : 웹 사이트의 요소들을 꾸며주는 역할
    DOM(Document Object Model)이란, 문서 객체 모델 : HTML을 자바스크립트가 이해할 수 있게 객체로 변환한 것

    DOM은 HTML로 작성된 여러 요소들에 JavaScript가 접근할 수 있도록 브라우저가 변환시킨 객체이고,
    JavaScript는 이러한 DOM을 통해 HTML로 짜여진 요소들을 생성하고, 수정하고, 삭제할 수 있다.
    또한 DOM은 자바스크립트가 자신에게 접근하여 DOM을 조작하고 수정할 수 있는 방법인 DOM API를 제공하기 때문에
    자바스크립트는 이를 활용해 웹요소들을 생성하고 수정하고 삭제할 수 있다.

    DOM API를 이용해 HTML요소들에 접근하기 위해서는 DOM Tree를 참고한다.
*/



/*
<!DOCTYPE html>
<html>
<head>
<title>Parcel Sandbox</title>
<meta charset="UTF-8" />
</head>

<body>
<div class="today-info">
    <div class="date" id="date">
        10.25.수요일
    </div>
    <div class="colck" id="clock">
        21:56
    </div>
</div>

<script src="src/index.js"></script>
</body>
</html>
*/

// 하나의 요소만 반환하는 API
// 1. getElementId API : 특정 요소의 id 값을 가져와서 그 특정 요소 객체를 반환하는 API
//                  : 동일한 id값을 가진 객체가 여러개 있을 경우, 가장 위에 있는 첫 번째 요소만 반환함.

console.log(document.getElementById("date")); //출력값: <div class="date" id="date">10.25.수요일</div>

// 2. QuerySelector API : 요소의 값이 아이디가 아닌 CSS 선택자로 요소 노드를 반환하는 API
console.log(document.querySelector("div.date")); //출력값: <div class="date" id="date">10.25.수요일</div>

// 여러개의 요소를 반환하는 API
console.log(document.getElementsByTagName("div")); //출력값: HTMLCollection {0: HTMLDivElement, 1: HTMLDivElement, 2: HTMLDivElement, length: 3, item: ƒ item()…}

//클래스명 date 출력
console.log(document.getElementById("date").className); //date

//클래스명 바꾸는 예제
const dateElement = document.getElementById("date");
dateElement.className = "change";

console.log(dateElement);

//id 값 출력
console.log(document.querySelector("div.date").id); //date로 변경됨.

//id값 변경 후 출력
const dateElement = document.querySelector("div.date");
dateElement.id = "change";

console.log(dateElement); //change로 변경됨

//classList 사용하여 클래스에 접근하기 :클래스 네임처럼 특정 요소의 클래스 속성에 접근하지만 클래스와는 다르게 여러가지 메서드를 사용할 수 있다.
//add, remove, item, toggle, contains, replace 메서드를 제공함.
console.log(document.getElementById("date").classList); //DOMTokenList {0: "date", length: 1, value: "date", item: ƒ item(), contains: ƒ contains()…}

// 1. add 메서드를 사용해 클래스 네임 추가 : className은 요소에 무언가를 대입하면 이름 전체가 변경되지만
// classList는 기존의 값에 특정 값을 추가하거나 제거하고 변경이 가능한 속성이다.
// 2. remove를 사용해 클래스명 제거하기
const dateElement = document.getElementById("date");
dateElement.classList.add("change"); //1
dateElement.classList.remove("date"); //2

console.log(dateElement);

//textContent : 요소에 새로운 text를 할당할 수 있다.
const clockElement = document.getElementById("clock");
clockElement.textContent = "12:00"; //Browser에서 21:56 -> 12:00으로 변경됨.

const clockElement = document.querySelector("div.date");
clockElement.textContent = "10.26.목요일"; // 브라우저에서 10.25.수요일 -> 10.26.목요일 로 변경됨.

