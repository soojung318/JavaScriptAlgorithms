function solution(arr){
    let answer=[];
    let sum=0, min = Number.MAX_SAFE_INTEGER;
    for (let i of arr){
        if(i%2===1) {
            sum+=i;
            if(min>i) min=i;
        }
        answer.push(sum);
        answer.push(min);
        return answer;
    }

}

let arr = [12, 77, 38, 41, ,53, 92, 85];
console.log(solution(arr)); //[0, 9007199254740991]