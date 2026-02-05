/**
 * 1. 로만 글자 - 숫자 매핑 정보
 * 2. 다음 숫자 > 기준 글자 => 합계 - 기준 글자
 * 3. 다음 숫자 <= 기준 글자 => 합계 + 기준 글자 
 */

var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D : 500,
        M: 1000
    }

    let total = 0;

    for(let i = 0; i < s.length; i++) {
        const curr = map[s[i]];
        const next = map[s[i + 1]];

        if(next && next > curr) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
}