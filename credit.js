//Calculates the total payment based on one payment.
function simpleInterest(balance, interest) {
    return balance + (balance * interest);
}


//Anual yearly percent
//Calculates the sub-interest to be accumulated each period to equal the total interest.
function ayp(interest, period) {
    return Math.pow(1 + interest, 1 / period) - 1;
}





//This calculates the total cost of paying off a credit card balance.
//first pay off all of the principle
//build a side stack of interest money
//pay off the interest money. 
function payCreditCard(balance, interest, payment) {
    let principle = balance;
    let interestPaid = 0;

    while (balance > payment) {
        balance = balance - payment;
        interestPaid = interestPaid + balance * ayp(interest, 12);
    }

    interestPaid = interestPaid + principle;

    return interestPaid;
}




//introduces a 4th variable which allows you to delay/defer interest payments for a while.
//case 1: you pay off everything before the interest kicks in.
//case 2: you pay off some, and then pass the rest of the work to the credit card function because it is the same problem at this point.  why re-program something that works.
function payLoan(balance, interest, payment, defer) {
    let principle = balance;
    let offset = payment * defer;

    if (offset >= principle) {
        return principle;
    }
    else {
        let newbalance = principle - (payment * defer);
        return offset + payCreditCard(newbalance, interest, payment);
    }

}



/***************************** Write some logs **********************************/
/****************************to see some results*********************************/
console.log("-------------AYP-------------");
console.log( ayp(0.15,12))
console.log( ayp(0.15,4))
console.log( ayp(0.22,12))
console.log( ayp(0.22,4))
console.log("-------------credit card decision-------------");
console.log (payCreditCard (3570, 0.1545, 210));
console.log(payCreditCard (3570, 0.1899, 210));
console.log(payCreditCard(3570, 0.1545, 840 ));

let pay = 385000/360;
let A = 385000 - 90000;
let B = 385000 - 120000;
let C = 385000 - 40000;
console.log("-------------no down payment-------------");
console.log( payLoan(385000, 0.04, pay, 10));
console.log( payLoan(385000, 0.052, pay, 15));
console.log( payLoan(385000,0.029, pay, 0));
console.log("-------------with down payment-------------");
console.log( payLoan(A, 0.04,A/360, 10));
console.log( payLoan(B , 0.052, B/360, 15));
console.log( payLoan(C, 0.029, C/360 , 0));