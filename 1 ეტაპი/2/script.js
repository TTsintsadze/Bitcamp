// 1.  Find the Maximum Subarray Sum: Write a function that takes an array of integers as input and finds the contiguous subarray within the array that has the largest sum. Return the sum of that subarray. For example, given the array [-2, 1, -3, 4, -1, 2, 1, -5, 4], the function should return 6, which corresponds to the sum of the subarray [4, -1, 2, 1].

// function findMaxSubarraySum(arr) {
//     let maxSum = arr[0];
//     let currentSum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
//     return maxSum;
// }
// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSum = findMaxSubarraySum(array);
// console.log(maxSum); 

// 2.  Rotate Array: Write a function that rotates an array of n elements to the right by k steps. For example, given the array [1, 2, 3, 4, 5, 6, 7] and k = 3, the function should modify the array to become [5, 6, 7, 1, 2, 3, 4].

// function findMaxSubarraySum(arr) {
//     let maxSum = arr[0];
//     let currentSum = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       currentSum = Math.max(arr[i], currentSum + arr[i]);
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     return maxSum;
//   }

// const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const maxSum = findMaxSubarraySum(array);
// console.log(maxSum);

// 3.  Find Missing Number: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number. For example, given the array [3, 0, 1], the function should return 2.

// function findMissingNumber(nums) {
//     const n = nums.length;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = nums.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// }
// const array = [3, 0, 1];
// const missingNumber = findMissingNumber(array);
// console.log(missingNumber); 

// 4. Merge Intervals: Given an array of intervals, merge overlapping intervals and return the resulting merged intervals. For example, given the intervals [[1,3],[2,6],[8,10],[15,18]], the function should return [[1,6],[8,10],[15,18]].

function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const previousInterval = mergedIntervals[mergedIntervals.length - 1];
  
      if (currentInterval[0] <= previousInterval[1]) {
        previousInterval[1] = Math.max(currentInterval[1], previousInterval[1]);
      } else {
        mergedIntervals.push(currentInterval);
      }
    }
    return mergedIntervals;
}
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
const merged = mergeIntervals(intervals);
console.log(merged); 
  