//Print the sum and the average of the numbers from 1 to n.
let num=Number(prompt("enter a number:"));
let n=num;
let sum=0;
while(num>0){
    sum=sum+num;
    num-=1;
}
let average=sum/n;
console.log(`the sum is ${sum}`);
console.log(`the average is ${average}`);