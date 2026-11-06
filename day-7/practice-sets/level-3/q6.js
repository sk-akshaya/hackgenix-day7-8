//Convert a number of seconds into hh:mm:ss using Math.floor, % and padStart(2, "0").
let seconds=Number(prompt("Enter the number of seconds"));
let hours=Math.floor(seconds/3600);
let minutes=Math.floor((seconds%3600)/60);
let remainingSeconds=seconds%60;
let time=String(hours).padStart(2,"0")+":"+String(minutes).padStart(2,"0")+":"+String(remainingSeconds).padStart(2,"0");
console.log("Time: "+time);