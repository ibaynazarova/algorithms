"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxPalindromeN2 = void 0;
function getMaxPalindromeN2(s) {
    if (s.length === 1)
        return s;
    let maxLength = 0;
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 0; i < s.length; i++) {
        let length = getMaxPalindromLength(s, i, i);
        if (maxLength < length) {
            maxLength = length;
            maxLeft = i - Math.floor(length / 2);
            maxRight = i + Math.floor(length / 2);
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        let length = getMaxPalindromLength(s, i, i + 1);
        if (maxLength < length) {
            maxLength = length;
            maxLeft = i - Math.floor(length / 2) + 1;
            maxRight = i + Math.floor(length / 2);
        }
    }
    return s.substring(maxLeft, maxRight + 1);
}
exports.getMaxPalindromeN2 = getMaxPalindromeN2;
;
const getMaxPalindromLength = (str, left, right) => {
    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            left--;
            right++;
        }
        else
            break;
    }
    return right - left - 1;
};
//# sourceMappingURL=max_palindrome_n2.js.map