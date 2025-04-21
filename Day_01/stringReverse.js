function reverse(a, i){
    if (i >= 0){
        return a[i] + reverse(a, i-1);
    }
    else{
        return '';
    }
}
let c = "Hello"
let i = c.length - 1;
let b = reverse(c, i)
console.log(b);