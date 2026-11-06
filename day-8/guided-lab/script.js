const students=[
    {name:"Asha",maths:85,science:90,english:88},
    {name:"Kaviya",maths:78,science:82,english:75},
    {name:"Ravi",maths:35,science:65,english:70},
    {name:"Priya",maths:92,science:88,english:95},
    {name:"Arun",maths:45,science:55,english:60},
    {name:"Divya",maths:30,science:38,english:50}
];

const total=(s)=>s.maths+s.science+s.english;
const average=(s)=>(total(s)/3).toFixed(2);
const grade=(avg)=>avg>=90?"A+":avg>=75?"A":avg>=60?"B":avg>=40?"C":"F";
console.log(total(students[0]));
console.log(average(students[0]));
console.log(grade(average(students[0])));

let report=students.map((s)=>{
    let avg=average(s);
    return {
        name:s.name,
        total:total(s),
        average:avg,
        grade:grade(avg)
    };
});
console.table(report);