const fullName = function(city, country){
  console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
}

const person1 = {
  firstName: 'John',
  lastName: 'Doe'
}

// call: 함수를 호출하는 함수, 첫번째 매개변수로 전달한 것을 참조하게 된다.
// 즉, this가 window객체가 아닌 person1을 가리킨다.

fullName(person1); 
fullName.call(person1);
fullName.call(person1, 'Osol', 'Norway'); //인수를 지정할 수 있다. 

// 함수를 호출하는 메서드. 하는 일은 동일하지만, 인수 부분을 배열로 넣어주어야 한다.
fullName.apply(person1, ['Seoul', 'Korea']); //인수를 지정할 수 있다. 단, 배열에 저장해야 한다.

// bind: 함수를 반환하는 메서드. call, apply와는 달리 함수를 실행하지 않고, 반환한다.
function func(language){
  if(language === 'kor'){
    console.log(`language: ${this.korGreeting}`);
  }else{
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'Hello'
};

// boundFunc에 함수가 반환된다. 여기서 this는 window객체가 아닌, greeting 객체를 가리킨다.
const boundFunc = func.bind(greeting); 
boundFunc('kor');
func('kor'); // 원본 함수는 그대로 window를 가리킨다. 