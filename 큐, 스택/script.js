class Stack {
	constructor(){
		this.items = [];
	}
	
	//인덱스 마지막 값 넣기
	push(item){ 
		this.items.push(item);
	}
	
	//인덱스 마지막 값 빼기
	pop(){
		return this.items.pop();
	}
	
	//인덱스 마지막값 보기
	peek(){
		if(this.items.length === 0){
			return null;
		}
		// items 배열의 마지막 item만 가져와준다. 
		// pop()과 다르게 배열에서 아이템이 빠지는 것이 아닌 유지된 채로 마지막 값만 받아와줌
		return this.items[this.items.length - 1];
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

//입력한 문자열 반대로 출력하는 함수
function reverseString(str){
  const stack = new Stack();

  for (char of str){
    stack.push(char);
  }

  let reverse = '';

  while(!stack.isEmpty()){
    reverse += stack.pop();
    console.log(reverse);
  }

  return reverse;
};

const original = "This is Stack";
let conversion = reverseString(original);
console.log(conversion);


// const stack = new Stack();
// stack.push(2);
// stack.push(4);
// stack.push(6);
// console.log(stack);

// console.log(stack.pop());
// console.log(stack.getSize());

// console.log(stack.peek());
// console.log(stack.getSize());

// console.log(`Stack is Empty? ${stack.isEmpty()}`);