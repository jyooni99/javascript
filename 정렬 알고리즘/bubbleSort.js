//오름차순
function bubbleSort(arr){
	for (let i = 0; i < arr.length; i++){
		for(let j = 1; j <  arr.length - i; j++){ // 이미 정렬된 값은 비교에서 제외
			if(arr[j - 1] > arr[j]){ // 값 비교
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]; // 값 교환 
			}
		}
	}
}

// 내림차순
function bubbleSortDesc(arr){
	for (let i = 0; i < arr.length; i++){
		for(let j = 1; j <  arr.length - i; j++){ // 이미 정렬된 값은 비교에서 제외
			if(arr[j] > arr[j - 1]){ // 값 비교
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // 값 교환 
			}
		}
	}
}

bubbleSort([30, 2, 14, 20, 5, 25]);
bubbleSortDesc([30, 2, 14, 20, 5, 25]);
