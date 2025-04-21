function fibo(f){
    if (f <= 1){
        return f;
    }
    else{
        return fibo (f-2) + fibo(f-1);
    }
}

let res = fibo(10);
console.log(res);