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



let passed=students.filter((s)=>{
    return [s.maths,s.science,s.english].every((mark)=>mark>=40);
});
let failed=students.filter((s)=>{
    return ![s.maths,s.science,s.english].every((mark)=>mark>=40);
});
console.table(passed);
console.log("Number of failed students: "+failed.length);


let classAverage=students.reduce((sum,s)=>sum+Number(average(s)),0)/students.length;
let topper=students.reduce((top,s)=>total(s)>total(top)?s:top);
let subjectAverage=students.reduce((sum,s)=>{
    sum.maths+=s.maths;
    sum.science+=s.science;
    sum.english+=s.english;
    return sum;
},{maths:0,science:0,english:0});
console.log(`Class Average: ${classAverage.toFixed(2)}`);
console.log(`Topper: ${topper.name} - ${total(topper)}`);
console.log(`Maths Average: ${(subjectAverage.maths/students.length).toFixed(2)}`);
console.log(`Science Average: ${(subjectAverage.science/students.length).toFixed(2)}`);
console.log(`English Average: ${(subjectAverage.english/students.length).toFixed(2)}`);


let sortedReport=[...report].sort((a,b)=>b.total-a.total);
let rankedReport=sortedReport.map((s,i)=>({
    ...s,
    rank:i+1
}));
console.table(rankedReport);


let board=document.getElementById("board");
function showTable(list){
    let rows=list.map((s)=>{
        return `<tr>
            <td>${s.name}</td>
            <td>${s.maths || "-"}</td>
            <td>${s.science || "-"}</td>
            <td>${s.english || "-"}</td>
            <td>${s.total}</td>
            <td>${s.average}</td>
            <td>${s.grade}</td>
        </tr>`;
    }).join("");
    board.innerHTML=`
        <tr>
            <th>Name</th>
            <th>Maths</th>
            <th>Science</th>
            <th>English</th>
            <th>Total</th>
            <th>Average</th>
            <th>Grade</th>
        </tr>
        ${rows}
    `;
}
document.getElementById("all").addEventListener("click",()=>{
    showTable(report);
});
document.getElementById("passed").addEventListener("click",()=>{
    showTable(passed.map(s=>report.find(r=>r.name===s.name)));
});
document.getElementById("sort").addEventListener("click",()=>{
    showTable(rankedReport);
});
showTable(report);