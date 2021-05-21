class graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
            if (!this.adjacencyList[name]) {
                this.adjacencyList[name] = [];
            }
        } //both direction
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        const index = this.adjacencyList[vertex1].indexOf(vertex2);
        if (index !== -1) {
            this.adjacencyList[vertex1].splice(index, 1);
        }
        const index2 = this.adjacencyList[vertex2].indexOf(vertex1);
        if (index2 !== -1) {
            this.adjacencyList[vertex2].splice(index2, 1);
        }
    }
    removeEdge2(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
    removeVertex(vertex) {
            for (const key in this.adjacencyList) {
                if (this.adjacencyList[key].includes(vertex)) {
                    this.removeEdge(key, vertex);
                }
            }
            delete this.adjacencyList[vertex];
        } //better approach
    removeVertex2(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

let g = new graph();
g.addVertex("America");
g.addVertex("Germany");
g.addVertex("UnitedKingdom");
g.addVertex("Italy");
g.addVertex("Sweden");
console.log(g);
g.addEdge("America", "Germany");
g.addEdge("America", "Italy");
g.addEdge("UnitedKingdom", "Italy");
g.addEdge("Sweden", "Italy");
g.addEdge("Sweden", "Germany");
g.addEdge("Italy", "Germany");
g.addEdge("Sweden", "UnitedKingdom");
console.log(g);
g.removeEdge2("Sweden", "Italy");
// console.log(g);
// g.removeVertex('Germany');
console.log('after removing Germany: ');
g.removeVertex2("Germany");
console.log(g);