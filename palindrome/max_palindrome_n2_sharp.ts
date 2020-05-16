export function longestPalindromeN2Sharp(s: string): string {
    if (s.length === 1) return s;
    let maxLength = 0;
    let center = 0;

    s = `#${s.split('').join('#')}#`;

    for (let i = 0; i < s.length; i++) {
        let currentMaxLength = getMaxPalindromLength(s, i);
        if (maxLength < currentMaxLength) {
            maxLength = currentMaxLength;
            center = i;
        }
    }

    let left = center - Math.floor(maxLength / 2);
    let right = center + Math.floor(maxLength / 2);

    return s.substring(left, right).replace(/#/g, '');
};

const getMaxPalindromLength = (str: string, center: number): number => {
    let left = center;
    let right = center;

    while (left >= 0 && right < str.length) {
        if (str[left] === str[right]) {
            left--;
            right++;
        } else break;
    }

    return right - left - 1;
};

