//Write a function that flattens a nested array like 1, 2], [3, [4].
function flattenArray(arr){
    return arr.flat(Infinity);
}
let numbers=[1,2,[3,[4]]];
console.log(flattenArray(numbers));