class ClosestPairOfPoints {
    static findClosestPair(points) {
        // Sort the points by x-coordinate
        const sortedPoints = [...points];
        sortedPoints.sort((a, b) => a.x - b.x);

        // Find the closest pair recursively
        const { minDistance, closestPair } = ClosestPairOfPoints.closestPairRecursive(sortedPoints);

        return closestPair;
    }

    static closestPairRecursive(sortedPoints) {
        const n = sortedPoints.length;

        if (n <= 3) {
            return ClosestPairOfPoints.bruteForceClosestPair(sortedPoints);
        }

        const mid = Math.floor(n / 2);
        const leftPoints = sortedPoints.slice(0, mid);
        const rightPoints = sortedPoints.slice(mid);

        const leftClosest = ClosestPairOfPoints.closestPairRecursive(leftPoints);
        const rightClosest = ClosestPairOfPoints.closestPairRecursive(rightPoints);

        let closest;
        if (leftClosest.minDistance < rightClosest.minDistance) {
            closest = leftClosest;
        } else {
            closest = rightClosest;
        }

        const strip = [];
        const midX = sortedPoints[mid].x;

        for (let i = 0; i < n; i++) {
            if (Math.abs(sortedPoints[i].x - midX) < closest.minDistance) {
                strip.push(sortedPoints[i]);
            }
        }

        return ClosestPairOfPoints.stripClosestPair(strip, closest);
    }

    static bruteForceClosestPair(points) {
        const n = points.length;
        let minDistance = Number.MAX_VALUE;
        let closestPair = [];

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const distance = ClosestPairOfPoints.distance(points[i], points[j]);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestPair = [points[i], points[j]];
                }
            }
        }

        return { minDistance, closestPair };
    }

    static stripClosestPair(strip, closest) {
        const n = strip.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n && strip[j].y - strip[i].y < closest.minDistance; j++) {
                const distance = ClosestPairOfPoints.distance(strip[i], strip[j]);
                if (distance < closest.minDistance) {
                    closest.minDistance = distance;
                    closest.closestPair = [strip[i], strip[j]];
                }
            }
        }
        return closest;
    }

    static distance(point1, point2) {
        return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
    }
}

module.exports = ClosestPairOfPoints;
