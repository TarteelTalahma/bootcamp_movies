const split = function (str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i).toLocaleLowerCase()
        if (isVowel(letter))
            count++
    }
    console.log(count)
}

const isVowel = function (letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    for (let vowel of vowels) {
        if (vowel === letter)
            return true
    }

}

split("Tarteel")

const Vowel = function (arr1, arr2) {
    let vowelLetters = new Set()
    let appearances = new Set(arr2.toLocaleLowerCase())

    for (let num of arr1) {
        if (appearances.has(num))
            vowelLetters.add(num)
    }
    return vowelLetters
}

Vowel(['a', 'e', 'i', 'o', 'u'], "Tarteel")

