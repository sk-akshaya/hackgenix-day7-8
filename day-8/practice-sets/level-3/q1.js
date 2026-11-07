/*Build a shopping cart with functions to add, remove and change quantity; compute totals with
reduce; print a receipt and the JSON of the cart.*/
let cart=[
    {name:"Shirt",price:500,quantity:2},
    {name:"Shoes",price:1200,quantity:1},
    {name:"Watch",price:800,quantity:1}
];
function addItem(name,price,quantity){
    cart.push({name,price,quantity});
}
function removeItem(name){
    cart=cart.filter((item)=>item.name!==name);
}
function changeQuantity(name,quantity){
    let item=cart.find((item)=>item.name===name);
    if(item){
        item.quantity=quantity;
    }
}
function getTotal(){
    return cart.reduce((total,item)=>total+item.price*item.quantity,0);
}
function printReceipt(){
    console.log("------ RECEIPT ------");
    cart.forEach((item)=>{
        console.log(item.name+" x "+item.quantity+" = ₹"+item.price*item.quantity);
    });
    console.log("Total: ₹"+getTotal());
}
addItem("Bag",600,1);
removeItem("Watch");
changeQuantity("Shirt",3);
printReceipt();
console.log("Cart JSON:");
console.log(JSON.stringify(cart,null,2));