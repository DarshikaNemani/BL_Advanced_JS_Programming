const arr = ["apple", "banana", "grape", "pineapple", "mango"];
const substr = "app";
let res = [];

for (let i in arr){
    let a = arr[i];
    if(a.includes(substr)){
       res.push(a); 
    }
}
console.log(res);