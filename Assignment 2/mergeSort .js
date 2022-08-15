let arr = [5,2,3,1,6,4]
function mergeSort(arr){
    if(arr.length < 2) return arr;
    let left = mergeSort(arr.slice(0,arr.length/2));
    let right = mergeSort(arr.slice(arr.length/2));
    return merge(left,right);
}
function merge(left,right){
    const newArr = [];
    while(left.length > 0 && right.length > 0){
        const min = left[0] < right[0]?left:right;
        const el = min.shift();
        newArr.push(el);
    }
    return newArr.concat(left,right);
}

console.log(mergeSort(arr));

