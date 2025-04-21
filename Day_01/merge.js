function ms(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = ms(arr.slice(0, mid));
    const right = ms(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let a = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            a.push(left[i]);
            i++;
        }
        else if (left[i] > right[j]) {
            a.push(right[j]);
            j++;
        }
    }
    return a.concat(left.slice(i), right.slice(j));
}

let a = [5, 13, 6, 7, 1, 19, 2];
console.log(ms(a));