function numprime(num) {
    let list = new Array;
    let k = 1;
    nextPrime:
    for (let i = 2; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        } if (k <= num) {list.push(i); k++}
    } 
    return (list);
}
console.log(numprime(process.argv[2]));