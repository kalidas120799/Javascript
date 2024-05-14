/* Quokka.js vs code extension for view live console*/

// Math
console.log(Math.round(3.7));
console.log(Math.floor(3.7));
console.log(Math.ceil(3.3));
console.log(Math.pow(2, 3)); // 2^3
console.log(Math.sqrt(8));
console.log(Math.abs(-8), Math.abs(8));
console.log(Math.min(1, 3, 4, 5, 1));
console.log(Math.max(...[1, 3, 4, 5, 1]));
console.log(Math.random());

// result in quotient
console.log(9 / 2)

// result in remainder
console.log(9 % 2)

// if value divisible by 2 it's true otherwise false
console.log(2 % 2 === 0) // true
console.log(3 % 2 === 0) // false

function sumOfNo(num) {
    let sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    // return sum
    return num * (num + 1) / 2;
}

console.log(sumOfNo(5))
console.log(sumOfNo(10))

function sumOfDigits(nums) {
    let sum = 0;
    while (nums > 0) {
        sum += nums % 10;
        nums = Math.floor(nums / 10)
    }
    return sum;
    return nums.toString().split("").map((e) => Number(e)).reduce((a, b) => a + b, 0)
}

console.log(sumOfDigits(1287))
console.log(sumOfDigits(111))


function countDigits(num) {
    num = Math.abs(num);
    /*  let count=0;
 
     do{
      count++
      num=Math.floor(num/10)
     }while(num>0);
  
    return count */
    return num.toString().split("").length
}

console.log(countDigits(123))
console.log(countDigits(-76123))

console.log(1234 % 10) // get last digits
console.log(Math.floor(1234 / 10)) // remove last digits

function isPalindrome(num) {
    let temp = num;
    let reverseNum = 0;

    while (temp > 0) {
        const lastDigit = temp % 10;
        reverseNum = (reverseNum * 10) + lastDigit;
        temp = Math.floor(temp / 10);
    }
    return num === reverseNum;
}

console.log(isPalindrome(121));

// Palindrome
//Fibonacci Numbers
//Missing Numbers
//Time Complexity
