//for문: 0부터 9까지 출력
for (var i = 0; i < 10; i++) {
  document.write(`${i} <br>`);
}

//중첨 for문: 구구단 2 ~ 9단 출력
var result = 0;

for (var dan = 2; dan < 10; dan++) {
  document.write("<h1>" + dan + "단</h1>");
  for (var i = 1; i < 10; i++) {
    result = dan * i;
    document.write(`${dan} X ${i} = ${result}<br>`);
  }
}

//while문: 구구단 2단 출력
var dan = 2;
var i = 1; // 변수 초기값 지정
var result = 0;

document.write(`<h1>while: 2단</h1>`);
while (i < 10) {
  result = dan * i;
  document.write(`${dan} X ${i} = ${result}<br>`);
  i++;
}

//do-while: 구구단 2단 출력
var dan = 2;
var i = 1; // 변수 초기값 지정
var result = 0;
document.write(`<h1>do-while: 2단</h1>`);

do{
  result = dan * i;
  document.write(`${dan} X ${i} = ${result}<br>`);
  i++;
} while(i < 10);


//while문과 do-while의 차이
let num = 3;

while(num < 1){
  document.write(`while: ${num} < 1`);
  num++;
}

do{
  document.write(`do-while: ${num} < 1`);
  num++;
}while (num < 1);

//continue
console.log('continue');
for(i=0; i < 3; i++){  //hello만 3번 출력
  console.log("hello");
  continue;
  console.log("world");  // 무시
  console.log("!");		// 무시
}


//break
console.log('break');
for(i=0; i < 3; i++){
  console.log("hello"); //hello만 1번 출력
  break;  //i가 3이 될 때까지 반복하지 않고 끝냄
  console.log("world");  // 무시
  console.log("!");		// 무시
}

