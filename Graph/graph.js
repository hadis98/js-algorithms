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