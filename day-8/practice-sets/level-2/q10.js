/*Write a function that receives an object and returns a text with one 'key: value' line per property,
using Object.entries.*/
function objectToText(obj){
    let result="";
    for(let [key,value] of Object.entries(obj)){
        result+=key+": "+value+"\n";
    }
    return result;
}
let student={
    name:"Akshaya",
    age:22,
    city:"Chennai",
    marks:85
};
console.log(objectToText(student));