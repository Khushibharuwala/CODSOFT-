let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}



function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let expression = display.value.replace(/\^/g, '**'); // handle power
    display.value = eval(expression);
  } catch (err) {
    display.value = 'Error';
  }
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

function percent() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = 'Error';
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Keyboard input support
document.addEventListener('keydown', function (event) {
  if ((event.key >= '0' && event.key <= '9') || ['+', '-', '*', '/', '.', '^'].includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === 'Enter') {
    calculate();
  } else if (event.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (event.key === 'c' || event.key === 'C') {
    clearDisplay();
  }
});
