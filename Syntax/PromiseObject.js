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
}); // >> 비동기함수는 이러한 콜백지옥에 빠질 수 있음 이걸 "프로미스 객체"로 해결한다.

workD("workD", (res) => {
    console.log(res);
});
// 비동기 함수의 결과값을 계속해서 전달애햐하기 때문에 순서대로 실행되어
// 10에 5를 더한 15, 15에 3을 뺀 12,12에 10을 더한 22가 출력되는 것을 볼 수 있다.


/*
    프로미스 객체 : 비동기 함수를 더 편하게 이용할 수 있게 하는 자바스크립트 내장객체. 인수로 executor라는 실행함수를 전달한다.
    resolve, reject는 자바스크립트에서 자체적으로 제공하는 콜백함수로, executor이 비동기처리가 성공하면 resolve를,
    비동기처리가 실패한다면 reject를 호출한다. 비동기 처리 작업은 항상 성공할 수도, 실패할 수도 있기 때문에
    (resolve, reject) 둘 중 하나는 반드시 호출해야 한다.

    프로미스는 객체이기 때문에 프로퍼티들을 가지고 있다.
    프로미스 객체의 내부 프로퍼티 : (state, result)
    프로미스 객체는 맨 처음 대기상태와 Undefined 값을 가지고 있다가 executor가 호출하는 콜백함수에 따라 State와 Result가 변화된다.

   [ new Promise(executor) ]
     state: pending(대기)    -----resolve(value)----->  state: fulfilled(성공)
     result: undefined                                  result: value

          "                  ----reject(error)------>   state: rejected(실패)
                                                        result: error

    이렇게 프로미스 객체의 상태는 resolve와 reject를 통해 변하지만, 한번 변경된 상태에서는 더이상 변하지 않기 때문에
    처리가 끝난 프로미스 객체에 resolve 또는 reject를 호출하면 무시된다는 것을 주의해야 한다.
*/

// resolve,reject 호출될 때 Promise 내부 property 값이 어떻게 변화하는지 보는 예제
const executor = (resolve, reject) => {
    setTimeout(() => {
        console.log("3초만 기다리세요");
    }, 5000);
};
const promise = new Promise(executor);



// 비동기 처리가 성공 및 실패 했을 때의 예제 2가지
// 1. resolve 사용법 예제
const executor = (resolve, reject) => {
    setTimeout(() => {
        resolve("성공"); // 1. 이 resolve 콜백함수에 전달된 값은
    }, 5000);
};

const promise = new Promise(executor);
promise.then((res) =>{ //2. promise 객체의 then 메서드를 이용해 사용할 수 있고, 이 then 메서드는 executor 함수에서 전달한 값이 매개변수로 전달된다.
    console.log(res);  //3. 이 executor에서 전달한 성공이라는 값을 콜백함수의 매개변수로 전달받을 수 있다.
}); //3초후 "성공" 출력.




// 2. reject 사용법 예제
const executor = (resolve, reject) => {
    setTimeout(()=> {
        reject("실패");
    },3000);
};

const promise = new Promise(executor);
promise
    .then((res)=>{
        console.log(res); //then 메소드는 성공시에만 출력되므로 여기선 출력 안됨.
    })
    .catch((err)=>{
        console.log(err); // "실패" 출력됨
    });


//[예제] 콜백지옥 코드에 프로미스 객체 적용하기
const workA=()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value+5);
        },5000)
    });
    return promise;
}
const workB=()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value-3);
        },3000)
    });
    return promise;
}
const workC=()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(value+10);
        },10000)
    });
    return promise;
}
// 콜백지옥
// workA(10).then((resA)=>{
//     console.log(`1. ${resA}`); //1. 15
//     workB(resA).then((resB) => {
//         console.log(`2. ${resB}`);  //2. 12
//         workC(resB).then((resC)=>{
//             console.log(`3. ${resC}`);  //3. 22
//         });
//     });
// });

//위의 소스코드를 프로미스 객체를 사용함
//프로미스 체이닝 : 계속해서 프로미스 객체를 반환하며 then 메소드를 연속으로 사용함
workA(10)
    .then((resA)=>{
        console.log(`1. ${resA}`);  //1. 15
        return workB(resA);
    })
    .then((resB)=>{
        console.log(`2. ${resB}`);  //2. 12
        return workC(resB);
    })
    .then((resC)=>{
        console.log(`3. ${resC}`);  //3. 22
    });
