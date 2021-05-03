//it will be a direct unweighted graph, using the list method
//it means that A might have access to B but B might not have to A, for example
// Directed graph: John -----> Justin Bieber  | Maria ----> Justin Bieber | Kanye West <-----> Justin Bieber ....

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  //connect 1 to 2
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
  }
  //remove vertex 2 from vertex 1
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (arr) => arr !== vertex2
    );
  }
}

class Followers {
  constructor() {
    this.connection = new Graph();
  }
  addUser(user) {
    this.connection.addVertex(user);
    console.log(`${user} was created`);
  }
  addConnection(user1, user2) {
    this.connection.addEdge(user1, user2);
    console.log(`${user1} followed ${user2}`);
  }
  removeConnection(user1, user2) {
    this.connection.removeEdge(user1, user2);
    console.log(`${user1} unfollowed ${user2}`);
  }
}

const instagram = new Followers();

instagram.addUser("@matheus");
instagram.addUser("@petter");
instagram.addUser("@mary");
instagram.addUser("@justinbieber");
console.log(instagram);
instagram.addConnection("@matheus", "@petter");
instagram.addConnection("@matheus", "@justinbieber");
instagram.addConnection("@petter", "@mary");
instagram.addConnection("@mary", "@justibieber");
console.log(instagram);
