//함수에서 this -> window 참조, undefined 출력
const audio2 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  display(){
    this.categories.forEach(function(category){
      console.log(`title: ${this.title},
      category: ${category}`);
    })
  }
}

//this.title은 thisArg에 저장된 객체를 가리킴, myAudio 출력
const audio3 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  display(){
    this.categories.forEach(function(category){
      console.log(`title: ${this.title},
      category: ${category}`);
    }, {title: 'myAudio'});
  }
}

//this.title은 thisArg에 저장된 this, 즉 객체 본인을 가리킴, audio출력
const audio4 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  display(){
    this.categories.forEach(function(category){
      console.log(`title: ${this.title},
      category: ${category}`);
    }, this);
  }
}

// 화살표 함수는 상위 스코프를 가리킴, 즉 객체 본인을 가리킴, audio출력
const audio5 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  display(){
    this.categories.forEach(() => {
      console.log(this);
    });
  }
}


audio2.display();
audio3.display();
audio4.display();
audio5.display();