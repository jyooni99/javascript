class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class Queue{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

  enqueue(val){
    const newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return ++this.size;
  }

  dequeue(){
    if(this.head) return null;

    const temp = this.head;
    if(this.length === 1){
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;
    return temp.val;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty"; 
    }
    return this.head.val; 
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}