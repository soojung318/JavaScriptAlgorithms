function solution(str){
    let answer=str; //주소복사
    answer =  answer.replace(/A/g,'#');
    return answer;
}

let str = "BANANA"
console.log(solution(str));