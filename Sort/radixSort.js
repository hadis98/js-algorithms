/* RADIX SORT */
//TIME coplexity: O(nk)
//SPACE coplexity:O(n+k)

//n = length of array
//k = number of max digit

//a sort algorithm for numbers:)

function getDigit(number, index) {
    let str = number.toString();
    str = str.split('').reverse().join('');
    return index < str.length ? parseInt(str[index]) : 0;
}


function getDigit2(number, index) {
    return Math.floor(Math.abs(number) / Math.pow(10, index)) % 10;
}

function digitCount1(number) {
    return number.toString().length;
}


function digitCount2(number) {
    if (number === 0)
        return 1;
    return Math.floor(Math.log10(Math.abs(number))) + 1;
}


function mostDigits(arr) {
    let num_largerst = 0;
    let digitcount;
    for (const num of arr) {
        digitcount = digitCount1(num)
        if (digitcount > num_largerst) {
            num_largerst = digitcount;
        }
    }
    return num_largerst;
}

function mostDigits2(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount1(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    let mostdigits = mostDigits(arr);

    for (let i = 0; i < mostdigits; i++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); //create 10 subarrays 
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
        // console.log(digitBuckets);
    }
    return arr;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));


console.log(digitCount1(12345));
console.log(digitCount2(12345));


console.log(mostDigits([1234567, 3, 45, 132]));
console.log(mostDigits2([1234567, 3, 45, 132]));


console.log(radixSort([23, 345, 5437, 166, 3]));