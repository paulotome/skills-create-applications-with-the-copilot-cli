/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for the calculator module covering:
 * - Addition operations
 * - Subtraction operations
 * - Multiplication operations
 * - Division operations
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
});
