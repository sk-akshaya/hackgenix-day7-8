//Use map to convert an array of Celsius temperatures to Fahrenheit.
let celsius=[0,25,30,40,100];
let fahrenheit=celsius.map((temp)=>(temp*9/5)+32);
console.log(fahrenheit);