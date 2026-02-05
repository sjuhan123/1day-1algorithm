/** 
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
    return s.split(" ").filter(char => char).pop().length
};

/**
 * 1차 풀이 평가
 * - 문제는 배열을 원하지 않음 => 근데 split과 fliter로 새로운 배열 2번 생성
 * - 문제 조건이 주어진 s의 길이는 1 이상이지만, 빈 배열일 경우 pop 호출 시 런타임 에러 가능성
 */

var lengthOfLastWord = function(s) {
    s.trim();
    return s.length - s.lastIndexOf(' ') - 1;
}