//Convert your object to JSON text with stringify and back to an object with parse.
let person={
    name:"Akshaya",
    age:22,
    city:"Chennai",
    skills:["HTML","CSS","JavaScript"]
};
let jsonData=JSON.stringify(person);
console.log(jsonData);
let newPerson=JSON.parse(jsonData);
console.log(newPerson);