function subsetSum(nums, targetSum) {
  const result = [];

  function backtrack(start, currentSubset, currentSum) {
      // 목표 합에 도달한 경우
      if (currentSum === targetSum) {
          result.push([...currentSubset]); // 배열 복사하여 추가
          return;
      }

      // 목표 합을 초과한 경우 백트래킹
      if (currentSum > targetSum) {
          return;
      }

      // 숫자 배열을 탐색
      for (let i = start; i < nums.length; i++) {
          // 현재 숫자를 부분 집합에 추가
          currentSubset.push(nums[i]);
          // 재귀 호출: 현재 숫자를 선택한 상태로 다음 단계 탐색
          backtrack(i + 1, currentSubset, currentSum + nums[i]);
          // 백트래킹: 선택한 숫자를 제거하고 다음 경우의 수 탐색
          currentSubset.pop();
      }
  }

  // 백트래킹 시작
  backtrack(0, [], 0);
  return result;
}


// 예시
const nums = [3, 34, 4, 12, 5, 2];
const targetSum = 9;
console.log(nums);
console.log('targetSum:' + targetSum);
console.log(subsetSum(nums, targetSum)); // [ [ 3, 4, 2 ], [ 4, 5 ] ]
