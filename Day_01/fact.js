function fact(num){
    if (num > 1){
        return fact(num -1) * num;
    }
    else{
        return 1;
    }
}

let res= fact(5);
console.log(res); 