class Queue{
	constructor(){
		this.items = [];
	}
	
	//인덱스 마지막에 값 넣기
	enqueue(item){ 
		this.items.push(item);
	}
	
	//인덱스 첫번째에 값 빼기
	dequeue(){
		return this.items.shift();
	}
	
	//가장 첫번째 값
	peek(){
		return this.items[0];
	}
	
	//길이 return
	getSize(){
		return this.items.length;
	}
	
	//비었는지 확인
	isEmpty(){
		return this.getSize() === 0;
	}
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
console.log(queue);

console.log(queue.dequeue());
console.log(queue.getSize());

console.log(queue.peek());
console.log(queue.getSize());

console.log(`Queue is Empty? ${queue.isEmpty()}`);