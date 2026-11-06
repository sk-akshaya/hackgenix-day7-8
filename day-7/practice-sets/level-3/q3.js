//Print all Armstrong numbers between 1 and 1000 (153 = 1 cubed + 5 cubed + 3 cubed).
for(let num=1;num<=1000;num++){
    let temp=num;
    let sum=0;
    while(temp>0){
        let digit=temp%10;
        sum+=digit*digit*digit;
        temp=Math.floor(temp/10);
    }
    if(sum===num){
        console.log("Armstrong number: "+num);
    }
}