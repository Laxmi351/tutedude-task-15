console.log("JavaScript Arrays and Functions");

// Dummy Array
let numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Find Maximum Number (Arrow Function)
const findMax = (arr) => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
};

// 2. Calculate Sum (Anonymous Function)
const calculateSum = function(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return sum;
};

// 3. Count Odd Numbers (Normal Function)
function countOdd(arr) {
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }

    return count;
}

// Display Results
console.log("Array:", numbers);
console.log("Maximum number:", findMax(numbers));
console.log("Sum of all elements:", calculateSum(numbers));
console.log("Count of odd numbers:", countOdd(numbers));

console.log("All operations completed successfully!");