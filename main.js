// basic math functions : 
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

// operating function : 
function operate(num1, operator, num2) {

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

// Values from digit buttons : 
function getNumber() {
      let digits = document.querySelector(".digits").childNodes;
      console.log(digits);
      digits.forEach(digit => {
            if (digit.innerText !== undefined) {
                  console.log(digit.innerText);
                  let numbers = [];
                  digit.addEventListener('click', (e) => {
                        numbers.push(digit.innerText);
                        populateScreen(e);
                  });
            }
      });
}

// Values from operator buttons : 
function getOperator() {
      let operators = document.querySelector(".operators").childNodes;
      console.log(operators);
      operators.forEach(operator => {
            if (operator.innerText !== undefined) {
                  console.log(operator.innerText);
                  let op = [];
                  operator.addEventListener('click', (e) => {
                        if (operator.innerText !== "=") {
                              op.push(operator.innerText);
                              populateScreen(e);
                        } else {
                              calcul();
                        }
                  });
            }
      });
}

// Values from option buttons : 

function getOption() {
      let options = document.querySelector(".options").childNodes;
      console.log(options);
      options.forEach(option => {
            if (option.innerText !== undefined) {
                  console.log(option.innerText);
                  option.addEventListener('click', () => {
                        switch (option.innerText) {
                              case "Del":
                                    deleteNumber();
                                    break;
                              case "AC":
                                    clearScreen();
                                    break;
                        }
                  });
            }
      });
}

// screen :
let input = document.querySelector(".input");
let output = document.querySelector(".output");

function populateScreen(e) {
      input.innerText += e.target.innerText;
      console.log("valeur de l'input : " + input.innerText);
      return inputValue = input.innerText;
}

function clearScreen() {
      let clear = document.querySelector(".options").childNodes;
      clear.forEach(btn => {
            if (btn.innerText !== undefined) {
                  btn.addEventListener('click', () => {
                        input.innerText = "";
                        output.innerText = "";
                  });
            }
      })
}

function deleteNumber() {

      let inputList = Array.from(inputValue);
      inputList.pop();
      input.innerText = inputList.join("");
}

// calculator : 
function calcul() {
      /([0-9\.]+)([+*/-])([0-9\.]+)/g.exec(inputValue);
      output.innerText += operate(parseFloat(RegExp.$1), RegExp.$2, parseFloat(RegExp.$3));
}

// init : 
getNumber();
getOperator();
getOption();