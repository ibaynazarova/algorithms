"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortStrings = void 0;
const hash_1 = require("./hash");
function sortStrings(strings) {
    const hasher = new hash_1.Hasher();
    let hashes = strings.map((s) => {
        return {
            key: s,
            value: hasher.getHash(s)
        };
    });
    hashes.sort((a, b) => a.value - b.value);
    return hashes.map(h => h.key);
}
exports.sortStrings = sortStrings;
//# sourceMappingURL=sort_strings.js.map