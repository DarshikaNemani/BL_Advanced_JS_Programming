let a = [1,5,3,7,9,6,11,4,15,];
let find = 1;

for (let i of a){
    if(i === find){
        console.log("Found!")
    }
    else{
        return -1;
    }
}