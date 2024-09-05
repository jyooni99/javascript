// 이벤트 객체 속성
function handleClick(event){
  let val;
  val = event;

  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  //실행된 이벤트 타입
  val = event.type;

  // 윈도우로부터의 거리 좌표
  val = event.clientY;
  val = event.clientX;

  // 요소로부터의 거리 좌표
  val = event.offsetY;
  val = event.offsetX;

  console.log(val);
}

//이벤트 실행할 때마다 이벤트의 타입을 console.log에 출력
function handleEvent(e){
  if(e.type === 'submit'){
    e.preventDefault();
  }
  console.log(`Event Type: ${e.type}`);
}


const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');
const title = document.querySelector('h2');
const emailInput = document.querySelector('#email');

//click
//요소를 클릭하면 down -> up -> click 순서로 출력
submitBtn.addEventListener('click', handleEvent); // 요소를 클릭 했을 때
submitBtn.addEventListener('mousedown', handleEvent); //요소를 마우스로 눌렀을 때
submitBtn.addEventListener('mouseup', handleEvent); // 요소에서 마우스를 뗐을 때

//mouse move
submitBtn.addEventListener('mouseenter', handleEvent); // 마우스가 요소 안에 들어갔을 때
submitBtn.addEventListener('mouseleave', handleEvent); // 마우스가 요소에서 나갔을 때 
// submitBtn.addEventListener('mousemove', handleEvent); // 마우스가 요소에서 움직일 때

//input
// keydown은 키보드의 모든 키에 반응, keypress는 text에 반영되는 키를 눌렀을 때만 반응
emailInput.addEventListener('keydown', handleEvent); // 키보드를 눌렀을 때
emailInput.addEventListener('keyup', handleEvent); // 키보드를 떼었을 때 
emailInput.addEventListener('keypress', handleEvent); // 키보드를 눌렀을 때  

// focus
emailInput.addEventListener('focus', handleEvent); // input에 포커스가 갔을 때 (커서가 갔을 때)
emailInput.addEventListener('blur', handleEvent); //input에 포커스가 사라졌을 때 
