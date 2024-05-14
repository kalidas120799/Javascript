/* A Set in JavaScript is a collection of unique values, 
meaning that each value can only occur once within the set */

const set = new Set();

set.add(1)
set.add(1)
set.add(5)
set.add(1)
set.add(2)
set.add(10)

set.delete(2);

console.log(set)
console.log(Array.from(set.values()))


// set.clear();

set.forEach((value) => {
    console.log(value)
});

console.log(set.size)

console.log(set)

console.log([...new Set([1, 1, 1, 3, 3])])