const seasonElment = document.createElement("div"); //div 요소노드생성
seasonElment.classList.add("season"); //위에서 생성한 요소 노드 div의 클래스네임 'season' 추가

//텍스트 추가 방법 1 : textContent 사용
//seasonElment.textContent = "spring";

//텍스트 추가 방법 2 : createTextNode() 사용
const seasonText = document.createTextNode("spring");
console.log(document.getElementsByTagName("div")); //기존 html에 작성한 태그만 출력된다.

/*
  직접 DOM의 요소들을 추가해보는 메서드라고 했는데 왜 출력이 되지 않을까?
  이유: 이렇게 생성한 요소와 텍스트 노드들을 생성만 되었을 뿐,
  아직 DOM Tree에 추가된 것이 아니기 때문이다.
  따라서 이렇게 생성한 요소 노드, 텍스트 노드들은 appendChild를 사용해 DOM Tree에 추가할 수 있다.
  appendChild 메서드는 매개변수로 전달받은 노드를 특정 요소의 마지막 자식으로 추가하는 메서드이다.
  위 코드를 다시 짜면 아래와 같다.
*/

const seasonElment = document.createElement("div");
seasonElment.classList.add("season");

const seasonText = document.createTextNode("spring");
const todayInfoElement = document.querySelector("div.today");
todayInfoElement.appendChild(seasonElment);
seasonElment.appendChild(seasonText);

console.log(document.getElementsByTagName("div"));

//DOM API를 사용하여 버튼 만들기
const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";

const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);

console.log(document.getElementsByTagName("div"));
/* 출력결과
0:
<div class="today-info">
<div class="date" id="date">
        10.25.수요일
      </div>
<div class="colck" id="clock">
        21:56
      </div>
<div class="button">버튼</div>
</div>
1:
<div class="date" id="date">
        10.25.수요일
      </div>
2:
<div class="colck" id="clock">
        21:56
      </div>
3:
<div class="button">버튼</div>
*/

//DOM API를 사용하여 웹요소 조작하기
