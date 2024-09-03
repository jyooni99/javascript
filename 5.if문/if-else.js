//if문
let num1 = 10;
let num2 = 20;

if(num1 > 5){
  console.log(num1); // 10 true이므로 num1 출력
}

if(num2 < 15){
  console.log(num2) //false이므로 num2 출력 x
}

//if-else문
if(num1 > num2){
  console.log(num1);
}else{
  console.log(num2);
}

//else if문
let num = 75;

if(num >= 90){
  console.log("A");
}else if(num >= 80){
  console.log("B");
}else if(num >= 70){
  console.log("C");
}else{
  console.log("F");
}

//중첩 else if
a = 30;
b = 40;

if(a !== b){
	if(a < b){
		console.log("a < b");
	}else{
		console.log("a > b");
	}
}else{
	console.log("a === b");
}

