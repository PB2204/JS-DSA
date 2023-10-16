class LineIntersection {
    static findIntersections(lines) {
        const intersections = [];

        for (let i = 0; i < lines.length; i++) {
            for (let j = i + 1; j < lines.length; j++) {
                const intersection = LineIntersection.findLineIntersection(lines[i], lines[j]);
                if (intersection) {
                    intersections.push(intersection);
                }
            }
        }

        return intersections;
    }

    static findLineIntersection(line1, line2) {
        const { x1: x1, y1: y1, x2: x2, y2: y2 } = line1;
        const { x1: x3, y1: y3, x2: x4, y2: y4 } = line2;

        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (denominator === 0) {
            return null; // Lines are parallel
        }

        const px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
        const py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

        if (px < Math.min(x1, x2) || px > Math.max(x1, x2) || px < Math.min(x3, x4) || px > Math.max(x3, x4)) {
            return null; // Intersection is not within the line segments
        }

        return { x: px, y: py };
    }
}

module.exports = LineIntersection;
