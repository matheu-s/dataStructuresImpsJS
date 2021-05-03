//it will be an undirected and unweighted graph using the adjacency list method.
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const vertexInside = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertexInside);
    }
    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (item) => item !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (item) => item !== vertex1
    );
  }
}

const g = new Graph();

g.addVertex("Brazil");
g.addVertex("Argentina");
g.addVertex("Uruguay");
g.addVertex("Peru");
g.addEdge("Brazil", "Argentina");
g.addEdge("Brazil", "Uruguay");
g.addEdge("Argentina", "Uruguay");
g.addEdge("Peru", "Brazil");
g.addEdge("Peru", "Argentina");
console.log(g);
g.removeEdge("Peru", "Argentina");
console.log(g);
g.removeVertex("Brazil");
console.log(g);

let a = 5;
console.log(++a);
