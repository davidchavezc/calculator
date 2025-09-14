function sum(num1, num2){
  return num1 + num2;
}

function subtract(num1, num2){
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

function operate(operator, num1, num2){
  if (operator == "sum"){
    sum(num1, num2);
  }
  else if(operator == "substract"){
    substract(num1,num2);
  }
  else if(operator == "multiply"){
    multiply(num1, num2);
  }
  else if(operator == "divide"){
    divide(num1, num2);
  }
  else throw new Error('Not a defined operator');
}