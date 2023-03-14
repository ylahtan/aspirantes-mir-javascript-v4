const maxIndex = function (arr) {

    if (arr.length === 0) return -1;

    let supIndex = 0;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
            supIndex = i;
        }
    }

    return supIndex;
}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));