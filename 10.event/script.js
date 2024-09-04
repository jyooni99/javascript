var x = 10; // (1) 전역 스코프에서 x를 10으로 초기화

var outer = function () {
  console.log(x); // ①

  var inner = function () {
    var x = 30; // (2) inner 함수의 지역 변수 x를 30으로 초기화
    console.log(x); // ②
  };

  inner();

  x = 20; // 전역 변수 x의 값을 20으로 변경
  console.log(x); // ③
};

outer();
console.log(x); // ④
