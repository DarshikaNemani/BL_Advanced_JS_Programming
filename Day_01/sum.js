function add(num){
    if (num > 0){
        return num + add(num-1);
    }
    else{
        return 0;
    }
}

let res = add(5);
console.log(res);