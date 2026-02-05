/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let major = null;
    let count = 0;

    for(num of nums) {
        if(count === 0) {
            major = num;
        }
        count += num === major ? 1 : -1;
    }

    return major;
};