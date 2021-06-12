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
}

// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node(" you?");
// console.log(first);

const list = new singlyLinkedList();
list.push("hello");
list.push("hadis");
list.push("how");
list.push("are");
list.push("you");
console.log('traverse list: ');
list.traverse();
console.log('Deleted Node: ', list.pop());
console.log('print List: ', list);
console.log('Shifted Node: ', list.shift());
console.log('print List: ', list);