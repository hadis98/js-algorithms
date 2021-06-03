//use global object to cache
const cache = {};

function memoizedAddTo80_first(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('long time......');
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80_first(10));
console.log(memoizedAddTo80_first(10));

function memoizedAddTo80_second() {
    const cache = {};
    return function(n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('long time......');
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80_second();
console.log(memoized(10));
console.log(memoized(10));