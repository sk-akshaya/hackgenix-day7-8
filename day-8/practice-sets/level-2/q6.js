/*sort numbers ascending and descending, names alphabetically, and an array of student objects by
marks.*/
let numbers=[40,10,80,20,50];
console.log(numbers.slice().sort((a,b)=>a-b));
console.log(numbers.slice().sort((a,b)=>b-a));
let names=["Ravi","Akshaya","Priya","Arun"];
console.log(names.sort());
let students=[
    {name:"Akshaya",marks:85},
    {name:"Ravi",marks:60},
    {name:"Priya",marks:95}
];
students.sort((a,b)=>b.marks-a.marks);
console.log(students);