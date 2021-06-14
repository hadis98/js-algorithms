class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let prev = this.head;
        while (current.next) {
            prev = current;
            current = current.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return deleted;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        let curIdx = 0;
        // while (current) {
        //     if (curIdx === index) {
        //         return current;
        //     }
        //     current = current.next;
        //     curIdx++;
        // }
        while (curIdx !== index) {
            current = current.next;
            curIdx++;
        }
        return current;
    }
    set(value, index) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.val = value;
        return true;
    }
    insert(value, index) {
        const newNode = new Node(value);
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(newNode);
            return true;
        }
        if (index === 0) {
            this.unshift(newNode);
            return true;
        }
        const prev = this.get(index - 1);
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
            this.shift();
        }
        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
/*
insertion:O(1)
Removal from begining:O(1) 
Removal from end:O(n)
searching:O(n)
access:O(n)
*/

// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node(" you?");
// console.log(first);

const list = new singlyLinkedList();
list.push("1");
list.push("5");
list.push("10");
list.push("20");
list.push("33");
console.log("Deleted Node: ", list.pop());
list.print();
console.log("Shifted Node: ", list.shift());
list.print();
list.unshift("78");
list.print();
console.log(list.get(0));
console.log(list.get(3));
list.set("28 ", 2);
list.insert("12", 2);
list.remove(1);
list.print();
list.reverse()
list.print();