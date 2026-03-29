const calculator = require('./calculator');

function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.error('Usage: node main.js <operation> <num1> <num2>');
    console.error('Operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  const operation = args[0];
  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: num1 and num2 must be valid numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = calculator.add(num1, num2);
        break;
      case 'subtract':
        result = calculator.subtract(num1, num2);
        break;
      case 'multiply':
        result = calculator.multiply(num1, num2);
        break;
      case 'divide':
        result = calculator.divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.error('Operations: add, subtract, multiply, divide');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
