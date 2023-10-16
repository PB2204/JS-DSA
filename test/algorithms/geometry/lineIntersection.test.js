const LineIntersection = require('../../../algorithms/geometry/lineIntersection');

describe('LineIntersection', () => {
    it('should find intersection points of lines', () => {
        const lines = [
            { x1: 0, y1: 0, x2: 2, y2: 2 },
            { x1: 1, y1: 0, x2: 1, y2: 3 },
            { x1: 2, y1: 0, x2: 2, y2: 2 },
            { x1: 3, y1: 0, x2: 3, y2: 3 },
        ];

        const intersections = LineIntersection.findIntersections(lines);

        expect(intersections).toEqual([{ x: 1, y: 1 }, { x: 2, y: 2 }]);
    });

    it('should handle parallel lines', () => {
        const lines = [
            { x1: 0, y1: 0, x2: 2, y2: 2 },
            { x1: 0, y1: 1, x2: 2, y2: 3 },
        ];

        const intersections = LineIntersection.findIntersections(lines);

        expect(intersections).toEqual([]);
    });

    it('should handle lines that do not intersect', () => {
        const lines = [
            { x1: 0, y1: 0, x2: 1, y2: 1 },
            { x1: 2, y1: 2, x2: 3, y2: 3 },
        ];

        const intersections = LineIntersection.findIntersections(lines);

        expect(intersections).toEqual([]);
    });
});
