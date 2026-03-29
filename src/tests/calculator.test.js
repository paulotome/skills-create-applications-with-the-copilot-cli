/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for the calculator module covering:
 * - Addition operations
 * - Subtraction operations
 * - Multiplication operations
 * - Division operations
 * - Modulo operations
 * - Power/Exponentiation operations
 * - Square root operations
 * - Edge cases and error handling
 */

const calculator = require('../calculator');

describe('Calculator Module', () => {
  describe('Addition', () => {
    test('should add two positive numbers (2 + 3)', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add two negative numbers (-5 + -3)', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers (10 + -4)', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add zero to a number (5 + 0)', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });

    test('should add zero to zero (0 + 0)', () => {
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should add decimal numbers (2.5 + 1.5)', () => {
      expect(calculator.add(2.5, 1.5)).toBe(4);
    });

    test('should add large numbers', () => {
      expect(calculator.add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers (10 - 4)', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract and get negative result (5 - 10)', () => {
      expect(calculator.subtract(5, 10)).toBe(-5);
    });

    test('should subtract two negative numbers (-5 - -3)', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero from a number (10 - 0)', () => {
      expect(calculator.subtract(10, 0)).toBe(10);
    });

    test('should subtract a number from zero (0 - 5)', () => {
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers (5.5 - 2.3)', () => {
      expect(calculator.subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });

    test('should subtract identical numbers (7 - 7)', () => {
      expect(calculator.subtract(7, 7)).toBe(0);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers (45 * 2)', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero (7 * 0)', () => {
      expect(calculator.multiply(7, 0)).toBe(0);
    });

    test('should multiply two negative numbers (-3 * -4)', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative numbers (6 * -2)', () => {
      expect(calculator.multiply(6, -2)).toBe(-12);
    });

    test('should multiply by one (5 * 1)', () => {
      expect(calculator.multiply(5, 1)).toBe(5);
    });

    test('should multiply decimal numbers (2.5 * 4)', () => {
      expect(calculator.multiply(2.5, 4)).toBe(10);
    });

    test('should multiply large numbers (1000 * 1000)', () => {
      expect(calculator.multiply(1000, 1000)).toBe(1000000);
    });

    test('should multiply fractional numbers (0.5 * 0.5)', () => {
      expect(calculator.multiply(0.5, 0.5)).toBe(0.25);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers (20 / 5)', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide and get decimal result (10 / 4)', () => {
      expect(calculator.divide(10, 4)).toBe(2.5);
    });

    test('should divide two negative numbers (-12 / -3)', () => {
      expect(calculator.divide(-12, -3)).toBe(4);
    });

    test('should divide positive by negative (15 / -3)', () => {
      expect(calculator.divide(15, -3)).toBe(-5);
    });

    test('should divide zero by a number (0 / 5)', () => {
      expect(calculator.divide(0, 5)).toBe(0);
    });

    test('should divide by one (10 / 1)', () => {
      expect(calculator.divide(10, 1)).toBe(10);
    });

    test('should divide decimal numbers (7.5 / 2.5)', () => {
      expect(calculator.divide(7.5, 2.5)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => {
        calculator.divide(0, 0);
      }).toThrow('Cannot divide by zero');
    });

    test('should throw error for negative division by zero', () => {
      expect(() => {
        calculator.divide(-5, 0);
      }).toThrow('Cannot divide by zero');
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very small decimal numbers', () => {
      expect(calculator.add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    test('should handle operations in sequence', () => {
      const result1 = calculator.add(10, 5);
      const result2 = calculator.multiply(result1, 2);
      expect(result2).toBe(30);
    });

    test('should handle chained operations', () => {
      const step1 = calculator.add(2, 3); // 5
      const step2 = calculator.multiply(step1, 2); // 10
      const step3 = calculator.divide(step2, 5); // 2
      expect(step3).toBe(2);
    });

    test('should handle negative zero correctly', () => {
      expect(calculator.subtract(5, 5)).toBe(0);
    });
  });

  describe('Modulo', () => {
    test('should calculate modulo with positive numbers (5 % 2)', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with negative dividend (-5 % 2)', () => {
      expect(calculator.modulo(-5, 2)).toBe(-1);
    });

    test('should calculate modulo with negative divisor (5 % -2)', () => {
      expect(calculator.modulo(5, -2)).toBe(1);
    });

    test('should calculate modulo with both negative (-5 % -2)', () => {
      expect(calculator.modulo(-5, -2)).toBe(-1);
    });

    test('should calculate modulo with zero dividend (0 % 5)', () => {
      expect(calculator.modulo(0, 5)).toBe(0);
    });

    test('should calculate modulo with larger divisor (5 % 10)', () => {
      expect(calculator.modulo(5, 10)).toBe(5);
    });

    test('should calculate modulo with decimal numbers (7.5 % 2.5)', () => {
      expect(calculator.modulo(7.5, 2.5)).toBe(0);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => {
        calculator.modulo(10, 0);
      }).toThrow('Cannot perform modulo with zero');
    });

    test('should throw error when both are zero', () => {
      expect(() => {
        calculator.modulo(0, 0);
      }).toThrow('Cannot perform modulo with zero');
    });
  });

  describe('Power/Exponentiation', () => {
    test('should calculate power with positive base and exponent (2 ^ 3)', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with exponent of zero (5 ^ 0)', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should calculate power with base of one (1 ^ 5)', () => {
      expect(calculator.power(1, 5)).toBe(1);
    });

    test('should calculate power with base of zero (0 ^ 3)', () => {
      expect(calculator.power(0, 3)).toBe(0);
    });

    test('should calculate power with negative exponent (2 ^ -2)', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should calculate power with negative base and even exponent (-2 ^ 4)', () => {
      expect(calculator.power(-2, 4)).toBe(16);
    });

    test('should calculate power with negative base and odd exponent (-2 ^ 3)', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should calculate power with decimal base and exponent (2.5 ^ 2)', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with large exponent (2 ^ 10)', () => {
      expect(calculator.power(2, 10)).toBe(1024);
    });

    test('should calculate fractional exponent (16 ^ 0.5)', () => {
      expect(calculator.power(16, 0.5)).toBe(4);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of perfect square (√16)', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of 1 (√1)', () => {
      expect(calculator.squareRoot(1)).toBe(1);
    });

    test('should calculate square root of 0 (√0)', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root of decimal (√2.25)', () => {
      expect(calculator.squareRoot(2.25)).toBe(1.5);
    });

    test('should calculate square root of large number (√1000000)', () => {
      expect(calculator.squareRoot(1000000)).toBe(1000);
    });

    test('should calculate approximate square root (√2)', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414213562, 5);
    });

    test('should throw error for negative square root (√-4)', () => {
      expect(() => {
        calculator.squareRoot(-4);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative decimal (√-1.5)', () => {
      expect(() => {
        calculator.squareRoot(-1.5);
      }).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative zero', () => {
      expect(() => {
        calculator.squareRoot(-0.0001);
      }).toThrow('Cannot calculate square root of a negative number');
    });
  });
});
