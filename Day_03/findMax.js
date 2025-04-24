let arr = [4, 3, 5, 6, 1, 2];
let n = 3;
for (let i = 0; i < n; i++) {
    let max = 0, maxI = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > max) {
            max = arr[j];
            maxI = j;
        }
    }
    if (i == n - 1) {
        console.log(`max ${n}th number is ${max}`);
    }
    else {
        [arr[maxI], arr[arr.length - 1]] = [arr[arr.length - 1], arr[maxI]];
        arr.length--;
    }
}