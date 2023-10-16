const ConvexHull = require('../../../algorithms/geometry/convexHull');

describe('ConvexHull', () => {
    it('should find the convex hull for a set of points', () => {
        const points = [
            { x: 0, y: 3 },
            { x: 2, y: 2 },
            { x: 1, y: 1 },
            { x: 2, y: 1 },
            { x: 3, y: 0 },
            { x: 0, y: 0 },
            { x: 3, y: 3 },
        ];

        const hull = ConvexHull.findConvexHull(points);

        expect(hull).toEqual([
            { x: 0, y: 0 },
            { x: 3, y: 0 },
            { x: 3, y: 3 },
            { x: 0, y: 3 },
        ]);
    });

    it('should handle a set of points with collinear points', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 3 },
        ];

        const hull = ConvexHull.findConvexHull(points);

        expect(hull).toEqual([
            { x: 0, y: 0 },
            { x: 3, y: 3 },
        ]);
    });

    it('should handle a set of points with only three non-collinear points', () => {
        const points = [
            { x: 0, y: 0 },
            { x: 3, y: 3 },
        ];

        const hull = ConvexHull.findConvexHull(points);

        expect(hull).toEqual(points);
    });

    it('should handle a set of points with less than three points', () => {
        const points = [{ x: 0, y: 0 }];

        const hull = ConvexHull.findConvexHull(points);

        expect(hull).toEqual(points);
    });
});
