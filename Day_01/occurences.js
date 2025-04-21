function occ(a, s, i, count) {
    if (i < 0) {
        return count;
    }
    if (a[i] == s){
        count++;
}
return occ(a, s, i - 1, count);
}

let count = 0;
let a = "Hello World";
let i = a.length - 1;
let s = "l";
let res = occ(a, s, i, count);
console.log(res);