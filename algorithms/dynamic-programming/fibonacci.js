class Fibonacci {
    constructor() {
        this.memo = new Map();
    }

    calculateFibonacci(n) {
        if (this.memo.has(n)) {
            return this.memo.get(n);
        }

        if (n <= 0) {
            return 0;
        }

        if (n === 1) {
            return 1;
        }

        const result = this.calculateFibonacci(n - 1) + this.calculateFibonacci(n - 2);
        this.memo.set(n, result);

        return result;
    }
}

module.exports = Fibonacci;
