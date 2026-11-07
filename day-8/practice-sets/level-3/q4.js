//Group an array of students by grade into an object of arrays using reduce.
let students=[
    {name:"Akshaya",grade:"A"},
    {name:"Kaviya",grade:"B"},
    {name:"Ravi",grade:"A"},
    {name:"Priya",grade:"C"},
    {name:"Arun",grade:"B"}
];

let grouped=students.reduce((result,student)=>{
    if(!result[student.grade]){
        result[student.grade]=[];
    }
    result[student.grade].push(student);
    return result;
},{});
console.log(grouped);