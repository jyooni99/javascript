// class Stack {
//   constructor() {
//     this.items = []; // 스택을 배열로 구현
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    
    this.head = newNode;
    newNode.next = this.head;
    this.head = newNode;

    return ++this.length;
  }

  pop() {
    if (this.isEmpty()){
      return null;
    }

    const temp = this.head;

    this.head = this.head.next;
    this.length--;
    
    return temp.val;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; 
    }
    return this.head.value; 
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }
}
