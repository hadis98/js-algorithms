//given  a sorted array of integers, write a function called search , that accepts a value and returns the index where the value passed to the function is located
//if the value is not found , return -1

/* ATTENTION */
//binary search only works on sorted arrays

//binary search is much faster form of search
//rather than eliminating one element at a time , you can eliminate half of the remaining elements at a time
//best case: O(1)
//worse case and average case: O(logn)

//binary Search
function search(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);
    let currentEl = arr[middleIndex];
    if (val < currentEl) {
      right = middleIndex - 1;
    } else if (val > currentEl) {
      left = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 8], 8));
console.log(search([1, 2, 3, 4, 5, 6, 8], 12));

console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 8));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 8], 12));
