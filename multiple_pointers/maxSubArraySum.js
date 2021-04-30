//write a function called maxSubarraySum which accepts an array of integers and a number called num.
//the function should calculate the maximum sum of num consecutive elements in the array.



// O(n^2)
// function maxSubarraySum(arr,num){
//     if(arr.length < num){
//         return null;
//     }
//     let sum;
//     let max =-Infinity;
//     for(let i=0;i<arr.length -num +1;i++){
//         sum =0;
//         for(let j=0;j<num;j++){
//             sum += arr[i+j];
//         }
//         if(sum > max){
//             max = sum;
//         }
//     }
//     return max;
// }

//best solution
//O(n)
function maxSubarraySum(arr,num){
    if(arr.length < num){
        return null;
    }
    let maxSum = 0;
    let tempSum=0;
    for(let i=0;i<num;i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i=num;i<arr.length;i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;

}



console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([],4));