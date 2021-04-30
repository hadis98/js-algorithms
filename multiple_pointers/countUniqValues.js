//give a sorted array you should return the number of uniqs values

//my solution:
// function countUniqValues(arr){
//     const ob = {};
//     for (const el of arr) {
//         ob[el] ? ob[el]++ : ob[el] =1;
//     }
//     return Object.keys(ob).length;
// }

//solve with pointers
function countUniqValues(arr){
    if(!arr.length){
        return 0;
    }
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        console.log(i,j);
    }
    return i+1;
}


console.log(countUniqValues([1,1,1,1,1,1,2]));
console.log(countUniqValues([2,3,5,5,5,6,6]));
console.log(countUniqValues([]));
console.log(countUniqValues([-2,-1,-1,0,1]));