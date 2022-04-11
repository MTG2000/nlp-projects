import { findRoot } from "../Dictionary";
import { getPossiblePrefixes } from "./prefixes";
import { getPossibleSuffixes } from "./suffixes";

export default function findVerb(word: string) {
    // Handle Prefixes
    const possiblePrefixes = getPossiblePrefixes(word)
    // Handle Suffixes
    const possibleSuffixes = getPossibleSuffixes(word)

    const results = [];
    // Handle Stem
    for (let i = 0; i < possiblePrefixes.length; i++) {
        const prefix = possiblePrefixes[i];
        const prefixWordLength = prefix.reduce((acc, letter) => acc + letter.value.length, 0)

        for (let j = 0; j < possibleSuffixes.length; j++) {
            const suffix = possibleSuffixes[j];
            const suffixWordLength = suffix.reduce((acc, letter) => acc + letter.value.length, 0)

            const root = word.slice(prefixWordLength, word.length - suffixWordLength);

            if (findRoot(root))
                results.push({
                    prefix,
                    suffix,
                    root
                })

        }
    }

    return results;
}