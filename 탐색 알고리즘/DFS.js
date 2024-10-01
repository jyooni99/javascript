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

//preorder
function DFSPre(){
  const visit = [];
  let node = this.root;

  if (!node) return visit;

  function preorder(current){
    visit.push(current.val);
    if(current.left) preorder(current.left);
    if(current.right)preorder(current.right);
  }

  preorder(node);
  return visit;
}


//Inorder
function DFSIn(){
  const visit = [];
  const node = this.root;

  if (!node) return visit;

  function inorder(current){
    if(current.left) inorder(current.left);
    visit.push(current.val);
    if(current.right) inorder(current.right);
  }

  inorder(node);
  return visit;
}