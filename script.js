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
const orderedInputs = document.el;
const editToggle = document.getElementById('editToggle');
const lineToggle = document.getElementById('lineToggle');

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
function DownloadPantoum() {
  const lines = document.querySelectorAll('.line');
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
  const lines = document.querySelectorAll('.line');
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
function lineEnd() {
  const firstLineEnd = document.getElementById('firstLineEnd');
  const endLines = document.getElementsByClassName('end');

  function lineEnd() {
    if (firstLineEnd.checked) {
      endLines[0].className = "line_3 line end";
      endLines[1].className = "line_1 line end";
  
      removeEventListeners(inputPairs[0]);
      removeEventListeners(inputPairs[2]);
      assignEventListeners(inputPairs[0]);
      assignEventListeners(inputPairs[2]);
    } else {
      endLines[1].className = "line_3 line end";
      endLines[0].className = "line_1 line end";
  
      removeEventListeners(inputPairs[1]);
      removeEventListeners(inputPairs[3]);
      assignEventListeners(inputPairs[1]);
      assignEventListeners(inputPairs[3]);
    }
  }
  
  function removeEventListeners(pair) {
    const { class: className } = pair;
    const inputs = document.querySelectorAll(`.${className}`);
  
    inputs.forEach(input => {
      const clonedInput = input.cloneNode(true);
      input.parentNode.replaceChild(clonedInput, input);
    });
  }
  
  function assignEventListeners(pair) {
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
  }
}
