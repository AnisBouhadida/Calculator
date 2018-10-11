//Arrays declaration :
let values = [];
let op = [];

//Basic math functions : 
function add(num1, num2) {
      return result = num1 + num2;
}

function subtract(num1, num2) {
      return result = num1 - num2;
}

function multiply(num1, num2) {
      return result = num1 * num2;
}

function divide(num1, num2) {
      return result = (num2 == 0) ? "can't divid by 0" : num1 / num2;
}

//Operating function : 
function operate(operator, num1, num2) {

      switch (operator) {
            case '+':
                  add(num1, num2);
                  break;
            case '-':
                  subtract(num1, num2);
                  break;
            case '*':
                  multiply(num1, num2);
                  break;
            case '/':
                  divide(num1, num2);
                  break;
      }
      return result;
}

//Get values from digit buttons : 
function getNumber() {
      let digits = document.querySelector(".digits").childNodes;
      digits.forEach(digit => {
            if (digit.innerText !== undefined) {
                  digit.addEventListener('click', (e) => {
                        populateInput(e);
                  });
            }
      });
}


//Get values from operator buttons : 
function getOperator() {
      let operators = document.querySelector(".operators").childNodes;
      operators.forEach(operator => {
            if (operator.innerText !== undefined) {
                  operator.addEventListener('click', (e) => {
                        if (e.target.innerText === "+" || e.target.innerText === "-") {
                              values.push(displayValue);
                              op.push(e.target.innerText);
                              input.innerText = "";
                        } else if (e.target.innerText === "*" || e.target.innerText === "/") {
                              populateInput(e);
                        } else {
                              values.push(displayValue);
                              evaluateSubFormule();
                              populateOutput();
                        }
                  });
            }
      });
}

//
function evaluateSubFormule() {
      for (let i = 0; i < values.length; i++) {
            if (values[i].includes("*") || values[i].includes("/")) {
                  let index = i;
                  let evaluate = eval(values[index]);
                  values.splice(index, 1, evaluate);
            }
      }
}

//Screen related functions :
let input = document.querySelector(".input");
let output = document.querySelector(".output");

function populateInput(e) {
      input.innerText += e.target.innerText;
      return displayValue = input.innerText;
}

function populateOutput() {
      for (let j = 0; j < op.length; j++) {
            let subResult = operate(op[j], parseFloat(values[0]), parseFloat(values[1]));
            values.splice(0, 2, subResult);
      }
      output.innerText += values.toString();
}

function clearScreen() {
      let clear = document.querySelector(".options").childNodes;
      clear.forEach(btn => {
            if (btn.innerText !== undefined) {
                  btn.addEventListener('click', () => {
                        input.innerText = "";
                        output.innerText = "";
                        values.splice(0, values.length);
                        op.splice(0, op.length);
                  });
            }
      })
}

//init : 
getNumber();
getOperator();
clearScreen();