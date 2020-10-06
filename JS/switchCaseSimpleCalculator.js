let num1 = 3
let num2 = 6
let num3 = "";

switch (operator){
  case "+":
    num3 = num1 + num2;
    break;
  case "-":
    num3 = num1 - num2;
    break;
  case "/":
    num3 = num1 / num2;
    break;
  case "*":
    num3 = num1 * num2;
    break;
  default:
    num3 = "N/A";
    break;
}

Alert(num3);
