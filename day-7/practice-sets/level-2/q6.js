//Check whether a number is a palindrome (121, 1331).
//Reverse a number (1234 becomes 4321) using % and Math.floor.
let num=121;
let a=num;
let rev=0;
while(num>0){
    let reminder=num%10;
    rev=rev*10+reminder;
    num=Math.floor(num/10);
}
if(a===rev){
    console.log(a+" is palindrome")
}else{
    console.log(a+" is not palindrome")
}

