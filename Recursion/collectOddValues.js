/* HELPER METHOD RECURSION */


//how we write it?
function outer(input){
    let outerScopedVar = [];
    function helper(helperInput){
        //modify the outerScopedVar
        helper(helperInput--)
    }
    helper(input);
    return outerScopedVar;
}




function collectOddValues(arr){
    let results =[];
    function helper(helperInput){
        if(!helperInput.length){//base case
            return;
        }
        if(helperInput[0] %2 !==0){
            results.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }
    helper(arr);
    return results;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));