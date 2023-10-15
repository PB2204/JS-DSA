const Fibonacci = require('../../../algorithms/dynamic-programming/fibonacci');

describe('Fibonacci (OOP)', () => {
    it('should calculate the Fibonacci number for a given n', () => {
        const fibonacci = new Fibonacci();

        // Test some base cases
        expect(fibonacci.calculateFibonacci(0)).toBe(0);
        expect(fibonacci.calculateFibonacci(1)).toBe(1);
        expect(fibonacci.calculateFibonacci(2)).toBe(1);
        expect(fibonacci.calculateFibonacci(3)).toBe(2);
        expect(fibonacci.calculateFibonacci(4)).toBe(3);
        expect(fibonacci.calculateFibonacci(5)).toBe(5);
        expect(fibonacci.calculateFibonacci(6)).toBe(8);
        expect(fibonacci.calculateFibonacci(7)).toBe(13);
        expect(fibonacci.calculateFibonacci(8)).toBe(21);
        expect(fibonacci.calculateFibonacci(9)).toBe(34);

        // Test some additional cases
        expect(fibonacci.calculateFibonacci(10)).toBe(55);
        expect(fibonacci.calculateFibonacci(15)).toBe(610);
        expect(fibonacci.calculateFibonacci(20)).toBe(6765);
        expect(fibonacci.calculateFibonacci(25)).toBe(75025);

        // Test large values
        expect(fibonacci.calculateFibonacci(40)).toBe(102334155);
        expect(fibonacci.calculateFibonacci(50)).toBe(12586269025);
    });
});
