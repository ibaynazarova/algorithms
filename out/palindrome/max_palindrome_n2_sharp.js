"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function longestPalindromeN2Sharp(s) {
    if (s.length === 1)
        return s;
    var maxLength = 0;
    var center = 0;
    s = "#" + s.split('').join('#') + "#";
    for (var i = 0; i < s.length; i++) {
        var currentMaxLength = getMaxPalindromLength(s, i);
        if (maxLength < currentMaxLength) {
            maxLength = currentMaxLength;
            center = i;
        }
    }
    var left = center - Math.floor(maxLength / 2);
    var right = center + Math.floor(maxLength / 2);
    return s.substring(left, right).replace(/#/g, '');
}
exports.longestPalindromeN2Sharp = longestPalindromeN2Sharp;
;
var getMaxPalindromLength = function (str, center) {
    var left = center;
    var right = center;
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
//# sourceMappingURL=max_palindrome_n2_sharp.js.map