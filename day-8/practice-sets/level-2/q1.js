//Write max(arr) first with a loop, then again with reduce. Do not use Math.max.
let arr=[10,25,5,40,15];
// Using loop
function max(arr){
    let largest=arr[0];
    for(let num of arr){
        if(num>largest){
            largest=num;
        }
    }
    return largest;
}
console.log(max(arr));
// Using reduce
let largest=arr.reduce((a,b)=>a>b?a:b);
console.log(largest);