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
let thirdLineFirstStanza = '';
let firstLineFirstStanza = '';
let stanzaCount = 4;// [2,4][3,6][4,8][5,10][6,12][7,14][8,16] lines = 2 * stanzaCount
const orderedInputs = document.el;
const editToggle = document.getElementById('editToggle');
const lineToggle = document.getElementById('lineToggle');
const firstLineEnd = document.getElementById('firstLineEnd');
const decrementer = document.getElementById('decrement');
const incrementer = document.getElementById('increment');
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
const stanzaCountElement = document.getElementById('stanzas')
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
    
    if (count < 2){
       output += "\t" + line.value + '\n';
    }
    else  {
      if((count + 2) % 4 == 0) output += '\n';
      if(lineToggle.checked){

        output += (count - 1) + "\t" + line.value + '\n';
      } else output += "\t" + line.value + '\n';
    }
      count++;
    
  });
  const copyArea = document.getElementById("copyPantoum");
  copyArea.value = output;
  copyArea.style.height = 'auto';
  copyArea.style.height = copyArea.scrollHeight + 'px';
  if(editToggle.checked)   copyArea.readOnly = false;
  else copyArea.readOnly = true;

}
function incrementStanza() {
  console.log("incrementing")
  if(stanzaCount < 8){
    stanzaCount++;
    stanzaCountElement.value = stanzaCount;
    decrementer.disabled = false;
    funky();
  }
  if(stanzaCount == 8) incrementer.disabled = true;
  
}
function decrementStanza() {
  if(stanzaCount > 2){
    stanzaCount--;
    stanzaCountElement.value = stanzaCount;
    incrementer.disabled = false;
    funky()
  } 
  if(stanzaCount == 2) decrementer.disabled = true;
  
  
}

function funky() {
  
  console.log(stanzaCount);

}
/*Needed functionality

  add/remove stanzas maybe
  ending with first or third line
  */