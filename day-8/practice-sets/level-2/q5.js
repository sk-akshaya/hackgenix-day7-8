//Use reduce to find the total, the highest value and the count of numbers above 50
let numbers=[20,60,80,40,90,30];
let total=numbers.reduce((sum,num)=>sum+num,0);
let highest=numbers.reduce((a,b)=>a>b?a:b);
let count=numbers.filter((num)=>num>50).length;
console.log("Total: "+total);
console.log("Highest: "+highest);
console.log("Count above 50: "+count);