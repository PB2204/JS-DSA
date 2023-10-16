class GCD {
    static findGCD(a, b) {
        if (b === 0) {
            return a;
        }
        return this.findGCD(b, a % b);
    }

    static findLCM(a, b) {
        // Calculate the least common multiple (LCM) using the GCD
        return (a * b) / this.findGCD(a, b);
    }

    static findGCDOfArray(numbers) {
        if (numbers.length < 2) {
            throw new Error('At least two numbers are required to find the GCD.');
        }
        let result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result = this.findGCD(result, numbers[i]);
        }
        return result;
    }
}

module.exports = GCD;
