/* An array in JavaScript is a data structure that 
stores a collection of elements, which can be of any data type 
(such as numbers, strings, or even other arrays). */

console.log([1, 3, 4]);

const arr = [];

// add
arr.push(1, 2, 4, 5, 7)

// remove last
arr.pop()

// add to first
arr.unshift(2)

// get first & last
console.log(arr[0], arr[arr.length - 1])

console.log(arr)
console.log(arr.reverse())

function findElement(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true
    }
}

console.log(findElement(arr, 1))

function findIndex(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i
    }
    return -1
}

console.log(findIndex(arr, 1))
console.log(arr.indexOf(1))

console.log(arr)
// It's change original array
arr.splice(1, 2)
console.log(arr)

// It's can't change original array
const slice = arr.slice(1, 2)
console.log(slice, arr)

// shallow copy (if modify data it's affect source data)
const newArr = arr
newArr.splice(1, 2)
console.log(newArr, arr)

// deep copy (if modify data it's not affect source data)
const newArr1 = [...arr]
const newArr2 = Array.from(arr);

console.log(newArr1, newArr2)

console.log([...newArr1, ...newArr2])
console.log([newArr1, newArr2], [newArr1, newArr2].flat())


function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    // return arr1.length === arr2.length && arr1.every((_, i) => arr1[i] === arr2[i])
    return true
}

console.log(isArrayEqual([1, 2], [1, 2]))
console.log(isArrayEqual([1, 2], [1, 3]))

console.log([1, 3, 5, 2, 5].sort())
console.log([1, 3, 5, 2, 5].sort((a, b) => b - a))

const arr5 = [1, 5, 3, 2, -5, 100, 8]
console.log(arr5.sort()) // -5,1,100,2,3,5,8
console.log(arr5.sort((a, b) => a - b)) // -5,1,2,3,5,8,100

const str = "Kalidas"
console.log(str.split("").sort()) // capital come first 

console.log([1, 3, 5, 2, 5].reverse())

// it's return new array
console.log([1, 3, 4].map(e => e * 2))
console.log([1, 3, 4].filter(e => e === 1))

// it's return single value
console.log([1, 3, 4].reduce((a, b) => a + b))

console.log([1, 3, 4].find(e => e === 1))