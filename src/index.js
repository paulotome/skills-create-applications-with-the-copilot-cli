/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * Usage: node src/index.js <operation> <number1> <number2>
 * Example: node src/index.js add 10 5
 */

const calculator = require('./calculator');

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error('Usage: node src/index.js <operation> <number1> <number2>');
    console.error('\nSupported Operations:');
    console.error('  - add        : Addition (+)');
    console.error('  - subtract   : Subtraction (-)');
    console.error('  - multiply   : Multiplication (×)');
    console.error('  - divide     : Division (÷)');
    console.error('\nExample: node src/index.js add 10 5');
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: number1 and number2 must be valid numbers');
    process.exit(1);
  }

  try {
    let result;
    let operationSymbol;

    switch (operation) {
      case 'add':
        result = calculator.add(num1, num2);
        operationSymbol = '+';
        break;
      case 'subtract':
        result = calculator.subtract(num1, num2);
        operationSymbol = '-';
        break;
      case 'multiply':
        result = calculator.multiply(num1, num2);
        operationSymbol = '×';
        break;
      case 'divide':
        result = calculator.divide(num1, num2);
        operationSymbol = '÷';
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('\nSupported operations: add, subtract, multiply, divide');
        process.exit(1);
    }

    console.log(`${num1} ${operationSymbol} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
