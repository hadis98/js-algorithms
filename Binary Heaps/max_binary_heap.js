class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value) {
        this.values.push(value);
        let curIdx = this.values.length - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);
        while (this.values[curIdx] > this.values[parentIdx]) {
            [this.values[curIdx], this.values[parentIdx]] = [
                this.values[parentIdx],
                this.values[curIdx],
            ];
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }

    extractMax() {
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
            (this.values[curIdx] < this.values[child_leftIdx] ||
                this.values[curIdx] < this.values[child_rightIdx]) &&
            child_rightIdx <= this.values.length - 1 &&
            child_leftIdx <= this.values.length - 1
        ) {
            if (this.values[child_leftIdx] > this.values[child_rightIdx]) {
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

const heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(50);
heap.insert(60);
heap.insert(38);
heap.insert(45);
console.log(heap);
heap.insert(200);
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);
console.log(heap.extractMax());
console.log(heap);

// ‌Big O of Binary Heaps:
//insertion: O(logn)
//Removal:O(logn)
//Search:O(n)
//binary heaps are very useful data structure for sorting, and implementing other data structures like priority queues
// MaxHeap: every parent is larger than its children
//MinHeap:every parent is smaller than its children
//we can represent heaps using arrays