// 작은 단위로 쪼개진 배열을 정렬 및 병합하는 함수
function merge(leftArr, rightArr){
  const sortedArr = []; // 정렬된 배열
  let leftIdx = 0; // 왼쪽 배열 인덱스
  let rightIdx = 0; // 오른쪽 배열 인덱스

  while(leftIdx < leftArr.length && rightIdx < rightArr.length){ // 배열의 길이 전까지
    
    //왼쪽 배열 값이 오른쪽 배열 값보다 크면, 왼쪽 배열 값 넣고 인덱스 더하기
    if(leftArr[leftIdx] > rightArr[rightIdx]){ 
      sortedArr.push(leftArr[leftIdx]);
      leftIdx++;

    //오른쪽 배열 값이 왼쪽 배열 값보다 크면, 오른쪽 배열 값 넣고 인덱스 더하기 
    }else{
      sortedArr.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }

  //남아 있는 값이 있으면 배열에 추가
  return sortedArr.concat(leftArr.slice(leftIdx)).concat(rightArr.slice(rightIdx));
}


// 배열을 쪼개는 함수
function mergeSort(arr){
  if(arr.length === 1){ //배열을 더 쪼갤 수 없으면 반환
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // 배열을 나누는 기준 (가운데 인덱스) 
  const leftArr = arr.slice(0, mid); // 왼쪽: 0부터 mid 전까지 
  const rightArr = arr.slice(mid); // 오른쪽: mid부터 끝까지 

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const array = mergeSort([20, 10, 14, 50, 78, 3, 16]);
console.log(array);