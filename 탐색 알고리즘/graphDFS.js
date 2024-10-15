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
  
  //재귀 함수 dfs
  DepthFirstSearch(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    dfs(start);
    function dfs(vertex){
      if(!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(v => {
        if(!visited[v]){
          return dfs(v);
        }
      })
    }
    return result;
  }

  // 루프 dfs
  DepthFirstSearch2(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let vertex;
    visited[start] = true;

    while(stack.length){
      vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach(v => {
        if(!visited[v]){
          visited[v] = true;
          stack.push(v);
        }
      });
    }
    return result;
  }

  breadthFirstSearch(start){
    const queue = [start];
    const visited = {};
    const result = [];
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