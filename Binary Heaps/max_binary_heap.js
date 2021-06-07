class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        let curIdx = this.values.length - 1;
        let parentIdx = Math.floor(((curIdx) - 1) / 2);
        while (this.values[curIdx] > this.values[parentIdx]) {
            [this.values[curIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[curIdx]];
            curIdx = parentIdx;
            parentIdx = Math.floor(((curIdx) - 1) / 2);
        }
    }
}

const heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(50);
heap.insert(60);
heap.insert(38);
heap.insert(45);
console.log(heap);
heap.insert(200);
console.log(heap);