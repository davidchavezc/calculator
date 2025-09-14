const calculatorGrid = document.querySelector("#calculatorGrid");
const size = 4;

function drawGrid(size){
  for(i=1; size**2 >= i; i++){
    // console.log("Grid drawn")
    const calculatorButton = document.createElement('button');
    calculatorButton.classList.add('calcButton');
    calculatorGrid.appendChild(calculatorButton);
  }
  const calcButton = document.querySelectorAll(".calcButton");
  calcButton.forEach(calcButton => {
    calcButton.style.flex = `1 0 calc(100% / ${size})`;
    calcButton.style.height = `calc(100% / ${size})`;
  });
}

function fillButtons(){
  const gridButtons = document.querySelectorAll(".calcButton");
  gridButtons[0].textContent = "Hello world!";
  }
  drawGrid(size);
  fillButtons();