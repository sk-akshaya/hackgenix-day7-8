//Add a new property to your object, delete another, and print the keys with Object.keys.
let person={
    name:"Akshaya",
    age:22,
    city:"Chennai",
    skills:["HTML","CSS","JavaScript"]
};
person.course="JavaScript";
delete person.age;
console.log(Object.keys(person));