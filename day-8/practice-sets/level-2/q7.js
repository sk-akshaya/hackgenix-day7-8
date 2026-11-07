//Remove duplicates from an array in two ways: filter with indexOf, and new Set.
let numbers=[10,20,10,30,20,40,50,30];

// Method 1: filter with indexOf
let unique1=numbers.filter((num,index)=>numbers.indexOf(num)===index);
console.log(unique1);

// Method 2: using Set
let unique2=[...new Set(numbers)];
console.log(unique2);