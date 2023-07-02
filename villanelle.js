var lines = document.getElementById("stanza").querySelectorAll('input');
var endWords = ['', '', ''];
endWords.forEach(function (n) {
    n = ' ';
});
function line(i) {
    var temp = lines[i].value.trim().split(" ");
    endWords[i] = temp[temp.length - 1];
}
function Copy() {
    //A1 b A2 / a b A1 / a b A2 / a b A1 / a b A2 / a b A1 A2
    var tempEnd = endWords;
    var output = '';
    lines.forEach(function (line) {
        output += line.value + '\n';
    });
    output += '\n';
    for (var i = 0; i < 3; i++) {
        output += endWords[0] + '\n' + endWords[1] + '\n';
        if (i % 2 != 0)
            output += lines[0].value + '\n\n';
        else
            output += lines[2].value + '\n\n';
    }
    output += endWords[0] + '\n' + endWords[1] + '\n' +
        lines[0].value + '\n' + lines[2].value + '\n\n';
    var copyArea = document.getElementById("copy");
    copyArea.value = output;
    copyArea.style.height = 'auto';
    copyArea.style.height = copyArea.scrollHeight + 'px';
}
