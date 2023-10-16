class FastExponentiation {
    static power(base, exponent) {
        if (exponent === 0) {
            return 1;
        } else if (exponent % 2 === 0) {
            const result = this.power(base, exponent / 2);
            return result * result;
        } else {
            return base * this.power(base, exponent - 1);
        }
    }
}

module.exports = FastExponentiation;
