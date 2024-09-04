//map 사용 해보기
const numbers = [1, 4, 9];
let roots = numbers.map(val => Math.sqrt(val));

console.log(`원본배열: ${numbers}`);
console.log(`map배열: ${roots}`);
