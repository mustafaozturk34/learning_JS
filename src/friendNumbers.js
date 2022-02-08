function friendNumbers(number1, number2) {
    let numberOneTotal = 0;
    let numberTwoTotal = 0;
    let bigger = number1 > number2 ? number1 : number2; 

    for(let i = 1; i < bigger; i++) {
        if(number1 % i == 0 && number1 > i) numberOneTotal += i;
        if(number2 % i == 0 && number2 > i) numberTwoTotal += i;
    }
    if(number1 == numberTwoTotal && number2 == numberOneTotal) console.log(`${number1} and ${number2} are friend numbers`);
    else console.log(`${number1} and ${number2} are not friend numbers`)
}

friendNumbers(1184,1210);