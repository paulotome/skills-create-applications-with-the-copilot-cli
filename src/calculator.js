/**
 * Calculator Module
 * 
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
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

module.exports = {
  add,
  subtract,
  multiply,
  divide
};
