function solution(n) {
    let answer;
    answer = n / 12;
    if (n % 12 > 0) answer = answer + 1;
    return parseInt(answer);
}

console.log(solution(178));




/*
    Math.ceil() : 소수자리 올림
*/

//let answer = Math.ceil(n/12);