//break 키워드가 없을 때
let i = 1;

switch(i){
  case 1:
    console.log('i = 1');
  case 2:
    console.log('i = 2');
  case 3:
    console.log('i = 3');
}

//break 키워드가 있을 때
switch(i){
  case 1:
    console.log('i = 1');
    break;
  case 2:
    console.log('i = 2');
    break;
  case 3:
    console.log('i = 3');
    break;
}

//default문
let b = 5;

switch(b){
  case 1:
    console.log('b = 1');
    break;
  case 2:
    console.log('b = 2');
    break;
  case 3:
    console.log('b = 3');
    break;
  default:
    console.log('default');
}


//오늘의 요일 츨력하기
switch(new Date().getDay()){
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log(`Today is ${day}`);

//여러 조건에서 같은 값을 반환해야 할 경우
function FavoriteFood(food){
  let label = '';

  switch (food){
    case 'apple':
    case 'banana':
    case 'grape':
      label = 'fruit';
      break;
    case 'pizza':
    case 'hamburger':
    case 'chicken':
      label = 'fast food';
      break;
    case 'cake':
    case 'cookie':
    case 'waffle':
      label = 'dessert';
      break;
    default:
      label = 'undefined food';
  } 
  return label;
}

console.log(FavoriteFood('apple'));
console.log(FavoriteFood('pizza'));
console.log(FavoriteFood('bread'));