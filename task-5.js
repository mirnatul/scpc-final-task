function calculator(num1, num2, operator) {
    if (operator === "+") {
        console.log(num1 + num2);
    }
    if (operator === "-") {
        console.log(num1 - num2);
    }
    if (operator === "*") {
        console.log(num1 * num2);
    }
    if (operator === "/") {
        console.log(num1 / num2);
    }
}

calculator(2, 3, "*")