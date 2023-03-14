const max = function (arr) {

    if (arr.length === 0) return undefined;

    let sup = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (sup < arr[i]) sup = arr[i];
    }

    return sup;
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4]));
console.log(max([]));