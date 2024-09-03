// 산술 연산자 - 사칙 연산자

let num1 = 20;
let num2 = 30;
let str1 = "Hello ";
let str2 = "World!";
let str3 = "5";

console.log(num1 + num2); // 50
console.log(num1 - num2); // -10
console.log(num1 * num2); // 600
console.log(num1 / num2); //0.666666
console.log(num1 % num2); // 20

console.log(str1 + str2); // Hello World! 문자열도 결합시켜줌
console.log(str1 * str3); //NaN   -, *, /는 NaN
console.log(num1 + str3);// 205  "5"도 문자열. 어느 위치에든 문자열이 끼어있을 경우 숫자연산x


//대입 연산자
let a = 20;
a += 30;
console.log(a); // 50

let b = "<div>";
b += "hello";
b += "</div>";
console.log(b); //<div>hello</div>


//비교 연산자
let num3 = 10;
let num4 = 30;
let str4 = '5';
let str5 = '10';

console.log(num3 > num4); //false
console.log(num3 < num4); //true
console.log(num3 == str5); //true 값이 같아서
console.log(num3 === str5); //false 값은 같지만, 데이터 타입이 달라서
console.log(str4 < str5); // false 문자열끼는 맨 앞글자부터 비교. 5가 1보다 크니까 false

//논리 연산자
let num5 = 10;
let num6 = 5;
let num7 = 20;

console.log((num5 > num6) && (num6 > num7)); // false
console.log((num5 < num6) && (num6 < num7)); // true
console.log((num5 > num6) || (num6 > num7));  // true
console.log((num5 > num6) || (num6 < num7)); // true
console.log(!(num5 > num6)); // false: a > b는 true지만, 앞에 not 연산자가 붙어 false