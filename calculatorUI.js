const calculatorGrid = document.querySelector("#calculatorGrid");
const GRID_SIZE = 4;

function drawGrid(gridSize) {
  for (let i = 1; i <= gridSize ** 2; i++) {
    const button = document.createElement('button');
    button.classList.add('calcButton');
    calculatorGrid.appendChild(button);
  }
  const buttons = document.querySelectorAll(".calcButton");
  buttons.forEach(button => {
    button.style.flex = `1 0 calc((100% / ${gridSize}) - 0.5em)`;
    button.style.height = `calc((100% / ${gridSize}) - 0.5em)`;
  });
}

const screenText = document.querySelector(".screenText");

function appendToScreen(text) {
  screenText.textContent += text;
}

function clearScreen() {
  screenText.textContent = "";
}

function labelButtons() {
  const buttons = document.querySelectorAll(".calcButton");
  let number = 0;
  buttons.forEach((button, index) => {
    switch (index) {
      case 1:
        button.textContent = "CE";
        button.addEventListener('click', clearScreen);
        break;
      case 2:
        button.textContent = "/";
        break;
      case 3:
        button.textContent = "x";
        break;
      case 7:
        button.textContent = "-";
        break;
      case 11:
        button.textContent = "+";
        break;
      case 15:
        button.textContent = "=";
        break;
      default:
        button.textContent = number;
        number++;
        button.addEventListener('click', function () {
          appendToScreen(this.textContent);
        });
    }
  });
}

drawGrid(GRID_SIZE);
labelButtons();