//오름차순
function selectSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    let minIdx = i;

    // 가장 작은 값 찾기
    for (let j = i + 1; j < arr.length ; j++){
      if(arr[minIdx] > arr[j]){
        minIdx = j;
      }
    }

    // minIdx와 i가 같지 않으면 값 교환
    if(minIdx !== i){ 
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
}


// 내림차순 
function selectSortDesc(arr){
  for(let i = 0; i < arr.length - 1; i++){
    let maxIdx = i;

    // 가장 큰 값 찾기
    for (let j = i + 1; j < arr.length ; j++){
      if(arr[maxIdx] < arr[j]){
        maxIdx = j;
      }
    }

    // maxIdx와 i가 같지 않으면 값 교환
    if(maxIdx !== i){ 
      [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
    }
  }
}

// console.log(selectSort([35, 20, 1, 87, 56, 4]));
// console.log(selectSortDesc([35, 20, 1, 87, 56, 4]));
