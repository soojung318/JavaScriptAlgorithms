function solution(arr){
    let answer=arr;
    let sum = arr.reduce((a,b)=>a+b, 0);
    for(let i=0; i<8; i++){
        for(let j=i+1; j<9; j++){
            if((sum-(arr[i]+arr[j]))==100){
                arr.splice(i,1);
                arr.splice(j,1);
                flag=1;
                break;
            }
        }
        if(flag==1) break;
    }

    return answer;  //[20, 23, 19, 10, 15, 8]
}

let arr = [20, 7, 23, 19, 10, 15, 8, 13];
console.log(solution(arr));

