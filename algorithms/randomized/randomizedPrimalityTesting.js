class RandomizedPrimalityTesting {
    isPrime(n, k) {
        if (n <= 1n) {
            return false;
        }
        if (n <= 3n) {
            return true;
        }

        // Witness loop
        for (let i = 0; i < k; i++) {
            const a = 2n + BigInt(Math.floor(Math.random() * (Number(n) - 4)));
            if (this.witness(a, n)) {
                return false;
            }
        }

        return true;
    }

    // Helper function to check if 'a' is a witness for 'n' being composite
    witness(a, n) {
        let t = n - 1n;
        let u = 0n;

        while (t % 2n === 0n) {
            t /= 2n;
            u++;
        }

        let x0 = a ** t % n;
        for (let i = 0n; i < u; i++) {
            const x1 = (x0 * x0) % n;
            if (x1 === 1n && x0 !== 1n && x0 !== n - 1n) {
                return true; // 'a' is a witness to compositeness
            }
            x0 = x1;
        }

        if (x0 !== 1n) {
            return true; // 'a' is not a witness
        }

        return false; // 'a' is not a witness
    }
}

module.exports = RandomizedPrimalityTesting;
