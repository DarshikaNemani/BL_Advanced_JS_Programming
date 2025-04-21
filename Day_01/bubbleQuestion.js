function bubbleSort(a){
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]];
            count++;
            }
        }
    }
    console.log(`${a} was sorted in ${count} swaps`);    
}

function bubbleReverse(a){
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] < a[j]) {
                [a[i], a[j]] = [a[j], a[i]];
            count++;
            }
        }
    }
    console.log(`${a} was sorted in ${count} swaps`);
}

let arr = [5,6,7,3,1,9];
let arr1 = [5,6,7,3,1,9];
bubbleSort(arr);
bubbleReverse(arr1);