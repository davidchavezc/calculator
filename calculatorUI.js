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
  let i = 0;
  gridButtons.forEach((button, index) => {
    // if(index >= 0 && index <= 1) {
    //   button.textContent = "";
    // }
    switch (index) {
      case 1:
        button.textContent = "CE";
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
        button.textContent = "="
        break;
      default:
        button.textContent = i;
        i++;
        break;
  }})}
  drawGrid(size);
  fillButtons();