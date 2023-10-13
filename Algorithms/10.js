function solution(str, c) {
    let answer = 0;
    for (let i of str) {
        if (i === c) answer++;
    }
    return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str,'R'));
