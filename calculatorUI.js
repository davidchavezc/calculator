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
  screenText.textContent = content;
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

drawGrid();
labelButtons();