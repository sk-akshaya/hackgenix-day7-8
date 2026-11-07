//Print every item of an array using for, for...of and forEach.
let fruits=["Apple","Mango","Orange","Grapes","Banana"];

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit)=>{
    console.log(fruit);
});