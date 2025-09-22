const calculatorGrid = document.querySelector("#calculatorGrid");

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

const screenText = document.querySelector(".screenText");

function populateScreen(content) {
  screenText.textContent += content;
}

function clearScreen() {
  screenText.textContent = "";
}

function labelButtons() {
  const buttons = document.querySelectorAll(".calcButton");
  let operator = "";
  let number = 0;
  let num1 = 0;
  let operatorPressed = 0;
  // const screenText = document.querySelector(".screenText");
  let value = screenText.textContent;
  if(!value){
    console.log('Hello World!')
  }
  buttons.forEach((button, index) => {
    switch (index) {
      case 1:
        button.textContent = "CE";
        button.addEventListener('click', clearScreen);
        document.addEventListener('keydown', e => {
          if (e.key === "Backspace"){
            clearScreen();
          }
        })
        break;
      case 2:
        button.textContent = "/";
        break;
      case 3:
        button.textContent = "x";
        operator = "multiply";
        break;
      case 7:
        button.textContent = "-";
        operator = "substract";
        break;
      case 11:
        button.textContent = "+";
        button.addEventListener('click', () => {
          let value = screenText.textContent;
          num1 = value;
          console.log(num1);
          operatorPressed = 1;
          operator = "sum";
        })
        break;
      case 15:
        button.textContent = "=";
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