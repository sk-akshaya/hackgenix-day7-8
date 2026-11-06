//Print the multiplication table of a number entered by the user.
let num=Number(prompt("enter a number:"));
console.log("multiplication table of"+num);
for(let i=1;i<=10;i++){
    let table= i*num;
    console.log(`${i}X${num}=${table}`);
}