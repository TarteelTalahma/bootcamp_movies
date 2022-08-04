
const commonElementTwoArrays = function (arr1, arr2) {
    let commonNumbers = new Set()
    let appearances = new Set(arr2)

    for (let num of arr1) {
        if (appearances.has(num))
            commonNumbers.add(num)
    }
    return commonNumbers
}

const commonElementThreeArrays = function (arr1, arr2, arr3) {
    let betweenTwoArrays = commonElementTwoArrays(arr1, arr2)
    let betweenThreeArrays = commonElementTwoArrays(betweenTwoArrays, arr3)
    return betweenThreeArrays
}

const sortArrays = function (arr1, arr2, arr3) {
    return commonElementThreeArrays(arr1.sort(), arr2.sort(), arr3.sort())
}


const commonThreeArrays = sortArrays([1, 2, 3, 8], [3, 8, 4, 5], [9, 8, 3])
console.log(commonThreeArrays)