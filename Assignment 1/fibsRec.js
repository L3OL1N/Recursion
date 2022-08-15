function fibsRec(num){
    if(num < 2) return [0];
    if(num < 3) return [0,1];
    const arr = fibsRec(num-1);
    arr.push(arr[num-2]+arr[num-3])
    return arr;
}
console.log(fibsRec(8));


