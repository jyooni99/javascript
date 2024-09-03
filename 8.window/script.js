const input = prompt(); //입력창
alert(input);  // 알림창

if(confirm('Yes or No')){ //Yes 또는 No 선택창
  console.log('Yes');
}else{
  console.log('No');
}

//window 프로퍼티
let val; 

val = window.outerHeight;
console.log(val);

val = window.outerWidth;
console.log(val);

val = window.innerHeight;
console.log(val);

val = window.innerWidth;
console.log(val);

val = window.scrollY;
console.log(val);


val = window.location; //현재 url에 대한 정보
console.log(val);

val = window.history; //사용자가 방문한 정보
console.log(val);

val = window.navigator; //브라우저에 대한 정보 포함
console.log(val);


