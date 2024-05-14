/* the "two pointers" technique is a common approach used to solve certain types of problems
Sum Problem, Palindrome Checking, Finding Subarrays or Substrings, Finding Closest Pair
 */

// Palindrome Checking

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (typeof str[start] === "string" && typeof str[end] === "string") {
            if (str[start].toLowerCase() != str[end].toLowerCase()) return false;
            start = +1;
            end = -1;
        }
        else if (typeof str[start] === "number" && typeof str[end] === "number") {
            if (str[start] != str[end]) return false;
            start = +1;
            end = -1;
        } else if (typeof str[start] != "string" && typeof str[start] != "number") {
            start = +1;
        } else if (typeof str[end] != "string" && typeof str[end] != "number") {
            end = +1;
        } else return false
    }
    return true;
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("ma,8d_cAm"))
console.log(isPalindrome("car"))
console.log(isPalindrome("aba"))

function twoSum(numbers, target) {
    if (numbers.length === 0) return [];
    numbers = numbers.sort((a, b) => a - b);
    let start = 0;
    let end = numbers.length - 1;
    while (start < end) {
        let total = numbers[start] + numbers[end];
        if (total === target) return [start + 1, end + 1]
        else if (total > target) end--;
        else if (total < target) start++;
    }
    return []
}

console.log(twoSum([2, 7, 11, 15], 9))

function threeSum(nums) {
    if (nums.length < 3) return [];
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (nums[left] === nums[left + 1]) left++;
                while (nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))