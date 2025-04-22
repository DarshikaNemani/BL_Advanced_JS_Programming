function BS(arr, x) {
    function First(arr, x) {
        let low = 0, high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === x) {
                result = mid;
                high = mid - 1;
            } else if (arr[mid] < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    function Last(arr, x) {
        let low = 0, high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === x) {
                result = mid;
                low = mid + 1;
            } else if (arr[mid] < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    const first = First(arr, x);
    const last = Last(arr, x);
    return [first, last];
}

let arr = [1, 2, 2, 2, 3, 4, 5];
let x = 2;
let result = BS(arr, x);
console.log(result);