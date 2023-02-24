function isAnagram(str1, str2) {
    let str1Sort = str1.toLowerCase().split('').sort().join('').trim()
    let str2Sort = str2.toLowerCase().split('').sort().join('').trim()

    return (str1Sort === str2Sort) ? true : false
}

console.log(isAnagram('Astronomer', 'Moon starer'))
console.log(isAnagram("School master", "The classroom"))
console.log(isAnagram('Hello', 'what'))

