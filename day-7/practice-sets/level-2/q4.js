//Count the digits of a number using a while loop.
let num=7605;
let count=0;
while(num>0){
    count+=1;
    num=Math.floor(num/10);
}
console.log("the digits of a number is "+count);