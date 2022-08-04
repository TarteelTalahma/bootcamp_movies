const DuplicateAnArray = function (arr) {
    let copyArray = []
    for (let i = 0; i < arr.length; i++) {
        copyArray[i] = arr[i]
        copyArray[i + arr.length] = arr[i]
    }

    return copyArray
}

const printArray = DuplicateAnArray([1, 2, 3])
console.log(printArray)
