//암시적 변환
let str = "10"
let num = 10;

console.log(typeof(str)); //string
console.log(str *= 1);
console.log(typeof str); //number

console.log(typeof(num)); //number
console.log(num += '');
console.log(typeof num); //string

console.log (str, num); //10 '10'

//
let a = 16;
let b = false;

console.log(a.toString());   // "16"
console.log(a.toString(2));  // "10000"
console.log(a.toString(8));  // "20"
console.log(a.toString(16)); // "10"
console.log(null.toString()); // TypeError
console.log(false.toString()); // "false"
console.log(true.toString()); // "true"

