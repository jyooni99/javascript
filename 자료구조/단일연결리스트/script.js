// Node 클래스: 각 노드를 나타냄
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// SinglyLinkedList 클래스: 연결 리스트를 관리
class SinglyLinkedList {
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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.head) return undefined;
    
    //current와 newTail은 같은 위치에서 시작 (0에서 시작)
    let current = this.head; // 마지막 노드 (삭제할 노드)
    let newTail = current;   // 마지막 이전 노드 (새로운 tail이 될 노드)
    
    // 리스트는 인덱스가 없기 때문에 head부터 next가 null일 때까지 (마지막 노드까지) 순차적으로 순회해야 함
    while(current.next){
      newTail = current; 
      current = current.next;
    }
    
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    
    // 노드 삭제 후, 리스트에 요소가 없다면 head와 tail은 null이 됨 
    if(this.length === 0){ 
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unShift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // 기존의 head를 새 노드의 next로 설정
      this.head = newNode; // 새로운 노드를 head로 설정
    }

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;

    this.length--;
    
    if(this.length === 0){ 
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let counter = 0;
    let result = this.head;

    while (counter !== idx) {
      result = result.next;
      counter++;
    }

    return result;
  }

  set(idx,val){
    const getNode = this.get(idx);
    if(getNode){
      getNode.val = val;
      return true;
    }

    return false;
  }
  
  insert(idx, val){
		// 인덱스가 0이하, 리스트 길이보다 클 때 -> return false
    if(idx < 0 || idx > this.length) return false; 
    
    // 인덱스가 0일 때 -> 맨 앞에 노드 추가
    if(idx === 0 ) return !!this.unShift(val); 
    
    // 인덱스가 리스트 길이일 때 -> 맨 뒤에 노드 추가
    if(idx === this.length) return !!this.push(val); 
    
    // 그 외 범위일 때 -> 해당 인덱스에 노드 추가
    const newNode =  new Node(val); // 새로운 노드 생성
    const getNode = this.get(idx - 1); // 해당 인덱스 이전 노드 불러오기
    const next = getNode.next;
    getNode.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }

  remove(idx){
    // 인덱스가 0이하, 리스트 길이보다 크거나 같을 때 -> return undefined
    if(idx < 0 || idx >= this.length) return undefined; 

    // 인덱스가 0일 때 -> shift
    if(idx === 0 ) return this.shift(); 

    // 인덱스가 리스트 길이 - 1일 때 -> pop
    if(idx === this.length - 1) return this.pop(); 

    // 그 외 범위일 때 -> 해당 인덱스 노드 삭제, 이전 노드를 다음 노드와 연결
    const prevNode = this.get(idx - 1);
    const removed = prevNode.next;
    prevNode.next = removed.next;
    
    this.length--;
    return removed;
  }

  reverse(){
    let current = this.head; // 현재 노드를 가리킨다.    
    this.head = this.tail;
    this.tail = current;
    
    let prev = null; // 이전 노드를 가리킨다.
    let next = null; // 다음 노드를 가리킨다.

    while(current){
      next = current.next; // 다음 노드에 다음 노드를 저장
      current.next = prev; // 이전 노드를 다음 노드로 설정 
      prev = current;  // 이전 노드에 현재 노드 저장
      current = next;  // 현재 노드에 다음 노드 저장
    }

    return this;
  }
}
