class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
            let total = 0;
            let WEIRD_PRIME = 31;
            for (let i = 0; i < Math.min(key.length, 100); i++) {
                let char = key[i];
                let value = char.charCodeAt(0) - 96;
                total = (total * WEIRD_PRIME + value) % this.keyMap.length;
            }

            return total; //return index of hashed key in array
        }
        //with separate chaining
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1] //return value
                }
            }
        }
        return undefined;
    }
    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][0])) {
                        valuesArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

let hashTable = new HashTable();
hashTable.set("pink", "#f403fc");
hashTable.set("black", "#111111");
hashTable.set("white", "#000000");
hashTable.set("green", "#03fc62");
hashTable.set("blue", "#0384fc");
console.log(hashTable.keyMap);
// console.log(hashTable.get("pink"));

console.log('keys: ', hashTable.keys());
console.log('values: ', hashTable.values());


// average case of a good hash function:
/*
hash tables: 
insert:O(1)
Deletion:O(1)
access:O(1)
*/

// worst case:
//O(n)