// variable declaration
var a = 10;
let b = 5;
const sum = a + b;

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
    if(item===3) break
}
