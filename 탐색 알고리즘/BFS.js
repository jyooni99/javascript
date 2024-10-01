class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }
}

function BFS(){
  const visit = []; // 탐색을 마친 노드들을 저장하는 배열
  const needVisit = []; // 탐색할 노드들을 저장하는 queue
  let node = this.root;

  needVisit.push(node);
  
  while(needVisit.length){
    node = needVisit.shift();
    if(node.left) needVisit.push(node.left);
    if(node.right) needVisit.push(node.right);

    visit.push(node);
  }
}