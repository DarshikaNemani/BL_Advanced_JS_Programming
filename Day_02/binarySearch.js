    function bs(arr, x) {
        let low = 0;
        let high = arr.length - 1;
        while (high >= low) {

            let mid = Math.floor((high + low) / 2)
            if (arr[mid] == x) {
                return 'Found!';
            }
            if (arr[mid] < x) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return -1;
    }
    let arr = [1, 2, 5, 6, 7, 13, 19];
    let x = 13;
    let res = bs(arr, x);
    console.log(res);