//Check whether a year is a leap year (divisible by 4, but not by 100 unless also by 400).
let year=2004;
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year+" is leap year");
}else{
    console.log(year+" is not leap year");
}