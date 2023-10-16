class ConvexHull {
    static findConvexHull(points) {
        const n = points.length;

        if (n < 3) {
            return points;
        }

        // Find the point with the lowest y-coordinate (and leftmost if tied)
        const startPoint = points.reduce((min, p) => (p.y < min.y || (p.y === min.y && p.x < min.x) ? p : min), points[0]);

        const sortedPoints = points.slice(); // Copy of the original array
        sortedPoints.sort((a, b) => {
            const angleA = Math.atan2(a.y - startPoint.y, a.x - startPoint.x);
            const angleB = Math.atan2(b.y - startPoint.y, b.x - startPoint.x);
            if (angleA < angleB) return -1;
            if (angleA > angleB) return 1;
            return a.x - b.x;
        });

        const hull = [startPoint, sortedPoints[0]];

        for (let i = 1; i < n; i++) {
            while (hull.length > 1) {
                const m = hull.length;
                const a = hull[m - 2];
                const b = hull[m - 1];
                const c = sortedPoints[i];

                if (ConvexHull.crossProduct(a, b, c) <= 0) {
                    hull.pop();
                } else {
                    break;
                }
            }
            hull.push(sortedPoints[i]);
        }

        return hull;
    }

    static crossProduct(a, b, c) {
        return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
    }
}

module.exports = ConvexHull;
