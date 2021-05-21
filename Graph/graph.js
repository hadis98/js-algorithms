class graph {
    constructor() {
        this.adjacencyList = {}
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
        this.adjacencyList[vertex1].splice(index, 1);
        const index2 = this.adjacencyList[vertex2].indexOf(vertex1);
        this.adjacencyList[vertex2].splice(index2, 1);
    }
    removeEdge2(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
}

let g = new graph();
g.addVertex('America');
g.addVertex('Germany');
g.addVertex('UnitedKingdom');
g.addVertex('Italy');
console.log(g);
g.addEdge('America', 'Germany');
g.addEdge('America', 'Italy');
console.log(g);
g.removeEdge2('America', 'Germany');
console.log(g);