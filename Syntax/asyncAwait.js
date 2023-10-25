//async & await
//프로미스 객체를 더 쉽고 직관적으로 작성하게 해줌.

//async와 await를 사용하지 않았을 경우
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const start = () => {
    delay(2000).then(() => {
        console.log("대기");
    });
};

start();



//위 코드를 async로 구현
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const start = async () => {
    // delay(2000).then(() => {
    //   console.log("대기");
    // });
    return "대기";
};

start().then((res) => {
    console.log(res);
});


// async & await 구현
// await 키워드는 함수 내부에서만 사용가능.
// await 뜻이 기다리다,라는 뜻인 것만큼 해당 프로미스가 처리될 때까지 (여기선 delay함수) 기다린 다음 결과값을 받아볼 수 있음
// 따라서 await 코드가 종료되기 전까지 그 아래의 코드는 수행되지 않음
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const start = async () => {
    await delay(2000);
    console.log("대기");
};

start();

/*
    async와 await로 비동기 함수를 처리하게 되면 프로미스객체를 훨씬 가독성 좋게 사용이 가능하고 편리하게 사용할 수 있으며
    기존의 실행순서가 예측이 불가능했던 비동기처리 방식과는 달리 비동기함수의 실행순서를 예측할 수 있게 된다.
*/


// async와 await를 사용하여 예외를 처리하는 방법
// 프로미스 객체에서는 catch 문법을 사용하여 예외처리를 했으나, async와 await에서는 try-catch문을 사용하여 처리한다.
//async & await
//프로미스 객체를 더 쉽고 직관적으로 작성하게 해줌.
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const start = async () => {
    try{
        await delay(2000);
        console.log("대기");
    }
    catch(error){ //try문 안에서 error가 발생하면 실행함. error가 발생하면 이 에러객체를 사용하여 어떤 에러가 발생했는지 출력할 수 있다.
        console.log(error);
    }
};

start();
