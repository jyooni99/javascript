class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;

    return popped;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let shifted = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;

    return shifted;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    if (idx < this.length / 2) {
      // 중간 인덱스보다 작을 때
      let counter = 0;
      let result = this.head;
      while (counter !== idx) {
        result = result.next;
        counter++;
      }
      return result;
    } else {
      // 중간 인덱스보다 클 때
      let counter = this.length - 1;
      let result = this.tail;
      while (counter !== idx) {
        result = result.prev;
        counter--;
      }
      return result;
    }
  }

  set(idx, val) {
    const getNode = get(idx);
    if (getNode) {
      getNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);
    const newNode = new Node(val);
    const getNode = this.get(idx);
    const temp = getNode.prev;

    newNode.prev = temp;
    newNode.next = getNode;
    getNode.prev = newNode;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(idx){
    if(idx < 0 || idx > this.length) return false;
    if(idx === 0) return this.shift();
    if(idx === this.length) return this.pop();

    const getNode = this.get(idx);
    const prevNode = getNode.prev;
    const nextNode = getNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    getNode.next = null;
    getNode.prev = null;
    this.length--;
    return getNode;
  }
}
