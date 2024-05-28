const str = "# $ ^ * & Lorem \0 Ipsum is simply duMmy text 76576";
const str1 = "Ippsum is simply duMmy text";

console.log('12/a0-iuuURT@'.match(/[a-zA-Z0-9]/g).join(""))

// global - /g
console.log(str.match(/i/g), str.match(/z/g)) // [i,i] , null

// case in sensitive /i
console.log(str.match(/I/ig))
console.log(str.search(/IS/i)) // 12 find index

// search more than a line /m
console.log(str.match(/i/mg));

// []
console.log(str.match(/[m]/g));
console.log(str.match(/[7]/g));
console.log(str.match(/[^m]/g))// ^ not operator

// meta char
// word - w
console.log(str.match(/\w/g)) // without special char
console.log(str.match(/\W/g)) // only special char and space

// digit -d
console.log(str.match(/\d/g)) // only numbers
console.log(str.match(/\D/g)) // without numbers

// white space
console.log(str.match(/\s/g)) // white space
console.log(str.match(/\S/g)) // without white space

// beginning - b
console.log(str.match(/\bLo/g))

// end of - b
console.log(str.match(/xt\b/g))

// null char \0 \n new line,  \t tab,  \v vertical line
console.log(str.match(/\0/g))

// quantifiers
// ^ - find end of the char
console.log(str1.match(/^Ip/gi))

// $ - find end of the char
console.log(str1.match(/xt$/gi))

// + for check I next p, ? optional or *
console.log(str1.match(/i+p?/gi))
console.log(str1.match(/ip*/gi))

// .ly back chart one dot give one char
console.log(str1.match(/.ly/gi))
console.log(str1.match(/..ly/gi))
console.log(str1.match(/ly./gi))

// methods
console.log(/s/gi.exec(str)); // find s
console.log(/s/gi.test(str)); // true
console.log(/z/gi.test(str)); // false