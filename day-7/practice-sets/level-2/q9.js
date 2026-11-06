//Print a number triangle: 1, then 12, then 123, up to 12345.
for (let row = 1; row <= 5; row++) {
 let line = "";
 for (let i = 1; i <= row; i++) {
 line += i;
 }
 console.log(line);
}
