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