// A Map in JavaScript is a collection of key-value pairs, similar to an object, but with a few key differences
// map is iterable but object is not iterable
const map = new Map();

// add
map.set("name", "kalidas");
map.set("age", 25);
map.set(true, null);

console.log(map)

// get
console.log(map.get("name"))
console.log(Array.from(map.values()))
console.log(Array.from(map.keys()))

map.forEach((value, key) => { // 1st value then key
    console.log(value, key)
})

// update
map.set("name", "dhanush")

// delete
map.delete(true);

// check
console.log(map.has("name"))
console.log(map.has("true"))

console.log(map.size)

console.log(map);

console.log(new Map([["name", "kalidas"], ["age", 25]]))

// weakmap
const map2 = new Map(); // garbage issue
let obj = { name: "kalidas" }
map2.set("data", obj);

console.log(map2);

obj = null;
console.log(map2);

const weakmap = new WeakMap(); // WeakMap key is object type
let key = { name: "kalidas" }
weakmap.set(key, "data");

console.log(weakmap.get(key));

key = null;
console.log(weakmap);


