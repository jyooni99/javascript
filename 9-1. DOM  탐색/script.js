const parent = document.querySelector('#parent');

// 현재 요소의 자식 노드가 포함된 NodeList를 반환, 모든 노드가 전부 포함
console.log(parent.childNodes);
console.log(parent.childNodes[1]);
console.log(parent.childNodes[1].nodeName);
console.log(parent.childNodes[1].nodeType);

//현재 요소의 자식 요소가 포함된 HTML Collection, 비 요소 노드는 제외
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].nodeName);
console.log(parent.children[1].nodeType);

// 노드 타입 상관 없음
console.log(parent.firstChild);
console.log(parent.lastChild);

// 요소 노드만
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


//형제 요소
const container = document.querySelector('#container');

console.log(container.previousSibling);
console.log(container.nextSibling);

console.log(container.previousElementSibling);
console.log(container.nextElementSibling);

//부모 요소
console.log(parent.parentNode);
console.log(parent.parentElement);