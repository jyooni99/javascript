function linearSearch(arr, target){
	for (let i = 0; i < arr.length; i++){
    console.log(`현재 인덱스의 값: ${arr[i]}, 찾으려는 값: ${target}`)
		if(arr[i] === target){
			return i;
		}
	}
	return -1;
}

linearSearch([1, 12, 26, 5, 30, 10, 13], 26);