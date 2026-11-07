//Use filter to get all even numbers from an array, and all words longer than 4 letters from another.
let numbers=[1,2,3,4,5,6,7,8];
let even=numbers.filter((num)=>num%2===0);
console.log(even);
let words=["Apple","Cat","Mango","Banana","Dog"];
let result=words.filter((word)=>word.length>4);
console.log(result);