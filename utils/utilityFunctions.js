class UtilityFunctions {
    static sum(arr) {
        return arr.reduce((acc, current) => acc + current, 0);
    }

    static average(arr) {
        if (arr.length === 0) {
            return 0;
        }
        const total = this.sum(arr);
        return total / arr.length;
    }
}

module.exports = UtilityFunctions;
