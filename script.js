function calculateResult(num1, operator, num2) {
    let result;

    // 10% chance of giving a faulty result
    const isFaulty = Math.random() < 0.1;

    if (isFaulty) {
        // Generate a random faulty result
        result = Math.floor(Math.random() * 1000);
        console.log('Oops! The calculator is faulty this time.');
    } else {
        // Perform normal calculation
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.error('Invalid operator');
                return;
        }
    }

    return result;
}

// Example usage
const num1 = prompt("enter num1:");
const operator = prompt("enter the operator");
const num2 = prompt("enter num2:");

const result = calculateResult(num1, operator, num2);
console.log(`Result: ${result}`);
