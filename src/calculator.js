/**
 * Calculator Module
 * 
 * Supports the following arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * - Modulo (%)
 * - Power/Exponentiation (^)
 * - Square Root (√)
 */

/**
 * Adds two numbers
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides two numbers
 * @param {number} a - First operand (dividend)
 * @param {number} b - Second operand (divisor)
 * @returns {number} Quotient of a and b
 * @throws {Error} When attempting to divide by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

/**
 * Returns the remainder of division
 * @param {number} a - First operand (dividend)
 * @param {number} b - Second operand (divisor)
 * @returns {number} Remainder of a divided by b
 * @throws {Error} When attempting modulo with zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero');
  }
  return a % b;
}

/**
 * Raises a base to a given exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Result of base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number
 * @param {number} n - The number to calculate the square root of
 * @returns {number} Square root of n
 * @throws {Error} When attempting to calculate square root of a negative number
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};
