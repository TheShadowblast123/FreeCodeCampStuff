var _lines = [];
var variableLineCount = false;
var lineToggle = document.getElementById("lineToggle");
var EditArea = document.getElementById("EditArea");
var poemType = document.firstElementChild.id;
var rhymeGroups;
var synonymGroups;
async function loadJSONData() {
  try {
   
    const response = await fetch('data.json'); // Fetch the JSON file
    data = await response.json();
	rhymeGroups = data.rhymes;
    synonymGroups = data.synonyms;
    
  } catch (error) {
    console.error('Error loading JSON data:', error);
  }
}

loadJSONData();  
for(let i = 0; i < 16; i++){
    _lines[i] = ' '
}
var inputs = [];
Array.from(document.querySelectorAll("#stanza input")).forEach((input) => {
    inputs.push(input);
});
function CreatePoem(showsLineCount) {
    var count = 1;
    var s = '';
    if(showsLineCount){
        _lines.forEach(function (line) {
            if(count < 3){
                s += '\t' + line + ' \n';
            }
            else
                s += count + ' ' + line + ' \n';
            count++;
        });
    }
    else {
        for (line of _lines) {
            if(count < 3){
                s += '\t' + line + ' \n';
            }
            else
                s += line + ' \n';
            count++;
        };
    }
    return s;
}
function handleChange(inputElement) {
    
	hidePopup();
    const inputValue = inputElement.value.trim();
    const lines = document.querySelectorAll('.line');
    let i = 0;
    lines.forEach(line => {
        _lines[i] = line.value;
        i++;
    });
    const syllableCount = CountSentenceSyllables(inputValue);
    const syllableCountElement = inputElement.nextElementSibling;
  
    if (syllableCountElement.classList.contains('syllable-count')) {
        syllableCountElement.textContent = `(${syllableCount} syllables)`;
    }
}
function DownloadFile() {
    inputs = document.getElementById("stanza").querySelectorAll('input');
    var output = CreatePoem(lineToggle.checked);

    var link = document.createElement("a");
    var file = new Blob([output], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    if (_lines[0].value = '')
        link.download = "".concat(poemType, " draft.txt");
    else
        link.download = "".concat(_lines[0].value, ".txt");
    link.click();
    URL.revokeObjectURL(link.href);
}
function ToEditor() {

    EditArea.value = CreatePoem(lineToggle.checked);
    EditArea.style.height = 'auto';
    EditArea.style.height = EditArea.scrollHeight + 'px';
    EditArea.readOnly = true;
}
function CountWordSyllables(w = ''){

    w = w.toLowerCase();
    //Handle exceptions
    const twoSyllable = ['coapt','coed','coinci', 'colonel', 'cafe', 'scotia'];
    if(w.length <= 3 || w == 'preach' || w == 'preyed')
        return 1;
    if(twoSyllable.includes(w))
        return 2;
    if(w == 'serious'|| w == "worcestershire"|| w == "alias"|| w == 'acacia')
        return 3;
    if(w == 'epitome'|| w == 'hyperbole')
        return 4;

    const regex = [/[aeiouy]{1,}/g, /^(?:mc)/, /^(?:tri)[aeiouy]/,
                   /^(?:bi)[aeiouy]/, /^(?:pre)[aeiouy]/, /[^tc](?:ian)$/,
                    /[aeiou][^aeiouy]e$/,/[aeiou][^aeiouy]es$/, /i[ao]$/, /[aeiouy]ing$/];
    
    //base case
    const holdVowels = w.match(regex[0]); //count vowel groups
    let count = holdVowels ? holdVowels.length: 0;
    if(count == 0) return 0;
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
function CountSentenceSyllables(s ='') {

    const wordsOnly = /\S+/g;
    const hold = s.match(wordsOnly)
    let sum = 0;
    if(hold)
        hold.forEach(word => {
            sum += CountWordSyllables(word);
        });
    return sum;
}

function getSelectedWord(input) {
	
    const inputValue = input.value;
    const inputStartIndex = input.selectionStart;
    const inputEndIndex = input.selectionEnd -1;
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
    return selectedWord.toLowerCase();
}
function getSynonym(word) {
	
	for(group of synonymGroups) {
		if(group.includes(word))
			return group;
	}
	return null;
}
function showPopup(input) {
	
    const selectedWord = getSelectedWord(input);
    const synonyms = getSynonym(selectedWord);
	const rhymes = findRhymeGroup(selectedWord);

    if (!selectedWord) {
        hidePopup();
        return;
    }

    hidePopup();

    const popup = document.createElement("div");
    popup.classList.add("popup");

    // Create the content for the pop-up with selected word, rhymes, and synonyms
    const content = document.createElement("div");
    content.classList.add("popup-content");

    const selectedWordElement = document.createElement("p");
    selectedWordElement.textContent = `Selected Word: ${selectedWord}, ${CountWordSyllables(selectedWord)}, syllables`;
	if(synonyms){
		const synonymsElement = document.createElement("p");
		synonymsElement.textContent = `Synonyms: ${synonyms.join(", ")}`;
		content.appendChild(synonymsElement);
	}
	if(typeof rhymes != "string"){
		const rhymesElement = document.createElement("p");
		rhymesElement.textContent = `Rhymes: ${rhymes.join(", ")}`;
		content.appendChild(rhymesElement);
	}
	
	content.appendChild(selectedWordElement);
	popup.appendChild(content);

    input.parentNode.appendChild(popup);

    const inputRect = input.getBoundingClientRect();
    const popupRect = popup.getBoundingClientRect();

    const top = inputRect.top - popupRect.height - 10;
    const left = inputRect.left + inputRect.width / 2 - popupRect.width / 2;

    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;

    document.addEventListener("click", hidePopup);

    // Clean up the event listener when the pop-up is removed
    popup.addEventListener("DOMNodeRemoved", () => {
        document.removeEventListener("click", hidePopup(event));
    });
}
function hidePopup(event) {
    const existingPopup = document.querySelector(".popup");
    if (existingPopup && (!event || (event.target !== existingPopup && !existingPopup.contains(event.target)))) {
        existingPopup.remove();
    }
}


function findRhymeGroup (word){
    const order = [0,1,2,3,7,4,6,5,9]
    let index = -1;
    answer = []
    let length = 0;
    if(word.length < 9) 
        length = word.length;
    else 
        length = 0;

    for(const group of rhymeGroups[length]){
        const x = group.indexOf(word);
        if(x !== -1){
            if(x === 0){

                answer = group;
                index = 0;
                break;
            }
            if(index == -1 || index > x){

                answer = group;
                index = x
            }
        }
    }
    if(index == 0 || index == 1)
        return answer;
    for(const num in order){
        if(num == length) continue;
        for(const group of rhymeGroups[num]){
            const x = group.indexOf(word);
            if(x !== -1){
                if(x === 1){

                    answer = group;
                    index = 0;  
                    break;
                }
                if(index == -1 || index > x){
    
                    answer = group;
                    index = x
                }
            }
        }
    }
    if(index == -1) 
        return "Didn't find anything";
        
    return answer;
}
function findRhymeAllGroups (word){
    const order = [0,1,2,3,7,4,6,5,9]
    answer = []
    for(const num in order){
        for(const group of rhymeGroups[num]){
            const x = group.indexOf(word);
            if(x !== -1){
                answer.push(group)
            }
        }
    }
    return answer;
}
function doesRhyme(s = '', w = '') {
    sRhymes = findRhymeAllGroups(s);
	if(typeof sRhymes == "string") return "Unknown" 
	for (group of sRhymes){
		if(group.indexOf(w) != -1)//there need to be for loops in here
			return true;
	}
    return "Unknown";
}

document.addEventListener("DOMContentLoaded", () => {

    inputs.forEach((input) => {
        input.addEventListener("select", () => {
            showPopup(input);
        });
    });
});
