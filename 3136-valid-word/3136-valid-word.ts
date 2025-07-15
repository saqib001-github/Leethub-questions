function isValid(word: string): boolean {
    if (word.length < 3) return false;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let hasVowel = false;
    let hasConsonant = false;

    for (const ch of word) {
        const lowerCh = ch.toLowerCase();

        // Check if character is digit or English letter
        if (!(/[0-9a-z]/.test(lowerCh))) {
            return false; // invalid character found
        }

        if (/[a-z]/.test(lowerCh)) {
            if (vowels.has(lowerCh)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
}
