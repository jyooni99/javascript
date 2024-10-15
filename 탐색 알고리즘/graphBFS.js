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

  BreadthFirstSearch(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let vertex;
    visited[start] = true;

    while(queue.length){
      vertex = queue.unshift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(v => {
        if(!visited[v]){
          visited[v] = true;
          queue.push(v);
        }
      });
    }
    return result;
  }
}