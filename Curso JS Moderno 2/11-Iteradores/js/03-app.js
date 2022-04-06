for (let i = 1; i < 100; i++) {

    if (i % 15 === 0) {
        console.log(`${i} Fizz-buz`)
        continue;
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
        continue;
    } else if (i % 2 === 0) {
        console.log(`${i} buz`);
        continue;
    }

}