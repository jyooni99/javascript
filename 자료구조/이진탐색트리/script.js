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

  insert(val){
    const newNode = new Node(val);

    if(!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;
    while(true){
      if(val === current.val) return undefined;
      if(val < current.val){
        if(!current.left){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }else{
        if(!current.right){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val){
    if(!this.root) return false;

    let current = this.root;

    while(current){
      if(val === current.val) return true;

      if(val < current.val){
        current = current.left;
      } else if(val > current.val) {
        current = current.right;
      }
    }
    return false;
  }
}
