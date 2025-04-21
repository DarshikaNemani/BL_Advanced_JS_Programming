let a = [5, 13, 6, 7, 1, 19, 2];

for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++)
        if (a[j] < a[min]) {
            min = j;
        }
    [a[i], a[min]] = [a[min], a[i]]
}

console.log(a);