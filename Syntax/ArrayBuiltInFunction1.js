// 배열의 내장함수
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//1. forEach () : callback함수
// callback함수(a,b,c) : 매개 변수로 함수를 전달한다. 3가지 매개변수 전달 가능
// (a) current value(처리할 현재 요소)를 매개변수로 가진다.
arr.forEach((elm) => { //elm : current value
    console.log(elm);

});
// (b) index 매개변수 :index를 출력한다.
arr.forEach((elm, idx) => {
    console.log(`${idx}번쨰 요소는 ${elm}입니다.`);
});
// (c) array :  배열 요소의 수만큼 동일한 배열을 출력하는 매개변수
arr.forEach((elm, idx, array) => {
    console.log(`${idx}번쨰 요소는 ${elm}입니다.`);
    console.log(array);
});


//2. map : 배열 안의 모든 원소를 변환할 떄 유용하게 사용되는 메서드
// 전달한 콜백함수를 호출한 결과를 모아서 새로운 배열로 반환해주는 내장함수로
// 배열의 모든 요소에 연산을 적용하고 그 결과 새로운 배열로 돌려받을 수 있는 내장함수.
// map의 콜백함수에는 forEach와 동일하게 3가지의 매개변수를 전달할 수 있다.
// map(currentValue(처리할 현재 요소), index, array)
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + 10);
}
console.log(newArray);

//위 코드를 map으로 변경
let newArray = arr.map((elm) => { //elm : arr 배열의 현재 요소의 값을 나타냄.
    return elm * 10
});

console.log(newArray);


//3. at()
let colors = ["green", "blue", "purple"];
console.log(colors[2]);//purple
console.log(colors.at(1));//blue
console.log(colors.at(-1));//purple, at(-n) : 항상 배열의 마지막 요소의 값을 반환.


//4.includes()
//a. 매개변수로 받은 요소를 배열이 포함하고 있는지 판별하여 분리한 값으로 반환.
let colors = ["green", "blue", "purple"];
console.log(colors.includes("blue")); //true
console.log(colors.includes("yellow")); //false

//b. 찾고 싶은 배열 요소의 값이 적힌 매개변수의 오른쪽에 배열의 인덱스를 작성할 수 있다.
// index : colors 배열에서 특정 요소를 찾기 시작할 위치
console.log(colors.includes("blue", 2)); //false : 배열의 인덱스 2번부터 blue라는 값을 찾는다.
console.log(colors.includes("blue", 1)); //true : 배열의 인덱스 1번부터 blue라는 값을 찿는다.


//5. indexof : 특정 값이 배열 요소에 있는 지를 검사하는 것이 아니라,
//             특정 값을 지닌 요소가 몇 번쨰에 위치하는 요소인지를 찿아주는 함수.
let colors = ["green", "blue", "purple"];
console.log(colors.indexOf("purple")); //2
// 만약, colors 배열에 존재하지 않는 값을 indexOf() 통해 찾으려면?
console.log(colors.indexOf("yellow")); //-1 : 배열에 존재하지 않음
console.log(colors.indexOf("blue", 1)); //1 : 배열 요소의 값이 객체 형태거나 배열의 형태일 때의 인덱스 찾지 못함.
// 배열을 객체 형태로 바꾸어 봄
let colors = [
    {id: 1, color: "green"},
    {id: 2, color: "blue"},
    {id: 3, color: "purple"}
];
// findIndex : 배열 요소의 값이 객체 형태라면 color가 purple인 객체가 배열의 몇 번째 요소인지 찿는다.
let idx = colors.findIndex((elm) => elm.colors === "purple")
console.log(idx); //2 : id가 출력되는 것이 아닌, index가 출력된다.
let idx = colors.findIndex((elm, idx, array) =>
    console.log(`${idx}번쨰 값은 id: ${elm.id}, color: ${elm.color}`)
);
colors.findIndex((elm, idx, array) => console.log(array));
/*
0번쨰 값은 id: 1, color: green
1번쨰 값은 id: 2, color: blue
2번쨰 값은 id: 3, color: purple
*/


//6.find() : 찾아낸 값의 인덱스를 반환하는 것이 아니라 찾아낸 값 그 자체를 반환.
let idx = colors.find((elm) => elm.color === "purple");
console.log(idx);  //{id: 3, color: "purple"}


/* 정리
* at() : 배열의 가장 마지막 요소에 쉽게 접근할 수 있게 해주는 메서드
* includes() : 배열 요소에 특정 값이 있는지 없는지를 판별하는 내장함수
* indexOf() : 특정 값을 지닌 요소가 몇 번째에 위치하는지 반환하는 메서드
* findIndex() : 배열의 요소가 객체로 이루어져 있을 경우 특정 값을 지닌 요소가 몇 번째에 위치하는지를 반환하는 함수
* find() : 특정 값이 있는 요소의 그 값 자체를 반환하느 내장함수.
* */


// 7. filter() : 특정 요소를 찾는 내장함수
// 조건을 만족하는 가장 첫 번째 값만 반환하는 것이 아니라, 조건을 만족하는 모든 값들을 새로운 배열에 담아서 반환하는 내장함수.
let colors = [
    {id: 1, color: "green"},
    {id: 2, color: "blue"},
    {id: 3, color: "purple"}
];

let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray);

/*
2) [Object, Object]
    0: Object
        id: 2
        color: "blue"
    1: Object
        id: 3
        color: "purple"
*/


// 8. slice() : 배열에서 특정값들만 따로 추출해서 새로운 배열을 생성하는 내장함수.
// 특정 배열을 원하는 부분만 잘라서 가져올 수 있다.
// 2개의 매개변수 : (begin,end)
let colors = [
    {id: 1, color: "green"},
    {id: 2, color: "blue"},
    {id: 3, color: "purple"},
    {id: 4, color: "yellow"}
];

let sliceArray = colors.slice(1,3); //1번 인덱스~ (3-1)번 인덱스 까지.
console.log(sliceArray);
/*

(2) [Object, Object]
    0: Object
        id: 2
        color: "blue"
    1: Object
        id: 3
        color: "purple"
*/