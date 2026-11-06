/*Build an ATM menu with do...while and switch: 1 Balance, 2 Deposit, 3 Withdraw (no overdraft), 4
Exit.*/
let checkBalance=5000;
let choice;
do{
    console.log("======ATM MENU======");
    console.log("1.Check Balance");
    console.log("2.Deposit");
    console.log("3.Withdraw");
    console.log("4.exit");
    choice=Number(prompt("enter your choice '1/2/3/4'"));
    switch(choice){
        case 1:
            console.log("balance: "+checkBalance);
            break;

        case 2:
            let deposit=Number(prompt("enter the amount"));
            console.log("Deposit: "+(deposit+checkBalance));
            checkBalance+=deposit;

            break;

        case 3:
            let withdraw=Number(prompt("enter the amount to withdraw"));
            if (withdraw<=checkBalance){
            console.log("withdraw: "+(checkBalance-withdraw));
            checkBalance-=withdraw;
            }else{
                console.log("insufficient balance!");
            }
            break;

        case 4:
            break;

        default:
            console.log("invalid choice");
    }

}while(choice!=4);