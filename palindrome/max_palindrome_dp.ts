export function longestPalindromeDp(s: string): string {
    if (s.length === 0) return '';

    const dimension = s.length;
    const palindromes: boolean[][] = new Array<boolean>(dimension).fill(false)
                .map(() => new Array<boolean>(dimension).fill(false));

    let maxLength = 0;
    let maxI = 0;
    let maxJ = 0;

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) {
                palindromes[j][i] = true;
            } 
            else if (j + 1 == i) {
                palindromes[j][i] = s[j] === s[i];
            }
            else {
                palindromes[j][i] = s[j] === s[i] && palindromes[j + 1][i - 1];
            }

            if(palindromes[j][i] && i - j + 1 > maxLength) {
                maxLength = i - j + 1;
                maxI = i;
                maxJ = j;
            }
        }
    }

    return s.substring(maxJ, maxI + 1);
}