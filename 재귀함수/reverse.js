// 문자열을 반대로 출력하는 재귀함수

function reverse(str){
  let i = str.length - 1;
  
  function reverseStr(index){
      if(index < 0) return '';
      return str[index] + reverseStr(index - 1);
  }
  
  return reverseStr(i);
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'