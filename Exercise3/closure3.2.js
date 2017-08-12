function makeCounter() {
    count = 0;
    return {
        increment: function () {
            count++;
            return count;
        }
    }
}

var counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());