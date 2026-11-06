//Print FizzBuzz from 1 to 50 and count how many Fizz, Buzz and FizzBuzz there were.
let countFizz=0;
let countBuzz=0;
let countFizzBuzz=0;
for (let i = 1; i <= 50; i++) {
 if (i % 15 === 0) {
    console.log("FizzBuzz");
    countFizzBuzz+=1;
 } else if (i % 3 === 0) {
    console.log("Fizz");
    countFizz+=1;
 }else if (i % 5 === 0) {
    console.log("Buzz");
    countBuzz+=1;
 }else {
    console.log(i);
}}
console.log("count of Fizz: "+countFizz);
console.log("count of Buzz: "+countBuzz);
console.log("count of FizzBuzz: "+countFizzBuzz)
