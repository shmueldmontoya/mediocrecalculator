const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let currentOperation = '';

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.textContent === 'C') {
      currentOperation = '';
    } else if (this.textContent === '=') {
      try {
        currentOperation = eval(currentOperation);
      } catch (error) {
        currentOperation = 'Error';
      }
    } else {
      currentOperation += this.textContent;
    }
    display.value = currentOperation;
  });
});