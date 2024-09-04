//return 값은 무조건 undefined
const arr = [1, 2, 3, 4, 5];

let isThree = arr.forEach((val) => {
  if (val === 3) {
    return "3입니다.";
  }
});

console.log(isThree); // undefined

//배열 요소들의 합 구하기
const arr2 = [20, 50, 30, 10, 40];
let sum2 = 0;

arr2.forEach((val) => {
  sum2 += val;
});

console.log(sum2);

//break를 사용할 수 없다
const arr3 = ["딸기", "사과", "포도", "귤"];

arr3.forEach((val) => {
  if (val === "사과") {
    console.log("배열 안에 사과가 있습니다.");
    // break; //SyntaxError
  } else {
    console.log(val);
  }
});
