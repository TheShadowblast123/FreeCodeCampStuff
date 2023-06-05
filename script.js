const inputPairs = [
  { class: 'line_1' },
  { class: 'line_2' },
  { class: 'line_3' },
  { class: 'line_4' },
  { class: 'line_5' },
  { class: 'line_6' },
  { class: 'line_7' },
  { class: 'line_8' },

];
const orderedInputs = document.el

inputPairs.forEach(pair => {
  const { class: className } = pair;
  const inputs = document.querySelectorAll(`.${className}`);

  inputs.forEach(input => {
    input.addEventListener('input', function(event) {
      const newValue = event.target.value;
      inputs.forEach(otherInput => {
        if (otherInput !== event.target) {
          otherInput.value = newValue;
        }
      });
    });
  });
});
const lines = document.querySelectorAll('.line');
const linesArray = Array.from(lines);
function DownloadPantoum() {
 
  let count = 0;
  let output = '';
  lines.forEach(line => {
    if (count < 1) output += count + " " + line.value + '\n';
    else  output += (count - 1) + " " + line.value + '\n';
      count++;
    
  });
  const link = document.createElement("a");
  const file = new Blob([output], {type: 'text/plain'});
  link.href = URL.createObjectURL(file);
  link.download = "Pantoum Draft.txt"
  link.click();
  URL.revokeObjectURL(link.href);
}
function CopyPantoum() {
 
  let count = 0;
  let output = '';
  lines.forEach(line => {
    if (count < 2) output += "\t" + line.value + '\n';
    else  output += (count - 1) + "\t" + line.value + '\n';
      count++;
    
  });
  const copyArea = document.getElementById("copyPantoum");
  copyArea.value = output;
  copyArea.style.height = 'auto';
  copyArea.style.height = copyArea.scrollHeight + 'px';
  copyArea.removeAttribute("readonly");

}
/*Needed functionality
  edit toggle
  add/remove stanzas maybe
  line number toggle
  */