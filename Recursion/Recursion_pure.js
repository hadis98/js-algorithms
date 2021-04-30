function collectOddValues(arr){
    let newArr = [];
    if(!arr.length){
        return newArr;
    }
    if(arr[0]%2 !==0){
        newArr.push(arr[0]);
    }
    console.log('before',newArr);
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    console.log('after',newArr);
    return newArr;
}

//oh my god!!!!!!!!
console.log(collectOddValues([1,2,3,4,5,6]));