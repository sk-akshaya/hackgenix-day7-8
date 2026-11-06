/*Build a grade calculator: marks to grade with if / else if, and a remark for each grade with switch*/
const mark=67;
let grade="";
if (mark>=90 && mark<=100){
    console.log("GRADE:A+");
    grade="A+";
}else if(mark<=89 && mark>=75){
    console.log("GRADE:A");
    grade="A";
}else if(mark<=74 && mark>=60){
    console.log("GRADE:B");
    grade="B";
}else if(mark<=59 && mark>=40){
    console.log("GRADE:C");
    grade="C";
}else {
    console.log("FAIL");
    grade="F";
}

switch(grade){
    case "A+":
        console.log("REMARK:what is the use of this grade? hold the topper tag.");
        break;

    case "A":
        console.log("REMARK:one more step to reach the peak.");
        break;

    case "B":
        console.log("REMARK:not a topper, not a loser. Being in a safe state.");
        break;

    case "C":
        console.log("REMARK:be careful, you are going to fail nextime.");
        break;

    case "F":
        console.log("REMARK:fail again,fail better, the world is yours");
        break;

    default:
        console.log("REMARK:Invalid grade");
}

