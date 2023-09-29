// 원시 타입 - 숫자, null, Bigint, undefined, 문자, symbol, boolean
// 비 원시 타입 - 객체(객체, 함수, 배열) : 여러 개의 값들을 저장할 수 있는 자료형

// 객체 생성자를 사용하여 만드는 방법 2가지
// 첫 번째, 객체를 객체 생성자를 통해 생성
let person = new Object();
console.log(person);
// 두 번째, {} 중괄호를 이용한 객체 리터럴 방식 (가장 많이 사용하는 방식)
let person2 = {};
console.log(person2);



//객체의 프로퍼티(속성) : 객체의 중괄호 {} 내부에 들어갈 데이터로, key와 value 쌍으로 이루어져 있는 데이터
//객채의 프로퍼티는 :(클론)을 기준으로 왼쪽엔 key값, 오른쪽엔 value값을 작성한다.
//객체 프로퍼티 value에는 문자형, 숫자형, undefined, 함수 등 어떠한 자료형을 넣어도 상관없다.
//그렇지만, 객체 프로퍼티의 key값은 항상 고유해야된다는 것을 주의해야 한다.
let person = {
    name:"chris",
    phone: undefined,
    age: 20,
    etc: function(){
        console.log("hello world");
    },
};
console.log(person);



let person = {
    name: "chris",
    age: 25,
    pet: "cat"
};
//작성된 person객체의 프로퍼티를 꺼내서 사용하는 방식 2가지
//1.점표기법  2.괄호표기법
//1. 점표기법 : (.)점을 이용해 객체의 값을 꺼내는 방식
console.log(person.name);
console.log(person.age);
console.log(person.pet);
//2. 괄호표기법 : 객체의 이름 뒤에 [] 대괄호를 열어 대괄호 안에 키 값을 작성해 주는 방식
//주의 사항 : 대괄호 안에 큰 따옴표 ""를 이용해 문자열임을 명시해 주어야 함.
console.log(person["name"]);
console.log(person["age"]);
console.log(person["pet"]);




let person = {
    name: "chris",
    age: 25,
    pet: "cat"
};
/*
보통 점표기법을 많이 사용하지만 객체의 키 값이 고정적이지 않고, 키 값을 특정 함수의 매개변수가 결정한다거나,
값이 계속 바뀌는 동적인 경우에는 괄호표기법을 활용하게 된다.
*/
//객체의 키 값을 매개변수가 결정하는 예제코드
//함수의 이름을 작성할 때 여러 단어로 이루어져 있을 경우, 카멜표기법으로 작성해야 한다.
const getValue = (key) => {
    console.log(person[key]);
}
getValue("name");//person객체의 키 값중 name을 인수로 넘겨줌. //chris출력




//객체 프로퍼티를 추가하고 삭제하는 방법
let person = {
    name: "chris",
    age: 20,
    pet: "cat"
};

// 추가하는 방법
person.phone = "010-1234-5678" //1.점표기법
person["height"] = 165; //2.괄호표기법

// 수정하는 방법
person.age = 25;
person["pet"] = "dog";

console.log(person);

/*
참고) let 대신 const(상수)여도 값 변경 가능
상수의 값은 변경될 수 없다고 배웠는데, 왜 const로 선언된 객체 프로퍼티 값 변경은 가능한 걸까?
이것은 객체 프로퍼티의 값을 수정하는 것이 person 객체 자체를 수정하는 행위가 아니기 때문이다.
객체는 생성될 때 고유한 ID를 갖게 되는데 person 객체의 프로퍼티를 변경하는 것은 객체의 고유한 ID를 변경하는 것이 아니기 때문에
const로 선언하더라도 property의 값 변경이 가능한 것이다.
*/

//객체의 고유한 ID 변경하려하는 코드의 예제
const person = {
    name: "chris",
    age: 20,
    pet: "cat"
};
//person 이라는 객체 자체에 새로운 프로퍼티를 저장하려 한다면, 이것은 객체의 고유한 ID를 변경하려 하는 것이므로 다음과 같은 에러 발생.
person = {
    pet: "dog" //TypeError: "person" is read-only
};

//프로퍼티 삭제
delete person.pet;
delete person["age"];
console.log(person);    // {name:"chris"}



const person = {
    name: "chris",
    age: 20,
    pet: "cat",
    print: function () {
        console.log(`제 이름은 ${this.name} 입니다.`);
    }
    /* 에러 : function 키워드로 선언한 메서드는 이 (this) 라는 키워드가 제대로 자신이 속한 객체를 가리키지만\
    화살표형 함수는 자신이 속한 객체를 가리키지 못하기 때문이다.
    print: () => {
        console.log(`제 이름은 ${this.name} 입니다.`);
    }*/
};

person.print();
person["print"]();
console.log(person);

/*
    정리,
    객체는 객체 생성자와 객체 리터럴 방식으로 생성할 수 있고 객체의 중괄호 안에 있는 값들을
    객체의 프로퍼티 혹은 객체의 속성이라고 하며 객체의 프로퍼티는 key와 value값으로 이루어져 있고
    객체 프로퍼티의 키 값은 고유해야 하지만 객체 프로퍼티의 value값들은 어떠한 자료형으로 작성되더라도 상관이 없으며
    만약 객체 프로퍼티의 값이 함수로 생성되게 된다면 이를 메서드라고 부르고 method는 function이라는 키워드로 선언해야 하며
    this라는 키워드를 통해 객체 프로퍼티의 값을 꺼내올 수 있습니다.
* */


