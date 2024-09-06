//삽입 정렬 오름차순
function insertSort(arr){

  for (let i = 1; i < arr.length; i++){
    let key = arr[i]; // 현재 요소, 비교할 값
    let j = i - 1; //비교 범위

    // 현재 요소 바로 이전 요소부터 첫번째 요소까지 순회하며, 위치 찾기 
    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j]; // 요소를 오른쪽으로 이동
      j--; 
    }

    arr[j + 1] = key; // j-- 코드로 인해, 올바른 위치보다 한 칸 앞에 있으니까, +1을 해준다.
  }
}

// 삽입정렬 내림차순
function insertSortDesc(arr){

  for (let i = 1; i < arr.length; i++){
    let key = arr[i]; // 현재 요소, 비교할 값
    let j = i - 1; //비교 범위

    // 현재 요소 바로 이전 요소부터 첫번째 요소까지 순회하며, 위치 찾기 
    while(j >= 0 && arr[j] > key){
      arr[j + 1] = arr[j]; // 요소를 오른쪽으로 이동
      j--; 
    }

    arr[j + 1] = key; // j-- 코드로 인해, 올바른 위치보다 한 칸 앞에 있으니까, +1을 해준다.
  }
}

insertSort([8, 20, 13, 6, 10, 7]);
insertSortDesc([8, 20, 13, 6, 10, 7]);