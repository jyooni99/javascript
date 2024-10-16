class PriorityQueue {
  constructor() {
      this.values = [];
  }

  enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
  }

  dequeue() {
      return this.values.shift(); // 우선순위가 가장 높은(거리 가장 짧은) 정점 반환
  }

  sort() {
      this.values.sort((a, b) => a.priority - b.priority); // 우선순위 기준 오름차순 정렬
  }
}

class Graph {
  constructor() {
      this.adjacencyList = {};
  }

  addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({node: vertex2, weight});
      this.adjacencyList[vertex2].push({node: vertex1, weight});
  }

  dijkstra(start, finish) {
      const distances = {};
      const queue = new PriorityQueue();
      const previous = {};
      let path = []; // 최종 경로
      let smallest;

      // distances, previous 배열 초기화
      for (let vertex in this.adjacencyList) {
          if (vertex === start) {
              distances[vertex] = 0;
              queue.enqueue(vertex, 0);
          } else {
              distances[vertex] = Infinity;
          }
          previous[vertex] = null;
      }

      // 큐가 빌 때까지 계속 반복
      while (queue.values.length) {
          smallest = queue.dequeue().val; // 우선순위 큐에서 가장 작은 값 꺼내기

          if (smallest === finish) {
              // 목적지에 도달하면 경로를 구성하여 반환
              while (previous[smallest]) {
                  path.push(smallest);
                  smallest = previous[smallest];
              }
              break;
          }

          if (smallest || distances[smallest] !== Infinity) {
              // 현재 정점의 모든 이웃을 확인
              for (let neighbor in this.adjacencyList[smallest]) {
                  let nextNode = this.adjacencyList[smallest][neighbor];

                  // 새로 계산한 거리가 더 짧은 경우 업데이트
                  let candidate = distances[smallest] + nextNode.weight;
                  let nextNeighbor = nextNode.node;
                  if (candidate < distances[nextNeighbor]) {
                      distances[nextNeighbor] = candidate;
                      previous[nextNeighbor] = smallest;
                      queue.enqueue(nextNeighbor, candidate);
                  }
              }
          }
      }

      // 경로에 시작 정점 추가 후 최종 경로 반환
      return path.concat(smallest).reverse();
  }
}

// 예시 사용
let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.dijkstra("A", "E")); // ["A", "C", "D", "F", "E"]
