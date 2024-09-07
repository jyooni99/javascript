// //appendChild
// const ul = document.createElement('ul');
// const li = document.createElement('li');
// const text = document.createTextNode('리스트 생성');

// document.body.appendChild(ul); // body에 ul 태그 추가
// ul.appendChild(li); //ul에 li 태그 추가
// li.appendChild(text); //li에 '리스트 생성' 텍스트 노드 추가


//append
const div = document.createElement('div');
const p1 = document.createElement('p');
p1.innerText = 'This is p1';
const p2 = document.createElement('p');
p2.innerText = 'This is p2';

div.append('Text Append', p1, 'TextApped', p2, 'TextApped');
document.body.append(div);

// append & prepend
const list = document.getElementById('list');
// const li1 = document.createElement('li');
// li1.innerText = 'prepend list';
// const li2 = document.createElement('li');
// li2.innerText = 'append list';

// list.prepend(li1);
// list.append(li2);

// before & after
const li = document.getElementById('li');

const li3 = document.createElement('li');
li3.textContent = 'after list';
const li4 = document.createElement('li');
li4.textContent = 'before list';

li.after(li3, 'This is After method');
li.before(li4, 'This is before Method');

//insertBefore
// const li5 = document.createElement('li');
// li5.innerHTML = 'insetBefore list';
// list.insertBefore(li5, li);

//removeChild
const remove1 = list.removeChild(li4);
const remove2 = list.removeChild(list.firstElementChild);
const remove3 = list.removeChild(list.lastElementChild);

console.log(remove1);
console.log(remove2);
console.log(remove3);