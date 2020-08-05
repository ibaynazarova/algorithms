import {getMaxPalindromeN2} from "./palindrome/max_palindrome_n2";
import {longestPalindromeN2Sharp} from "./palindrome/max_palindrome_n2_sharp";
import {longestPalindromeDp} from "./palindrome/max_palindrome_dp";
import { Hasher } from "./strings/hash";
import { sortStrings } from "./strings/sort_strings";


let hasher = new Hasher();
hasher.getHash('qwerqwer');
hasher.getHash('q');

console.log(hasher.getHash('qwerqwer'));
console.log(hasher.getHash('q'));


let strings = [
    'abc',
    'cbd',
    'cba',
    'ab',
    'abc',
    'aaa',
];

console.log(sortStrings(strings));