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
// compares adjacent elements, and swaps them if they are in the wrong order. It continues until the list is sorted

function bubbleSort(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i] > data[i + 1]) {
            let temp = data[i];
            data[i] = data[i + 1]
            data[i + 1] = temp;
            i = -1;
        }
    }
    return data;
}

console.log(bubbleSort([10, 1, 5, -3, 0, 2, 6, 8]));
console.log(bubbleSort(["HTML", "CSS", "JS", "Angular JS", "XML", "React", "Python"]))

// Selection Sort
// Take item and find small element to right side. if found swap the items

function selectionSort(data) {
    const dataLength = data.length;
    for (let i = 0; i < dataLength; i++) {
        let min = data[i];
        let minIndex = i;
        for (var j = i + 1; j < dataLength; j++) {
            if (data[j] < min) {
                min = data[j]
                minIndex = j;
            }
        }
        let swap = data[i];
        data[i] = data[minIndex];
        data[minIndex] = swap
    }
    return data;
}

console.log(selectionSort([10, 1, 5, -3, 0, 2, 6, 8]));
console.log(selectionSort(["HTML", "CSS", "JS", "Angular JS", "XML", "React", "Python"]))

// Insertion sort
// This algorithm builds the final sorted list one element at a time by repeatedly taking the next element from the unsorted 
// part and inserting it into its correct position in the sorted part

// if take one element and we check the left side elements are sorted if not inserting it into its correct position in the sorted part

function insertionSort(data) {
    for (let i = 0; i < data.length; i++) {
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

console.log(insertionSort([10, 1, 5, -3, 0, 2, 6, 8]));
console.log(insertionSort(["HTML", "CSS", "JS", "Angular JS", "XML", "React", "Python"]))