let calculations1 = 0;

function fib(n, memo = []) {
    calculations1++;
    if (memo[n]) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    let result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    // console.log(memo);
    // console.log(result);
    return result;
}

let calculations2 = 0;
//O(2^n)
function fibonacci(n) {
    calculations2++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log('calculate fibonacci with dynamic programming: ', fib(30));
console.log('number of calculations: ', calculations1);
console.log('calculate fibonacci with recursion: ', fibonacci(30));
console.log('number of calculations: ', calculations2);


//with closures in js
//O(n)
function fibonacciMaster() {
    let cache = {};
    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n < 2) {
            return n;
        }
        return cache[n] = fib(n - 1) + fib(n - 2);
    }
}

const calculateFib = fibonacciMaster();
console.log('calculate fibonacci with dp and closure: ', calculateFib(30));