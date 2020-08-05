import { Hasher } from "./hash";

export function sortStrings(strings: string[]): string[] {
    const hasher = new Hasher();

    let hashes = strings.map((s: string) => {
        return {
            key: s,
            value: hasher.getHash(s)
        };
    });
    hashes.sort((a,b) => a.value - b.value);

    return hashes.map(h => h.key);
}