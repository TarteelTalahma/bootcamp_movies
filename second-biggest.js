const secondBiggest = function (arr) {
    let sortedArray = arr.sort()
    let secondBiggestNum = sortedArray[arr.length - 2]
    return secondBiggestNum
}

const biggest = secondBiggest([8, 3, 9, 4])
console.log(biggest)

