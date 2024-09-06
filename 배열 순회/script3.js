//reduce 사용해보기
const strArr = ['안녕','하세요','.', '저는', 'ooo', '입니다.'];
let str = strArr.reduce((acc, cur) => acc + cur);

console.log(str);
console.log(typeof str);

//reduce를 사용해서 배열 요소들의 합 구하기
const numArr = [20, 30, 24, 46, 78];
let sum = numArr.reduce((acc, cur, idx) =>  {
  console.log(`${idx}번째 acc: ${acc}`); 
  console.log(`${idx}번째 cur: ${cur}`); 
  return acc + cur;
}, 0);

console.log(sum);

function greaterThan10 (val){
	return val >= 10;
}

const filter = [30, 20, 8, 10, 0, 1].filter(greaterThan10);
console.log(filter);