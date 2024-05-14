// A string in JavaScript is a sequence of characters, such as letters, numbers, and symbols
console.log("yigtiu")

const str = "Lorem"

console.log(str.length)

console.log(str.charAt(0))
console.log(str[0])

// find ascii value
console.log(str.charCodeAt(0))

console.log(str.includes("l"), str.includes("L"))
console.log(str.indexOf("L"))
console.log(str.lastIndexOf("m"))

const str1 = "   Lorem1 Lorem1 "

console.log(str.toLowerCase())
console.log(str.toUpperCase())

console.log(str1.trim())

// check string are equal
console.log(str.localeCompare(str1))
console.log(str.localeCompare(str))

// replace
console.log(str1.replace("Lorem1", "ipsum"))

// get char
console.log(str1.split(""))
console.log(str1.split("").join("."))

const num = 123
console.log(num, num.toString())

console.log(JSON.stringify({ id: 1 }))

console.log(`${str} ${str1}`)