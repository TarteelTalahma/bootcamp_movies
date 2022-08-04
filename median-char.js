const medianChar = function (str) {
    const sortedString = str.split("").sort().join("");
    return sortedString[Math.round(str.length / 2) - 1]
}
const median = medianChar("hello")
console.log(median)