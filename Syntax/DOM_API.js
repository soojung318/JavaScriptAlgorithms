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
