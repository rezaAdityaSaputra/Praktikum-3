const kalkulator = (operator, ...operands) => {
    let hasil = operands[0];
  
    switch (operator) {
      case "+":
        operands.slice(1).forEach(operand => hasil += operand);
        break;
      case "-":
        operands.slice(1).forEach(operand => hasil -= operand);
        break;
      case "*":
        operands.slice(1).forEach(operand => hasil *= operand);
        break;
      case "/":
        operands.slice(1).forEach(operand => hasil /= operand);
        break;
      case "%":
        operands.slice(1).forEach(operand => hasil %= operand);
        break;
      default:
        return "Invalid";
    }
  
    return hasil;
  }

  console.log(kalkulator("+", 5, 3, 8)); 
  console.log(kalkulator("-", 10, 2, 3));
  console.log(kalkulator("*", 2, 3, 4)); 
  console.log(kalkulator("/", 20, 4, 2)); 
  console.log(kalkulator("%", 7, 4)); 
  console.log(kalkulator("&", 5, 3)); 
  