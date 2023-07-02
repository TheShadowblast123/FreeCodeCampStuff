var lines = document.getElementById("stanza").querySelectorAll('input');
var endWords = ['', '', '', '', '', ''];
endWords.forEach(function (n) {
    n = ' ';
});
function line(i) {
    var temp1 = lines[i].value.trim();
    var temp2 = temp1.split(" ");
    endWords[i] = temp2[temp2.length - 1];
}
function Copy() {
    var tempEnd = endWords;
    var output = '';
    lines.forEach(function (line) {
        output += line.value + '\n';
    });
    output += '\n' + 'Continuation' + '\n\n';
    for (var i = 0; i < lines.length - 1; i++) {
        var next_order = [tempEnd[5], tempEnd[0], tempEnd[4], tempEnd[1], tempEnd[3], tempEnd[2]];
        for (var x = 0; x < lines.length; x++)
            output += next_order[x] + '\t';
        output += '\n\n';
        tempEnd = next_order;
    }
    output += 'Envoi' + '\n\n'
        + endWords[1] + '\t' + endWords[4] + '\n'
        + endWords[3] + '\t' + endWords[2] + '\n'
        + endWords[0] + '\t' + endWords[5];
    var copyArea = document.getElementById("copy");
    copyArea.value = output;
    copyArea.style.height = 'auto';
    copyArea.style.height = copyArea.scrollHeight + 'px';
    copyArea.readOnly = true;
}
