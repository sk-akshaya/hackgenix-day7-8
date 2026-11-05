console.log("lab ready");
const customer=prompt("enter your name:"), price=250;
let quantity=Number(prompt("enter the quantity:"));
if (quantity <= 0 || Number.isNaN(quantity)) {
    alert("Enter a valid number");
}
console.log(`${customer} is buying ${quantity} items at Rs.${price}`);
let calculateAmount=price*quantity;
let discount=calculateAmount>=1000? 10/100 : 5/100;
let gst=calculateAmount*(18/100);
let total=(calculateAmount-(calculateAmount*discount))+gst;
console.log("-------bill-------");
console.log(`Customer Name: ${customer}`);
console.log(`Price: ${price.toFixed(2)}`);
console.log(`Quantity: ${quantity}`);
console.log(`Discount: ${discount.toFixed(2)}`);
console.log(`GST: ${gst.toFixed(2)}`);
console.log(`Total: ${total.toFixed(2)}`);







const mark=Number(prompt("enter your mark(0-100):"));
let grade="";
if (mark < 0 || mark >100 || Number.isNaN(mark)) {
    alert("Enter a valid mark");
}else{
if (mark>=90 && mark<=100){
    console.log("GRADE:A+");
    grade="A+";
}else if(mark<=89 && mark>=75){
    console.log("GRADE:A");
    grade="A";
}else if(mark<=74 && mark>=60){
    console.log("GRADE:B");
    grade="B";
}else if(mark<=59 && mark>=40){
    console.log("GRADE:C");
    grade="C";
}else {
    console.log("FAIL");
    grade="F";
}


switch (grade) {
    case "A+":
        console.log("what is the use of this grade? hold the topper tag.");
        break;

    case "A":
        console.log("one more step to reach the peak.");
        break;

    case "B":
        console.log("not a topper, not a loser. Being in a safe state.");
        break;

    case "C":
        console.log("be careful, you are going to fail nextime.");
        break;

    case "F":
        console.log("fail again,fail better, the world is yours");
        break;

    default:
        console.log("Invalid grade");
}

}


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


