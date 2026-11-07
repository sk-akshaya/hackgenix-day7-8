/*Create an array of 5 fruits. Print the first, the last and the length. Add one at the start and one at the
end, and remove one*/
let fruits=["Apple","Mango","Orange","Grapes","Banana"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);
fruits.unshift("Cherry");
fruits.push("Pineapple");
fruits.pop();
console.log(fruits);