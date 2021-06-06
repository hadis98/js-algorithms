function hash(key, arayLen) {
    let total = 0;
    for (let char of key) {
        //map "a" to 1,"b" to 2,"c" to 3,etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arayLen;
    }
    return total;
}
console.log('without prime hash: ');
console.log(hash("pink", 10));
console.log(hash("blue", 10));
console.log(hash("orangered", 10));
console.log(hash("cyan", 10));

/*
problems of this hash function:
1.only hashes string
2.not constant time - linear in key length
3.could be a little more random
*/


function prime_hash(key, arayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arayLen;
    }

    return total;
}
console.log('with prime hash: ');
console.log(prime_hash("pink", 13));
console.log(prime_hash("blue", 13));
console.log(prime_hash("orangered", 13));
console.log(prime_hash("cyan", 13));


/*
prime number in the hash is helpful in spreading out the keys more uniformly

it's also helpful if the array that you're putting values into has a prime length

so hash functions use prime numbers
*/