const calculatorGrid = document.querySelector("#calculatorGrid");
const screenText = document.querySelector(".screenText");
var num1, num2;

function drawGrid() {
  for (let i = 1; i <= 16; i++) {
    const button = document.createElement('button');
    button.classList.add('calcButton');
    calculatorGrid.appendChild(button);
  }
  const buttons = document.querySelectorAll(".calcButton");
  buttons.forEach(button => {
    button.style.flex = `1 0 calc(25% - 0.5em)`;
    button.style.height = `calcc(25% - 0.5em )`;
  });
}


function sum(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num1 / num2;
}

function operate(operator, sNum1, sNum2){
  const num1 = parseFloat(sNum1);
  const num2 = parseFloat(sNum2);
  console.log(`${num1} ${num2}`)
  if (operator == "sum"){
    return sum(num1, num2);
  }
  else if(operator == "substract"){
    return substract(num1,num2);
  }
  else if(operator == "multiply"){
    return multiply(num1, num2);
  }
  else if(operator == "divide"){
    return divide(num1, num2);
  }
  else throw new Error('Not a defined operator');
}

function populateScreen(content) {
  screenText.textContent += content;
}

function clearScreen(wipeData = 0) {
  if(wipeData){
    num1 = 0;
    num2 = 0;
  }
  screenText.textContent = "";
}

function labelButtons() {
  const buttons = document.querySelectorAll(".calcButton");
  let operator = "";
  let number = 0;
  let operatorPressed = 0;

  buttons.forEach((button, index) => {
    switch (index) {
      case 1:
        button.textContent = "CE";
        button.addEventListener('click', clearScreen);
        document.addEventListener('keydown', e => {
          if (e.key === "Backspace"){
            clearScreen(1);
          }
        })
        break;
      case 2:
        button.textContent = "/";
        button.addEventListener('click', () => {
          num1 = screenText.textContent;
          operatorPressed = 1;
          operator = "divide";
        });
        break;
      case 3:
        button.textContent = "x";
        button.addEventListener('click', () => {
          num1 = screenText.textContent;
          operatorPressed = 1;
          operator = "multiply";
        });
        break;
      case 7:
        button.textContent = "-";
        button.addEventListener('click', () => {
          num1 = screenText.textContent;
          operatorPressed = 1;
          operator = "substract";
        });
        break;
      case 11:
        button.textContent = "+";
        button.addEventListener('click', () => {
          num1 = screenText.textContent;
          operatorPressed = 1;
          operator = "sum";
        });
        break;
      case 15:
        button.textContent = "=";
        button.addEventListener("click", () => {
          operatorPressed = 1;
          let num2 = screenText.textContent;
          if(!num1 || !num2){
            throw new Error('No two numbers supplied');
          }else{
            let result = operate(operator, num1, num2);
            clearScreen();
            populateScreen(result);
          }
        })
        break;
      default:
        button.textContent = number;
        number++;
        button.addEventListener('click', function () {
          if(operatorPressed){
            clearScreen();
            operatorPressed = 0;
          }
          populateScreen(this.textContent);
        });
    }
  });
}
drawGrid();
labelButtons();