/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /**
     * 고유한 요소의 합이 k다.
     * 읽기 인덱스 기준 쓰기 인덱스와 같지 않을 경우
     * => 쓰기 인덱스 + 1 후 쓰기 인덱스와 읽기 인덱스 값 교체
     */

    let k = 0;

   for(let read = 0; read < nums.length; read++) {
        if(nums[read] !== nums[k]) {
            k++;
            nums[k] = nums[read];
        }
    }
    return k + 1;
};