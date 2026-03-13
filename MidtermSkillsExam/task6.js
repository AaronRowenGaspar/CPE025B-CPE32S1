function firstUniqueChar(str) {
    const frequencyMap = {};
    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    for (let char of str) {
        if (frequencyMap[char.toLowerCase()] === 1) {
            return char;
        }
    }
    return null;
}

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 