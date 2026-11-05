console.log("lab ready");
const customer=prompt("enter your name:"), price=250;
let quantity=Number(prompt("enter the quantity:"));
if (quantity <= 0 || Number.isNaN(quantity)) {
    alert("Enter a valid number");
}
console.log(`${customer} is buying ${quantity} items at Rs.${price}`);



