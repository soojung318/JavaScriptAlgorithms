//최솟값 구하기
function solution(a, b, c, d, e, f, g) {
    let answer = a;
    if (answer > b) answer = b;
    if (answer > c) answer = c;
    if (answer > d) answer = d;
    if (answer > e) answer = e;
    if (answer > f) answer = f;
    if (answer > g) answer = g;
    return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));


/*
    인자를 배열로 넘겨보기. let arr = [5, 7, 1, 3, 2, 9, 11]; console.log(solution(arr));
    Number.MAX_SAFE_INTEGER; 사용해서 다시 풀어보기
*/


function solution(arr){
    let answer, min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<arr.length; i++){
        if(arr[i]< min) min=arr[i];
    }
    answer=min;
    return answer;
}

let arr = [5, 7, 4, 3, ,2, 9, 11];
console.log(solution(arr));