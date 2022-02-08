function perfectNumbers() {
    let total = 0;
    for(let i = 1; i <= 1000; i++) {
        for(let j = 1; j < i; j++) {
            if(i % j == 0) {
                total += j;
            }
        }
        if(i == total) console.log(`${i} is a perfect number`);
        total = 0;
    }
}

perfectNumbers();