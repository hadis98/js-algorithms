class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        // this.values.sort((a, b) => a.priority - b.priority);
        this.values.sort((a, b) => {
            return (a.priority - b.priority)
        });
    }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('A', 0);
priorityQueue.enqueue('B', 5);
priorityQueue.enqueue('U', 3);
priorityQueue.enqueue('W', 9);
priorityQueue.enqueue('P', 8);
priorityQueue.enqueue('Z', 2);
console.log(priorityQueue.values);
priorityQueue.dequeue();
console.log(priorityQueue.values); //delete the element with smallest priority