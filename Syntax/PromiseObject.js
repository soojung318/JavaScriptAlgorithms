/*
    프로미스 객체 : 비동기 작업을 다룰 때 사용됨
*/

//workA,B,C는 비동기함수로, workD는 동기적으로 구현한 예제
//함수들을 호출할 때 출력할 단어와, 단어를 출력하는 함수를 인수로 넘겨준다.
const workA = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 5000);
};

const workB = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 3000);
};

const workC = (value, callback) => {
    setTimeout(() => {
        callback(value);
    }, 100000);
};

const workD = (value, callback) => {
    callback(value);
};

workA("workA", (res) => { //3
    console.log(res);
});
workB("workB", (res) => { //2
    console.log(res);
});
workC("workC", (res) => { //4
    console.log(res);
});
workD("workD", (res) => { //1 순으로 출력.
    console.log(res);
});
/*
    먼저 동기 함수 workD가 출력되고, 이후 workB 함수는 console.log로 매개변수로 받은 값을 출력하는
    함수를 인수로 전달했다. 이 workB 함수에서는 value 값으로 workB를 받고, callback 으로는 매개변수로 받은 값을
    출력하는 함수를 전달 받는다. 이후 setTimeout의 콜백함수에서 workB가 3초 뒤에 출력되고, workC, workA 함수도
    동일한 방식으로 실행되어 알맞은 값이 출력된다.
*/


/*
    위의 예제에서 workA가 매개변수로 받은 값에 5를 더하고, 그 결과값을 workB에서 전달받아 다시 3을 빼고,
    다시 그 결과값에 10을 더하는 workC 함수로 코드를 변경한 예제.
*/
const workA = (value, callback) => { //2
    setTimeout(() => {
        callback(value + 5);
    }, 5000);
};

const workB = (value, callback) => { //3
    setTimeout(() => {
        callback(valu - 3);
    }, 3000);
};

const workC = (value, callback) => { //4
    setTimeout(() => {
        callback(value + 10);
    }, 10000);
};
const workD = (value, callback) => { //1
    callback(value);
};

workA(10, (resA) => {
    console.log(`1. ${resA}`);
    workB(resA, (resB) => {
        console.log(`2. ${resB}`);
        workC(resB, (resC) => {
            console.log(`3. ${resC}`);
        });
    });
});

workD("workD", (res) => {
    console.log(res);
});
// 비동기 함수의 결과값을 계속해서 전달애햐하기 때문에 순서대로 실행되어
// 10에 5를 더한 15, 15에 3을 뺀 12,12에 10을 더한 22가 출력되는 것을 볼 수 있다.