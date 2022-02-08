function primeNumbers() {
    let isPrime = true;
    for(let i = 0; i <= 1000; i++) {
        if(i < 2) continue;
        for(let j = 2; j < i; j++) {
            if(i % j == 0) isPrime = false;
        }
        if(isPrime) console.log(`${i} is a prime number.`)
        isPrime = true;
    }
}

primeNumbers();