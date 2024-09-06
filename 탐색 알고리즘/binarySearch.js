function binarySearch(arr, target){
	let lowIdx = 0; 
	let highIdx = arr.length - 1;
	
	while(lowIdx <= highIdx){
		let midIdx = Math.floor(lowIdx + (highIdx - lowIdx) / 2); //중간값 인덱스
		
    // console.log(`찾는 값: ${target}  범위: ${arr.slice(lowIdx, highIdx + 1)}`);

		if(target === arr[midIdx]){
			return midIdx;
		}else if(target > arr[midIdx]){ 
			lowIdx = midIdx + 1;  // 찾으려는 값이 중간값보다 크면 lowIdx를 midIdx 다음으로 (오른쪽 범위)
		}else { 
			highIdx = midIdx - 1; // 찾으려는 값이 중간값보다 작으면 highIdx를 midIdx 전으로 (왼쪽 범위)
		}
	}
}

binarySearch([1, 2, 3, 5, 9, 10, 13], 9);