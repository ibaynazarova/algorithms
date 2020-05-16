"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMaxPalindromeN2(s) {
    if (s.length === 1)
        return s;
    var maxLength = 0;
    var maxLeft = 0;
    var maxRight = 0;
    ;
    for (var i = 0; i < s.length; i++) {
        var length_1 = getMaxPalindromLength(s, i, i);
        if (maxLength < length_1) {
            maxLength = length_1;
            maxLeft = i - Math.floor(length_1 / 2);
            maxRight = i + Math.floor(length_1 / 2);
        }
    }
    for (var i = 0; i < s.length - 1; i++) {
        var length_2 = getMaxPalindromLength(s, i, i + 1);
        if (maxLength < length_2) {
            maxLength = length_2;
            maxLeft = i - Math.floor(length_2 / 2) + 1;
            maxRight = i + Math.floor(length_2 / 2);
        }
    }
    return s.substring(maxLeft, maxRight + 1);
}
exports.getMaxPalindromeN2 = getMaxPalindromeN2;
;
var getMaxPalindromLength = function (str, left, right) {
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