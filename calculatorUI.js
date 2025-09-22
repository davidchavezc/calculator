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
    num1 = null;
    num2 = null;
    chain = 0;
  }
  screenText.textContent = "";
}

function labelButtons() {
  const buttons = document.querySelectorAll(".calcButton");
  let operator;
  let labelNumber = 0;
  let clear = 0;
  let chain = 0;


  buttons.forEach((button, index) => {
    switch (index) {
      case 1:
        button.textContent = "CE";
        button.addEventListener('click', () => clearScreen(1));
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
          operator = "divide";
        });
        break;
      case 3:
        button.textContent = "x";
        button.addEventListener('click', () => {
          if(chain){
            console.log('initiated chain for multiplying')
            num2 = screenText.textContent;
            let result = operate(operator, num1, num2);
            clearScreen();
            populateScreen(result);
          }
          num1 = screenText.textContent;
          operator = "multiply";
          clear = 1;
          chain = 1;
        });
        break;
      case 7:
        button.textContent = "-";
        button.addEventListener('click', () => {
           if(chain){
            console.log('initiated chain for minus')
            num2 = screenText.textContent;
            let result = operate(operator, num1, num2);
            clearScreen();
            populateScreen(result);
          }
          num1 = screenText.textContent;
          operator = "substract";
          clear = 1;
          chain = 1;
        });
        break;
      case 11:
        button.textContent = "+";
        button.addEventListener('click', () => {
          if(chain){
            console.log('initiated chain for sum')
            num2 = screenText.textContent;
            let result = operate(operator, num1, num2);
            clearScreen(1);
            // clearScreen();
            populateScreen(result);
          }
          num1 = screenText.textContent;
          operator = "sum";
          clear = 1;
          chain = 1;
        });
        break;
      case 15:
        button.textContent = "=";
        button.addEventListener("click", () => {
          num2 = screenText.textContent;
          let result = operate(operator, num1, num2);
          clearScreen();
          populateScreen(result);
          clear = 1;
          chain = 0;
        })
        break;
      default:
        button.textContent = labelNumber;
        labelNumber++;
        button.addEventListener('click', function () {
          if(clear){
            clearScreen();
            console.log('cleared')
            clear = 0;
            populateScreen(this.textContent);
          }else{
            populateScreen(this.textContent);
          }
        });
    }
  });
}
drawGrid();
labelButtons();