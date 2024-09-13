//배열 생성
function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  const pivot = arr[0]; // 피벗은 배열의 첫 번째 값
  const left = []; // 피벗보다 작은 값을 넣을 배열
  const right = []; // 피벗보다 크거나 같은 값을 넣을 배열


  for(let i = 1; i < arr.length; i++){
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  //quickSort(left)와 quickSort(right)는 배열을 계속 쪼개면서 각각을 정렬한 후 병합하는 역할
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort([42, 35, 18, 90, 77, 23, 81, 9, 60, 52]));



//제자리 정렬
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return; // 더 이상 분할할 범위가 없을 때
  }

  // 피벗을 배열의 첫 번째 요소로 설정
  const pivot = arr[left];
  let i = left + 1; // 피벗 바로 다음 요소부터 탐색 시작
  let j = right;

  while(i <= j){
    //피벗보다 큰 값을 찾을 때까지 i 증가
    while(i <= j && arr[i] <= pivot){
      i++;
    }
    
    //피벗보다 작은 값을 찾을 때까지 j 감소
    while(i <= j && arr[j] >= pivot){
      j--;
    }
    
    // left와 right가 교차하지 않았으면 교환
    if(i < j){
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[j], arr[left]] = [arr[left], arr[j]];

  quickSort(arr, left, j - 1); // 피벗 기준 왼쪽 배열
  quickSort(arr, j + 1, right); // 피벗 기준 오른쪽 배열

  return arr;
}

// // 예시
const arr = [33, 10, 55, 71, 29, 70, 3];
// console.log(quickSort(arr));
