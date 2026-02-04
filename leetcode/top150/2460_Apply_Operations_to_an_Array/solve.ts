/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 1차 풀이 - 실패
var applyOperations = function(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    let k = nums.length;

    for(let read = 0; read < k; read++) {
        if(nums[read] === 0) {
            while(k > read) {
                k -= 1;
                if(nums[k] !== 0) {
                    const temp = nums[k];
                    nums[k] = nums[read];
                    nums[read] = temp;
                    break;
                }
            }
        }
    }

    return nums;
};

/**
 * 두 번째 
 * for문에서 O(n^2) + 문제에서 "순서를 유지한 채" 숫자 0을 배열의 뒤로 옮긴다 가 문제였는데,
 * 위 풀이 기준으로는서 순서가 유지되지 않은 채 0이 뒤로 옮겨진다.
 */

/**
 * 두 번쨰 풀이
 * 1. 문제 계산 적용.
 * 2. 순서 유지한 채 0을 배열 뒤로 옮긴다.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    // 1단계: Operation 진행
    // O(n)
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

    // 2단계: 순서 유지한채 0이 아닌 숫자 앞으로 떙기기
    // O(n)
    let write = 0;
    for(let read = 0; read < nums.length; read++) {
        if(nums[read] !== 0) {
            nums[write] = nums[read];
            write += 1;  
        }
    }

    while(write < nums.length) {
        nums[write] = 0;
        write += 1;
    }

    return nums;
}