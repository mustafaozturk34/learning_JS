function findPrime(...numbers) {
    let isPrime = true;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 1){
        for(let j = 2; j < numbers[i]; j++) {
            if(numbers[i] % j == 0){
                isPrime = false;
            }
        }
        if(isPrime) {
            console.log(`${numbers[i]} is a prime number`);
        }else{
            console.log(`${numbers[i]} is not a prime number`);
        }
        }else{
            console.log("Please enter a number greater than 1")
        }
        isPrime = true;

    }
}
findPrime(10,2,3,13,-5,11,15,0,20,100)