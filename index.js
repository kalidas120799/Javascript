// variable declaration
var a = 10;
let b = 5;
const sum = a + b;

console.log(typeof "123") // string
console.log(typeof 32) // number
console.log(typeof true) // boolean
console.log(typeof NaN) // number
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof []) // object
console.log(typeof {}) // object
console.log(typeof new Date()) // object
console.log(typeof new RegExp()) // object

// hosting
// is a concept the variables and functions even before initializing/assigning value without getting errors

function fn() {
    b = 10;
    var z = 10;
    console.log(b, z)
}
fn()
console.log(b); // 10
// console.log(z); // error z is not defined

console.log(name); // undefined
var name = "kalidas";
console.log(name); // kalidas

var role;
console.log(role);  // undefined
role = "software developer"
console.log(role);  // software developer

// Built-in objects
// Math
console.log(Math.round(3.7)); // 4
console.log(Math.floor(3.7)); //3
console.log(Math.ceil(3.3)); // 4
console.log(Math.pow(2, 3)); // 2^3 8
console.log(Math.sqrt(8)); // 2/82...
console.log(Math.abs(-8), Math.abs(8)); // 8,8
console.log(Math.min(1, 3, 4, 5, 1)); // 1
console.log(Math.max(...[1, 3, 4, 5, 1])); // 5
console.log(Math.random()); //0.6757657

// date
const date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.toUTCString())
console.log(date.toJSON())
console.log(Date.now());

// Type Casting
// Explicit
console.log(Number("5")) // 5
console.log(Number("sss")) // NaN

const num = 100;
console.log(num.toString()) // '100
console.log(String(true)) // 'true

console.log(Boolean(""), Boolean(0), Boolean(null), Boolean(undefined)) // false
console.log(Boolean(1), Boolean("kalidas")) // true

// Implicit
console.log("5" + 10) // "510"
console.log(2 + true) // 3
console.log("10" == 10, "10" === 10) // true,false
console.log(0 == false, 0 === false) // true,false

// for 
for (var i = 0; i < 10; i++) { console.log(i) }
for (const item of [1, 3, 4, 5]) { console.log(item) }
for (const index in [1, 3, 4, 5]) { console.log(index) }
for (const [index, item] of [1, 3, 4, 5].entries()) { console.log(index, item) }
[1, 3, 4, 5].forEach((item, index) => { console.log(item, index) })

// break and continue
for (const item of [1, 2, 3, 4]) {
    if (item === 1) continue;
    console.log(item) // 2,3
    if (item === 3) break
}

const arr = []
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], arr[i + 1]);
    i++
}

console.log(Math.floor(1994 / 1000)) // 1
console.log(Math.floor((1994 % 1000) / 100)) // 9
console.log(Math.floor((1994 % 100) / 10)) // 9
console.log(1994 % 10) // 4

// sort using loop
function sort(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] > data[i + 1]) {
            let temp = data[i];
            data[i] = data[i + 1]
            data[i + 1] = temp;
            i = -1;
        }
    }
    return data;
}

console.log(sort([10, 1, 5, 2, 6, 8]));
console.log(sort([100, 4, 200, 1, 3, 2]));
console.log(sort(["HTML", "CSS", "JS", "Angular JS", "React", "Python"]))

console.log([0, 1, 4, 3, 2, 4].join("")); // "014324"

function removeDuplicate(nums) {
    if (nums.length === 0) return [];
    const set = new Set();

    for (var i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) set.add(nums[i])
    }
    return Array.from(set.values());
}

console.log(removeDuplicate([4, 3, 2, 4, 3, 1, 0, 2]))

function find(val) {
    for (let i = 1; i <= val; i++) {

        let k = i * (i + 1) / 2;
        let n = (val - i + 1) / 2;
        let l = n * (i + val);

        if (k === l) {
            return i
        }
    }
}

console.log(find(49)) // 35
console.log(find(8)) // 6

function isPalindrome(data) {
    data = data.toString().toLowerCase().split(" ").join("")
    data = data.toString().match(/[a-zA-Z0-9]/g).join("");
    console.log(data)
    let start = 0;
    let end = data.length - 1; 
    while (start < end) {

        if (typeof data[start] === 'string' && typeof data[end] === 'string') {
            if (data[start] != data[end]) return false;
            else {
                start++;
                end--
            }
        } else if (typeof data[start] != 'string' && typeof data[end] != 'string') {
            start++;
            end--
        } else if (typeof data[start] === 'string' && typeof data[end] != 'string') {
            end--
        } else if (typeof data[start] != 'string' && typeof data[end] === 'string') {
            start++;
        }
    }

    return true

}

// console.log(isPalindrome("22/02/2022"))
// console.log(isPalindrome("madam"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))

