function multN(n) {
    return function multByM(m) {
        return m * n;
    }
}

var multBy3 = multN(3);
console.log("Multiplying by 2: " + multBy3(2));
console.log("Multiplying by 3: " + multBy3(3));