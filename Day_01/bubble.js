//let a = [5, 13, 6, 7, 1, 19, 2];
let a = ["D","B","A","C"];
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
}

console.log(a)