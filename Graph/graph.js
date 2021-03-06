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
    depthfirst_traversal_recursive(startNode) {
        const results = [];
        const visited_vertices = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {
            if (!vertex) {
                //if vertex is empty
                return null;
            }
            visited_vertices[vertex] = true;
            results.push(vertex);
            console.log(adjacencyList[vertex]);
            // for (const v of adjacencyList[vertex]) {
            //     if (!visited_vertices[v]) {
            //         dfs(v);
            //     }
            // } //second way:
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited_vertices[neighbor]) {
                    return dfs(neighbor);
                }
            });
        }
        dfs(startNode);
        console.log(visited_vertices);
        return results;
    }
    depthfirst_traversal_iterative(startNode) {
        const stack = [startNode];
        const visited_vertices = {};
        const result = [];
        let currentVertex;
        visited_vertices[startNode] = true;
        while (stack.length) {
            console.log('stack: ', stack);
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach((neighbor) => {
                if (!visited_vertices[neighbor]) {
                    visited_vertices[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    breadthFirst_traversal(startNode) {
        const queue = [startNode];
        const visited_vertices = {};
        const result = [];
        visited_vertices[startNode] = true;
        let currentVertex;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited_vertices[neighbor]) {
                    visited_vertices[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new graph();
// g.addVertex("America");
// g.addVertex("Germany");
// g.addVertex("UnitedKingdom");
// g.addVertex("Italy");
// g.addVertex("Sweden");
// console.log(g);
// g.addEdge("America", "Germany");
// g.addEdge("America", "Italy");
// g.addEdge("UnitedKingdom", "Italy");
// g.addEdge("Sweden", "Italy");
// g.addEdge("Sweden", "Germany");
// g.addEdge("Italy", "Germany");
// g.addEdge("Sweden", "UnitedKingdom");
// console.log(g);
// g.removeEdge2("Sweden", "Italy");
// console.log(g);
// g.removeVertex('Germany');
// console.log('after removing Germany: ');
// g.removeVertex2("Germany");
// console.log(g);
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log('AdjacencyList: ', g.adjacencyList);
// console.log(g.depthfirst_traversal_recursive);
console.log('depthfirst: ', g.depthfirst_traversal_iterative("A"));
console.log('breadthFirst: ', g.breadthFirst_traversal("A"));