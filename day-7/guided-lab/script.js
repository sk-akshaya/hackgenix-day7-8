console.log("lab ready");
const customer=prompt("enter your name:"), price=250;
let qty=document.getElementById("quantity");
let btn=document.getElementById("btn");
let output=document.getElementById("output");
btn.addEventListener('click',function(){
        let quantity = Number(qty.value);
    if (isNaN(quantity) || quantity <= 0) {
        output.textContent = "Enter a valid quantity";
        return;
    }
output.textContent=`${customer} is buying ${quantity} items at Rs.${price}`;
let calculateAmount=price*quantity;
let discount=calculateAmount>=1000? 10/100 : 5/100;
let gst=calculateAmount*(18/100);
let total=(calculateAmount-(calculateAmount*discount))+gst;
output.textContent=`-------bill-------\n`+
`Customer Name: ${customer}\n` +
`Price: Rs.${price.toFixed(2)}\n` +
`Quantity: ${quantity}\n` +
`Amount: Rs.${calculateAmount.toFixed(2)}\n` +
`Discount: Rs.${(calculateAmount*discount).toFixed(2)}\n` +
`GST: Rs.${gst.toFixed(2)}\n` +
`Total: Rs.${total.toFixed(2)}`;
});





let gradeOutput=document.getElementById("gradeOutput");
let btnGrade=document.getElementById("btnGrade");
btnGrade.addEventListener('click',function(){
const mark=Number(prompt("enter your mark(0-100):"));
let grade="";
if (mark < 0 || mark >100 || Number.isNaN(mark)) {
    alert("Enter a valid mark");
}else{
if (mark>=90 && mark<=100){
    gradeOutput.textContent="GRADE:A+\n";
    grade="A+";
}else if(mark<=89 && mark>=75){
    gradeOutput.textContent="GRADE:A\n";
    grade="A";
}else if(mark<=74 && mark>=60){
    gradeOutput.textContent="GRADE:B\n";
    grade="B";
}else if(mark<=59 && mark>=40){
    gradeOutput.textContent="GRADE:C\n";
    grade="C";
}else {
    gradeOutput.textContent="FAIL\n";
    grade="F";
}}

switch(grade){
    case "A+":
        gradeOutput.textContent+="REMARK:what is the use of this grade? hold the topper tag.";
        break;

    case "A":
        gradeOutput.textContent+="REMARK:one more step to reach the peak.";
        break;

    case "B":
        gradeOutput.textContent+="REMARK:not a topper, not a loser. Being in a safe state.";
        break;

    case "C":
        gradeOutput.textContent+="REMARK:be careful, you are going to fail nextime.";
        break;

    case "F":
        gradeOutput.textContent+="REMARK:fail again,fail better, the world is yours";
        break;

    default:
        gradeOutput.textContent+="REMARK:Invalid grade";
}
});




let num=Number(prompt("enter a number:"));
if (num <= 0 || Number.isNaN(num)) {
    alert("Enter a valid number");
}else{
    let num1=num;
    console.log(`Multiplication Table of ${num1}`);
    for(let i=1;i<=10;i++){
        let table=num1*i;
        console.log(`${i} X ${num1} = ${table}`);
    }
    let num2=num;
    console.log("the sum of 1 to"+num2);
    let sum=0;
    while(num2>0){
        sum=sum+num2;
        num2-=1;
    }
    console.log(`the sum is ${sum}`);
    let num3=num;
    console.log("the evn numbers upto"+num3);
    let j=1
    while(j<=num3){
        if(j%2===0){
            console.log(j);
        }
        j=j+1;
    }

    }



for (let row = 1; row <= 5; row++) {
 let line = "";
 for (let star = 1; star <= row; star++) {
 line += "*";
 }
 console.log(line);
}
for (let row = 1; row <= 5; row++) {
 let line = "";
 for (let i = 1; i <= row; i++) {
 line += i;
 }
 console.log(line);
}

for (let i = 1; i <= 30; i++) {
 if (i % 15 === 0) {
    console.log("FizzBuzz");
 } else if (i % 3 === 0) {
    console.log("Fizz");
 }else if (i % 5 === 0) {
    console.log("Buzz");
 }else {
    console.log(i);
}
}

console.log("the prime numbers between 1-50")
for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}
