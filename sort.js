// swap array
let arr = [1, 0, 4, 5, 4, 3, -5];
// using temp
let tempArr = [...arr];
let temp = tempArr[0];
[tempArr[0], tempArr[1]] = [tempArr[1], temp];
console.log(tempArr) // 1, 0, 4, 5, 4, 3, -1 =>  0, 1, 4, 5, 4, 3, -1

// destructure
let tempArr1 = [...arr];
[tempArr1[0], tempArr1[1], tempArr1[3]] = [tempArr1[2], tempArr1[3], tempArr1[5]]
console.log(tempArr1) //1, 0, 4, 5, 4, 3, -1 =>  4, 5, 4, 3, 4, 3, -1

// bubble sort 
// compare two item and then swap/push higher item to last

/* function bubbleSort(data) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
        for (let j = 0; j < dataLength - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [data[j], data[j + 1]] = [data[j + 1], data[j]]
            }
        }

    }
    return data;
}

console.log(bubbleSort(arr)) */

// Selection Sort
// compare two item and select smallest element then push first

/* function selectionSort(data) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
        let minIndex = i;
        for (let j = i + 1; j < dataLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            [data[i], data[minIndex]] = [data[minIndex], data[i]]
        }
    }
    return data;
}

console.log(selectionSort(arr)); */

// Insertion sort
// take specific sort the items, remain not consider

/* function insertionSort(data) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
        let item = data[i];
        let j = i - 1;
        while (j >= 0 && data[j] > item) {
            data[j + 1] = data[j]
            j--;
        }
        data[j + 1] = item
    }
    return data
}

console.log(insertionSort(arr)) */

// linear search
/* function linearSearch(data, target) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] === target) return i;
    }
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 5)) */

/* function globalLinearSearch(data, target) {
    const result = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i] === target) {
            result.push(i);
        }
    }
    if (result.length === 0) return -1;
    return result;
}

console.log(globalLinearSearch([1, 2, 3, 4, 5, 6], 3)) */

// binary search
/* function binarySearch(data, target) {
    let start = 0;
    let end = data.length;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (data[mid] === target) return mid;
        else if (data[mid] < target) start = mid + 1;
        else end = mid - 1;
    } 
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)) */