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
const firstLineEnd = document.getElementById('firstLineEnd');

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
  if(lines[0].value = '')
    link.download = "Pantoum Draft.txt";
  else
    link.download = `${lines[0].value}.txt`;
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
  const endLines = document.getElementsByClassName('end');
  
  if (firstLineEnd.checked) {
    // Remove old event listeners from the affected elements
    removeEventListeners(inputPairs[0]);
    removeEventListeners(inputPairs[2]);

    // Assign new event listeners to the affected elements
    assignEventListeners(inputPairs[0]);
    assignEventListeners(inputPairs[2]);

    endLines[0].className = "line_3 line end";
    endLines[1].className = "line_1 line end";
  } else {
    // Remove old event listeners from the affected elements
    removeEventListeners(inputPairs[0]);
    removeEventListeners(inputPairs[2]);

    // Assign new event listeners to the affected elements
    assignEventListeners(inputPairs[0]);
    assignEventListeners(inputPairs[2]);

    endLines[1].className = "line_3 line end";
    endLines[0].className = "line_1 line end";
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