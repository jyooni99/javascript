// input 값이 같으면 output도 항상 같아야 한다.
const add = (x, y) => x + y;
console.log(10, 20);

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName('John', 'Doe'));


// side Effects가 발생하지 않아야 한다.
// 함수 밖의 스코프에 있는 z를 바꾸면 output이 달라짐, 이게 side Effects
const z = 1;
const sum = (x, y) => x + y + z;
console.log(sum(10, 20));


//전역 변수 num이 함수 실행으로 인해 값이 바뀜, 이것도 side Effect 
let num = 0;
const sum2 = () => num += 1;
sum2();
console.log(num);

//pure-function
const alphabetArray = ['A', 'B'];
const pureAddItemToArray = (originArray, newItem) => {
  return [...originArray, newItem];
}

console.log(pureAddItemToArray(alphabetArray, 'C'));