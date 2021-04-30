//Pseudocode
//sotre the first element as the smallest value you've seen so far.
//compare this item to the next item in the array until you find a smaller number.
//if a smaller number is found, designate smaller number to be the new 'minimum' and continue until the end of the array.
//if the 'minimum' is not the value(index) you initially began with,swap the 2 values.
//Repeat this with the next element until the array is sorted.


//O(n^2)
function SelectionSort(arr){
    let index;
    const swap = (arr,idx1,idx2)=>{
       ([arr[idx1] , arr[idx2]] = [arr[idx2],arr[idx1]]);
    }
    for(let i=0;i<arr.length;i++){
        index =i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index = j;
            }
        }
        if(index !== i){
            swap(arr,index,i);
        }
        
    }
    return arr;
}


console.log(SelectionSort([4,5,2,3,7,1]));
console.log(SelectionSort([-3,9,-8,4,5,1,6,88]));