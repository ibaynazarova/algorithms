"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hash_1 = require("./strings/hash");
const sort_strings_1 = require("./strings/sort_strings");
let hasher = new hash_1.Hasher();
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
console.log((0, sort_strings_1.sortStrings)(strings));
//# sourceMappingURL=algorithms.js.map