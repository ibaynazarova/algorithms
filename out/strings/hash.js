"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hasher {
    constructor(base = 31, mod = Math.pow(2, 64)) {
        this.base = base;
        this.mod = mod;
    }
    getHash(s) {
        let power = 1;
        let hash = 0;
        for (let i = 0; i < s.length; i++) {
            hash += s.charCodeAt(i) * power;
            power *= this.base;
        }
        return hash % this.mod;
    }
}
exports.Hasher = Hasher;
//# sourceMappingURL=hash.js.map