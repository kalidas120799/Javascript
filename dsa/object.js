/* An object in JavaScript is a collection of key-value pairs, where each key is a 
string (or symbol) and each value can be any data type,including other objects. 
Objects are used to represent complex data structures and are often used for organizing and manipulating data */

const person = {
    name: "kalidas",
    age: 25,
    designation: "software developer",
    skill: ["react JS", "node JS"],
    call: function () {
        return `Hi i am ${this.name}`
    }
}

console.log(person)

// dot
console.log(person.name)

// []
console.log(person["name"])

console.log(person.call())

// check key
console.log(person.hasOwnProperty("name"))
console.log(person.hasOwnProperty("last_name"))

// update object
person.location = "CBE";
console.log(person)

// delete
delete person.location;
console.log(person)

// shallow copy (if modify data it's affect source data)
const person1 = person;
person1.phone = "+919000000000"
console.log(person)
console.log(person1)

// deep copy (if modify data it's not affect source data)
const person2 = Object.assign({}, person);
person2.skill = [];
console.log(person)
console.log(person2)

// Object methods
// freeze (can't add update & delete the object)
Object.freeze(person);
console.log(person)
person.name = "dhanush";
delete person.designation
console.log(person)

// check freeze
console.log(Object.isFrozen(person)) // person freezed
console.log(Object.isFrozen(person2)) // person2 not freezed

// seal (only update the object, couldn't add and delete)
Object.seal(person2);
person2.name = "dhanush";
delete person2.designation
console.log(person2)

// check seal
console.log(Object.isSealed(person2)) // person2 not freezed

// keys,values and entries return type is array
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

// loop
for (let key in person) {
    console.log(key)
    console.log(person[key])
}

for (let key of Object.keys(person)) {
    console.log(key)
    console.log(person[key])
}

// check 2 object are same
console.log(Object.is(person, person1)) // true
console.log(Object.is(person, person2)) // false


// prototype
// Regular objects don't have prototypes
function Person() {
    this.name = "kalidas"
    this.age = 25
    this.designation = "software developer"
    this.skill = ["react JS", "node JS"]
    this.call = function () {
        return `Hi i am ${this.name}`
    }
}
console.log(new Person().name)
Person.prototype.updateSkill = function (skill) {
    return this.skill.push(skill)
}
console.log(new Person());

const fnPerson = new Person();
fnPerson.updateSkill("express")

console.log(fnPerson.skill);
