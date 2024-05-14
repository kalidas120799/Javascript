// linear search
/* this algorithm sequentially checks each element of the list until the desired element 
is found or the end of the list is reached. */

function linearSearch(data, target) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] === target) return i;
    }
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 5))


// binary search
/* This algorithm works on sorted arrays. 
It repeatedly divides the search interval in half until the desired element is found or the interval becomes empty */

function binarySearch(data, target) {
    let start = 0;
    let end = data.length;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (data[mid] === target) return mid;
        else if (data[mid] < target) start = mid + 1; // targeting right side of the array
        else end = mid - 1;
    } 
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4))