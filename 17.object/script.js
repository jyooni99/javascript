//vegan 이란 프로퍼티를 추가하고 false 를 값으로 넣으세요.
// price 를 500 증가시키세요.
// flavor 프로퍼티를 삭제하세요.
// name 프로터피를 두 가지 방식으로 출력해보세요.

const lunchMenu = {
  name: '떡볶이',
  price: 5000,
  flavor: 'hot'
}

lunchMenu.vegan = false;
lunchMenu['price'] += 500;
delete lunchMenu.flavor;

console.log(lunchMenu.name);
console.log(lunchMenu['name']);
console.log(lunchMenu);

//직사각형을 나타내는 객체를 만들어내는 Rectangle 생성자 함수를 작성하세요.
// function Rectangle(width, height){
//   this.width = width;
//   this.height = height;
//   this.describe = function(){
//     console.log(`면적: ${this.width} * ${this.height}`);
//   }
// }


//위 2번의 생성자 함수를 클래스로 작성해보세요.
//width 와 height 필드들을 private 필드로 수정한 뒤 getter와 setter를 추가하세요. 
class Rectangle{
  #width;
  #height;

  constructor(width, height){
    this.#width = width;
    this.#height = height;
  }

  get width(){
    return this.#width;
  }

  set width(newWidth){
    if(newWidth > 0){
      this.#width = newWidth;
    }
  }

  get height(){
    return this.#height;
  }

  set height(newHeight){
    if(newHeight > 0){
      this.#height = newHeight;
    }
  }

  
  describe(){
    console.log(`면적: ${this.width} * ${this.height}`);
  }
}


myRect = new Rectangle(20, 30);
myRect.width = 60;
myRect.height = 60;

myRect.describe();


//속 관계에 있는 Animal 과 Dog 클래스를 작성해보세요. 
class Animal{
  constructor(name){
    this.name = name;
  }

  describe(){
    return `이름: ${this.name}`;
  }
}

class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }

  describe(){
    return super.describe() + ` (${this.breed})`;
  }
}

const myAnimal = new Animal('둥이');
console.log(myAnimal.describe()); // 이름: 둥이

const myDog = new Dog('둥이', '포메라니안');
console.log(myDog.describe()); // 이름: 둥이 (포메라니안)