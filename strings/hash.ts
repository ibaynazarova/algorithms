export class Hasher {
    constructor(private base: number = 31, private mod: number = 2 ** 64) {}

    public getHash(s: string): number {
        let power = 1;
        let hash = 0;
        for(let i = 0; i < s.length; i++) {
            hash += s.charCodeAt(i) * power;
            power *= this.base;
        }
        return hash % this.mod;
    }
}