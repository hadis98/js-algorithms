class Node {
    constructor(value, priority) {
        this.val = value;
        this.priority = priority;
    }
}
//lowest number has highest priority
//min heap
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    Enqueue(value, priority) {
        const node = new Node(value, priority);
        this.values.push(node);
        let curIdx = this.values.length - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);

        if (this.values.length > 1) {
            while (
                curIdx >= 0 &&
                parentIdx >= 0 &&
                this.values.length > 1 &&
                this.values[curIdx].priority < this.values[parentIdx].priority
            ) {
                [this.values[curIdx], this.values[parentIdx]] = [
                    this.values[parentIdx],
                    this.values[curIdx],
                ];
                curIdx = parentIdx;
                parentIdx = Math.floor((curIdx - 1) / 2);
            }
        }
    }
    Dequeue() {
        //remove root
        [this.values[0], this.values[this.values.length - 1]] = [
            this.values[this.values.length - 1],
            this.values[0],
        ];
        let oldRoot = this.values.pop();
        let curIdx = 0;
        let child_leftIdx = 2 * curIdx + 1;
        let child_rightIdx = 2 * curIdx + 2;
        while (

            child_rightIdx <= this.values.length - 1 &&
            child_leftIdx <= this.values.length - 1 &&
            (this.values[curIdx].priority > this.values[child_leftIdx].priority ||
                this.values[curIdx].priority > this.values[child_rightIdx].priority)
        ) {
            if (
                this.values[child_leftIdx].priority <
                this.values[child_rightIdx].priority
            ) {
                [this.values[curIdx], this.values[child_leftIdx]] = [
                    this.values[child_leftIdx],
                    this.values[curIdx],
                ];
                curIdx = child_leftIdx;
                child_leftIdx = 2 * curIdx + 1;
            } else {
                [this.values[curIdx], this.values[child_rightIdx]] = [
                    this.values[child_rightIdx],
                    this.values[curIdx],
                ];
                curIdx = child_rightIdx;
                child_rightIdx = 2 * curIdx + 2;
            }
        }

        return oldRoot;
    }
}



const ER = new PriorityQueue();
ER.Enqueue("common cold", 5)
ER.Enqueue("gunshot wound", 1)
ER.Enqueue("high fever", 4)
ER.Enqueue("broken arm", 2)
ER.Enqueue("glass in foot", 3)

console.log(ER);
ER.Dequeue();
console.log(ER);