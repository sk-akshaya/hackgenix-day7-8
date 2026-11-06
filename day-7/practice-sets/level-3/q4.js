//Print a pyramid with spaces and stars for any height the user enters
let height=Number(prompt("Enter the height"));
for(let i=1;i<=height;i++){
    let space="";
    let star="";
    for(let j=1;j<=height-i;j++){
        space+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        star+="*";
    }
    console.log(space+star);
}