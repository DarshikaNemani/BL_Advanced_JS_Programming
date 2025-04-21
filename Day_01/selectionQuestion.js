let a = [5, 13, 6, 7, 1, 19, 2], count = 0;

for (let i = 0; i < a.length; i++) {
    let max = i;
    for (let j = i + 1; j < a.length; j++) {
        if (a[j] > a[max]) {
            max = j;
        }
    }
    if (i !== max) {
        [a[i], a[max]] = [a[max], a[i]];
        count++;
    }
}

console.log(`${a} was sorted in ${count} swaps, and max is ${a[0]} and min is ${a[a.length-1]}`);