function solution(word) {
    let answer = [...word];

    for (let i of answer) {
        if (i == "A") {
            i = "#"
        }
    }

    return answer;
}


console.log(solution("BANANA"));

