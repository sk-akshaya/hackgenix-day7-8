//Reverse a number (1234 becomes 4321) using % and Math.floor.
let num=1234;
let a=num;
let rev=0;
while(num>0){
    let reminder=num%10;
    rev=rev*10+reminder;
    num=Math.floor(num/10);
}
console.log(`reverse of ${a} is ${rev}`);
