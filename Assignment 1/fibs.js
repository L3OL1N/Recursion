function fibs(num){
    let arr = [0,1];
    for(let i = 0; i < num; i++){
        arr.push(arr[0+i]+arr[1+i]);
    }
    return arr.slice(0,arr.length-2);
}
console.log(fibs(8));