function add(num1, num2) {
      console.log(num1 + num2);
}

function subtract(num1, num2) {
      console.log(num1 - num2);
}

function multiply(num1, num2) {
      console.log(num1 * num2);
}

function divide(num1, num2) {
      console.log(num1 / num2);
}

function operate(operator, num1, num2) {
      let choixOperator = operator;
      let firstNbr = num1;
      let secondNbr = num2;

      switch (choixOperator) {
            case '+':
                  add(firstNbr, secondNbr);
                  break;
            case '-':
                  subtract(firstNbr, secondNbr);
                  break;
            case '*':
                  multiply(firstNbr, secondNbr);
                  break;
            case '/':
                  divide(firstNbr, secondNbr);
                  break;
      }
}


function getNumber() {
      let digits = document.querySelector(".digits").childNodes;
      console.log(digits);
      digits.forEach(nbr => {
            if (nbr.innerText !== undefined) {
                  nbr.addEventListener('click', populateScreen);
            }
      });
}

function getOperator() {
      let operators = document.querySelector(".operators").childNodes;
      console.log(operators);
      operators.forEach(op => {
            if (op.innerText !== undefined) {
                  op.addEventListener('click', (e) => {
                        let operator = e.target.innerText;
                        console.log(operator);
                        if (operator !== "=") {
                              saveValue();
                              populateScreen(e);
                        };

                  });
            }
      });
}
let screen = document.querySelector(".operation");

function populateScreen(e) {
      screen.innerText += e.target.innerText;
      console.log(screen.innerText);

}

function saveValue() {
      let num1 = screen.innerText;
      console.log(num1);

      return num1;
}