class PrimalityTesting {
    static isPrime(number, iterations = 5) {
        if (number <= 1) {
            return false;
        }
        if (number <= 3) {
            return true;
        }
        if (number % 2 === 0) {
            return false;
        }

        const [s, d] = this.factorizeNumber(number - 1);

        for (let i = 0; i < iterations; i++) {
            const witness = this.getRandomWitness(2, number - 2);
            let x = this.modularExponentiation(witness, d, number);

            if (x === 1 || x === number - 1) {
                continue;
            }

            let j;
            for (j = 0; j < s - 1; j++) {
                x = this.modularExponentiation(x, 2, number);
                if (x === 1) {
                    return false;
                }
                if (x === number - 1) {
                    break;
                }
            }

            if (j === s - 1) {
                return false;
            }
        }

        return true;
    }

    static factorizeNumber(number) {
        let s = 0;
        let d = number;
        while (d % 2 === 0) {
            d /= 2;
            s++;
        }
        return [s, d];
    }

    static getRandomWitness(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static modularExponentiation(base, exponent, modulus) {
        if (exponent === 0) {
            return 1;
        }
        let result = 1;
        base = base % modulus;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % modulus;
            }
            exponent = Math.floor(exponent / 2);
            base = (base * base) % modulus;
        }
        return result;
    }
}

module.exports = PrimalityTesting;
