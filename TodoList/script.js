// disabled 속성 적용 x , storage 저장 안됨 


// 변수, 상수 만들기
const createBtn = document.getElementById('createBtn');
const list = document.getElementById('list');
let todos = [];

//이벤트 추가
createBtn.addEventListener('click', createNewTodo);

// 리스트를 추가하는 함수
function createNewTodo(){
  const item = {
    id: new Date().getTime(),
    text: '',
    complete: false
  }

  // 배열에 처음 새로운 아이템 추가
  todos.unshift(item);

  // 요소 생성하기
  const {itemEl, inputEl, editBtn, removeBtn} = createTodoElement(item);
  list.prepend(itemEl);
  inputEl.removeAttribute('disabled');
  inputEl.focus();

  saveToLocalStorage();
}

function createTodoElement(item){
  //컨테이너, 체크박스 생성
  const itemEl = document.createElement('div');
  itemEl.classList.add('item');

  const checkboxEl = document.createElement('input')
  checkboxEl.type = 'checkbox';
  checkboxEl.checked = item.complete;

  if(item.complete){
    itemEl.classList.add('complete');
  }

  //text input
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.value = item.text;
  inputEl.setAttribute('disabled', '');

  //수정, 삭제 버튼
  const actionEl = document.createElement('div');
  actionEl.classList.add('actions');

  const editBtn = document.createElement('button');
  editBtn.classList.add('material-icons');
  editBtn.innerText = 'edit';

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('material-icons', 'removeBtn');
  removeBtn.innerText = 'remove';

  // dom에 요소 추가
  actionEl.append(editBtn);
  actionEl.append(removeBtn);

  itemEl.append(checkboxEl);
  itemEl.append(inputEl);
  itemEl.append(actionEl);

  // 체크박스 선택 시 변경 사항
  checkboxEl.addEventListener('change', ()=>{
    item.complete = checkboxEl.checked;

    if(item.compplete){
      itemEl.classList.add('complete');
    }else{
      itemEl.classList.remove('complete');
    }

    saveToLocalStorage();
  })


  inputEl.addEventListener('input', () => {
    item.text = inputEl.value;
  })

  inputEl.addEventListener('blur', () => {
    inputEl.setAttribute('disabled', '');
    saveToLocalStorage();
  })

  editBtn.addEventListener('click', () => {
    inputEl.removeAttribute('disabled');
    inputEl.focus();
  })

  removeBtn.addEventListener('click', () => {
    // 데이터 지우기
    todos = todos.filter(todo => todo.id !== itemEl);

    //요소 지우기
    itemEl.remove();
    saveToLocalStorage();
  })

  saveToLocalStorage();

  return{
    itemEl, inputEl, editBtn, removeBtn
  }
}


function saveToLocalStorage(){
  const data = JSON.stringify(todos);
  localStorage.setItem('myTodos', data);
}

function loadFromLocalStorage(){
  const data = localStorage.getItem('myTodos');

  if(data){
    todos = JSON.parse(data);
  }
}


function displayTodos(){
  loadFromLocalStorage();

  for(let i = 0; i < todos.length; i++){
    const item = todos[i];
    const {itemEl} = createTodoElement(item);
    list.append(itemEl);
  }
}

displayTodos();