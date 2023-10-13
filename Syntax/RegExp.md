# RegExp
Regular Expression의 약자고 한국어론 "정규형"이라고 한다.<br>
이것은 객체다. 이 `RegExp` 객체를 생성하는 방법은 크게 2가지가 있다.<br>
문자열 표기법과 생성자를 사용하는 방법이다.

## 1. Literal notation, 문자열 표기법
```
const re = /ab+c/i; 
```
## 2. Constructor
1) 첫 번째 인수(매개변수)로 문자열 패턴을 사용하는 생성자
```
const re = new RegExp("ab+c", "i"); 
```
2) 첫 번째 인수(매개변수)로 정규식 리터럴을 사용하는 생성자
```
const re = new RegExp(/ab+c/, "i");
```

## Pattern
```
RegExp(pattern, flags?)
```
`pattern` : 정규표현식 문자열이나 다른 RegExp 객체를 파라미터로 받는다.<br>
`flags` : g i m s y u 문자를 받을 수 있다.

1) g: 문자열 전체를 확인한다.
2) i: 문자열 에서 대소문자를 구분하지 않는다.
3) m: 문자열 에서 `^` , `$` 에서 개행문자를 허용한다.
4) s: 문자열 에서 `.` 에서 개행문자를 허용한다.
5) y: lastIndex 부터 일치하는 문자열을 반환한다.
6) u: Unicode 코드 포인트의 시퀀스로 처리한다.
