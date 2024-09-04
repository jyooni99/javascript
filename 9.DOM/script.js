//getElementById
const title = document.getElementById('title');
title.style.color = 'red'; // title 색상 red

const btn = document.getElementById('btn');

btn.onclick = function(){
  title.style.color = 'blue';
}

//getElementsByTagName
document.getElementsByTagName('li')[1].style.backgroundColor = 'lightblue';
const li = document.getElementsByTagName('li');
li[2].style.backgroundColor = 'pink';

//getElementsByClassName
document.getElementsByClassName("red")[0].style.color = "red";
document.getElementsByClassName("blue")[1].style.color = "blue";

//getElementsByName
// document.getElementsByName("photo")[0].src = "#2";  // img src가 #에서 #2로 변경

//querySelector
// 최상위 요소의 li에 스타일 적용 (ul 태그의 첫번째 li에 적용 )
var li2 = document.querySelector("li");
li2.style.color = "red";

//querySelectorAll과 for문은 세트! for문이 없으면 다른 요소에 스타일이 적용되지 않음.
var lis = document.querySelectorAll(".active");

for(var i=0; i < lis.length; i++){
  lis[i].style.color = "blue";
}