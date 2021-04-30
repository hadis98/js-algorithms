//start by picking the second element in the array
// now compare the second element with the onde before it and swap if necessary
//continue to the next element and if it is in the incorret order,iterate through the sorted portion(the left side) to place the element in the correct place


//it is good for a situation where data is coming in live or streaming and you need to insert it at a moment's notice



//O(n^2)
//if array is sorted: O(n^2)
//worst case: reversed sort
function insertionSort(arr) {
  let elem, i, j;
  for (i = 1; i < arr.length; i++) {
    elem = arr[i];//previous
    for (j = i - 1; j >= 0 && arr[j] > elem; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = elem;
  }
  return arr;
}

console.log(insertionSort([4, 5, 2, 3,-5, 7, 1]));
console.log(insertionSort([-3, 9, -8, 4, 5, 1, 6, 88]));
