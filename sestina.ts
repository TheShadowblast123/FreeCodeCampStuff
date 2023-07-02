var lines = document.getElementById("stanza").querySelectorAll('input');
var endWords = ['', '', '', '', '', ''];
endWords.forEach(n => {
    n = ' ';
});
function line(i: number): void{ 
    const temp1 = lines[i].value.trim()
    const temp2 = temp1.split(" ")
    endWords[i] = temp2[temp2.length -1];
}
function Copy() {
    let tempEnd = endWords
    let output = '';
    lines.forEach(line => {
        output += line.value + '\n';
    });
    output += '\n' + 'Continuation' + '\n\n'
    for (let i = 0; i < lines.length - 1; i++){
        const next_order = [tempEnd[5], tempEnd[0], tempEnd[4], tempEnd[1], tempEnd[3], tempEnd[2]]
        for (let x = 0; x < lines.length; x++)
            output += next_order[x] + '\t'
        output += '\n\n'
        tempEnd = next_order
    }
    output += 'Envoi' + '\n\n'
            + endWords[1] + '\t' + endWords[4] + '\n'
            + endWords[3] + '\t' + endWords[2] + '\n'
            + endWords[0] + '\t' + endWords[5]
    const copyArea = document.getElementById("copy") as HTMLTextAreaElement;
    copyArea.value = output;
    copyArea.style.height = 'auto';
    copyArea.style.height = copyArea.scrollHeight + 'px';

    copyArea.readOnly = true;


}