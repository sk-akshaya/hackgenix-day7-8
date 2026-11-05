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






