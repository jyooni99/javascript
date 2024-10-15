// 무방향 그래프
class Graph {
  constructor(){
    this.adjacencyList = {};
  }

  // 정점 추가
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = [];
    }
  }

  //간선 추가
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeVertex(vertex){
    while(this.adjacencyList[vertex].length){
      const vertex2 = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, vertex2);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2){
      let index1 = this.adjacencyList[vertex1].indexOf(vertex2);
      let index2 = this.adjacencyList[vertex2].indexOf(vertex1);
      this.adjacencyList[vertex1].splice(index1, 1);
      this.adjacencyList[vertex2].splice(index2, 1);
  }
}