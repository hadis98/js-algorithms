function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(100));