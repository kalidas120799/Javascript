// 1*2*3*4*5
function factorial(num) {
    let ans = 1;

    for (var i = 1; i <= num; i++) {
        ans = ans * i;
    }
    return ans

}

console.log(factorial(6))

function factorialRec(n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1)
}

console.log(factorialRec(5)) // 120


// 0, 1, 1, 2, 3
function fibonacci(num) {
    let a = 0, b = 1;
    let ans = 0
    for (var i = 0; i < num; i++) {
        ans = a;;
        const c = a + b;
        a = b;
        b = c
    }
    return ans
}

console.log(fibonacci(5))

function fibonacciRec(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;
    return fibonacciRec(n - 1) + fibonacciRec(n - 2)
}

console.log(fibonacciRec(5)) // 3 (0,1,1,2,3,5,8,13)

function sumOfNo(n) {
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}

console.log(sumOfNo(10)) // 5

function sumOfNoRec(n) {
    if (n <= 1) return 1;
    return n + sumOfNoRec(n - 1)
}

console.log(sumOfNoRec(10)) // 5

function powRec(base, n) {
    if (n === 0) return 1;
    return base * powRec(base, (n - 1))
}

console.log(powRec(2, 4), Math.pow(2, 4)) // 2^4 16
console.log(powRec(3, 3), Math.pow(3, 3)) // 3^3 27

function isPowerRec(base, num) {
    if (num === 1) {
        return true;
    } else if (num % base !== 0 || num < 1) {
        return false;
    }
    return isPowerRec(base, (num / base));
}

console.log(isPowerRec(2, 16)) // true 2^4 16
console.log(isPowerRec(3, 3)) // true 

function flat(item) {
    let result = [];
    if (Array.isArray(item)) {
        for (var i = 0; i < item.length; i++) {
            result = result.concat(flat(item[i]))
        }
    } else {
        result.push(item)
    }
    return result
}
console.log(flat([1, 2, 3, [4, [5, [0], 6]], 7, [8]]))