/*Create an array of 5 student objects and print the names, the topper, the class average and the
failed students.*/
let students=[
    {name:"Asha",marks:85},
    {name:"Kavi",marks:92},
    {name:"pavi",marks:45},
    {name:"Priya",marks:78},
    {name:"Arun",marks:35}
];
students.forEach((s)=>console.log(s.name));
let topper=students.reduce((a,b)=>a.marks>b.marks?a:b);
console.log("Topper:",topper.name,topper.marks);
let total=students.reduce((sum,s)=>sum+s.marks,0);
let average=total/students.length;
console.log("Class Average:",average);
let failed=students.filter((s)=>s.marks<40);
console.log("Failed Students:",failed);