function CountWordSyllables(w = ''){

    w = w.toLowerCase();
    //Handle exceptions
    const twoSyllable = ['coapt','coed','coinci', 'colonel', 'cafe', 'scotia'];
    if(w.length <= 3 || w == 'preach' || w == 'preyed') return 1;
    if(twoSyllable.includes(w)) return 2;
    if(w == 'serious', w == "worcestershire", w == "alias", w == 'acacia') return 3;
    if(w == 'epitome', w == 'hyperbole') return 4;

    
    const regex = [/[aeiouy]{1,}/g, /^(?:mc)/, /^(?:tri)[aeiouy]/,
                   /^(?:bi)[aeiouy]/, /^(?:pre)[aeiouy]/, /[^tc](?:ian)$/,
                    /[aeiou][^aeiouy]e$/,/[aeiou][^aeiouy]es$/, /i[ao]$/, /[aeiouy]ing$/];
    
    //base case
    const holdVowels = w.match(regex[0]); //count vowel groups
    let count = holdVowels.length;


    if(regex[1].test(w) || regex[2].test(w) || regex[3].test(w) || regex[4].test(w)) // Handle syllablic prefixes
        count++;
    if(regex[5].test(w)) // Handle ian suffix
        count++;
    if(regex[6].test(w) || regex[7].test(w)) // handle [vowel]_e(s)
        count--;
    if(regex[8].test(w)) // handle i[ao]
        count++;
        
    if(regex[9].test(w)) // handle vowel+ing
        count++;
    return count;
}
function CountSyllablesSentence(s) {

    const wordsOnly = /\S+/g;
    const hold = s.match(wordsOnly)
    let sum = 0;
    hold.forEach(word => {
        sum += CountWordSyllables(word);
    });
    return sum;
}
function AlliterateMe(a = '') {

    a = a.toUpperCase();
    if(a == '') return "ERROR: CANNOT ALLITERATE";

    const regexAlliteration = /\b[A-Z]/g;
    const regexWords = /\w+/g;
    const words = a.match(regexWords);
    if(words.length == 1) return "ERROR: NOT ENOUGH TO ALLITERATE";
    
    const firstLetterMap = new Map();
    const firstLetters = a.match(regexAlliteration);
    firstLetters.forEach(letter => {

        if(firstLetterMap.has(letter)){
            firstLetterMap.set(letter, firstLetterMap.get(letter) + 1);
        } else {
            firstLetterMap.set(letter, 1);
        }
    });
    if(words.length == 2){

        firstLetterMap.forEach( count, key =>{
            if(count == 2) return `${key}: ${count}`
        })
        return "NO ALLITERATION"
    }
    else {
        let output = "NO ALLITERATION"  
        firstLetterMap.forEach( count, key =>{
            if(count == 3) output+= `${key}: ${count} \n`
        })
        return output;
    }
}
function getSelectedWord(input) {
    const inputValue = input.value;
    const inputStartIndex = input.selectionStart;
    const inputEndIndex = input.selectionEnd;
    let startIdx = inputStartIndex;
    let endIdx = inputEndIndex;
    // Find the start index of the selected word
    while (startIdx > 0 && inputValue[startIdx - 1] !== ' ') {
        startIdx--;
    }
    // Find the end index of the selected word
    while (endIdx < inputValue.length && inputValue[endIdx] !== ' ') {
        endIdx++;
    }
    // Construct the selected word by extracting the substring from start to end index
    const selectedWord = inputValue.substring(startIdx, endIdx).trim();
    return selectedWord;
}