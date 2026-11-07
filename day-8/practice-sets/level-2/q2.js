//Write a function that takes a price and a GST percent (default 18) and returns the final price.
function finalPrice(price,gst=18){
    return price+(price*gst/100);
}
console.log(finalPrice(1000));
console.log(finalPrice(1000,12));