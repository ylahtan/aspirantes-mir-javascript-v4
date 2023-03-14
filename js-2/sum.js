const sum = function (arr) {

    if (arr.length === 0) return 0;

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
}

console.log(sum([1, 2, 3]));
console.log(sum([10, 12, 8, 5]));
console.log(sum([]));