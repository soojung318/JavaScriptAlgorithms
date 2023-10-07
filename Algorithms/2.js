// 삼각형 판별하기
function solution(a,b,c){
    let maxNum,num, answer;
    if(a>b) {
        maxNum = a;
        num = b + c;
    }
    maxNum = b;
    num = 0;
    num = a + c;
    if(c > maxNum) {
        maxNum = c;
        num = 0;
        num = a + b;
    }

    if (maxNum < num){
        answer = "Yes";
    } else {
        answer = "No";
    }
    return answer;
}

console.log(solution(13, 33, 17));