import Snake from '../src/ts/classes/Snake';
import Food from '../src/ts/classes/Food';
import Direction from '../src/ts/types/Direction';

describe('Snake moving in a direction', () => {
    test('Returns the correct snake position: right 1', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const endPosition = snake._moveSnake(Direction.Right, startPosition);

        const correctEndPosition = [
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [20, 0]},
            {currentPos: [60, 0], previousPos: [40, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: right 2', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Right, startPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);

        const correctEndPosition = [
            {currentPos: [40, 0], previousPos: [20, 0]},
            {currentPos: [60, 0], previousPos: [40, 0]},
            {currentPos: [80, 0], previousPos: [60, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: right 3', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Right, startPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);

        const correctEndPosition = [
            {currentPos: [60, 0], previousPos: [40, 0]},
            {currentPos: [80, 0], previousPos: [60, 0]},
            {currentPos: [100, 0], previousPos: [80, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: right 4', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Right, startPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);

        const correctEndPosition = [
            {currentPos: [80, 0], previousPos: [60, 0]},
            {currentPos: [100, 0], previousPos: [80, 0]},
            {currentPos: [120, 0], previousPos: [100, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: down 1', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 480]},
            {currentPos: [0, 20], previousPos: [0, 0]},
            {currentPos: [0, 40], previousPos: [0, 20]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const endPosition = snake._moveSnake(Direction.Down, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 20], previousPos: [0, 0]},
            {currentPos: [0, 40], previousPos: [0, 20]},
            {currentPos: [0, 60], previousPos: [0, 40]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: down 2', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [0, 20], previousPos: [0, 0]},
            {currentPos: [0, 40], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 40], previousPos: [0, 20]},
            {currentPos: [0, 60], previousPos: [0, 40]},
            {currentPos: [0, 80], previousPos: [0, 60]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: down 3', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [0, 20], previousPos: [0, 0]},
            {currentPos: [0, 40], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 60], previousPos: [0, 40]},
            {currentPos: [0, 80], previousPos: [0, 60]},
            {currentPos: [0, 100], previousPos: [0, 80]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: down 4', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [0, 20], previousPos: [0, 0]},
            {currentPos: [0, 40], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 80], previousPos: [0, 60]},
            {currentPos: [0, 100], previousPos: [0, 80]},
            {currentPos: [0, 120], previousPos: [0, 100]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: left 1', () => {
        const startPosition = [
            {currentPos: [500, 0], previousPos: [0, 0]},
            {currentPos: [480, 0], previousPos: [500, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const endPosition = snake._moveSnake(Direction.Left, startPosition);

        const correctEndPosition = [
            {currentPos: [480, 0], previousPos: [500, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
            {currentPos: [440, 0], previousPos: [460, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: left 2', () => {
        const startPosition = [
            {currentPos: [500, 0], previousPos: [0, 0]},
            {currentPos: [480, 0], previousPos: [500, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);

        const correctEndPosition = [
            {currentPos: [460, 0], previousPos: [480, 0]},
            {currentPos: [440, 0], previousPos: [460, 0]},
            {currentPos: [420, 0], previousPos: [440, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: left 3', () => {
        const startPosition = [
            {currentPos: [500, 0], previousPos: [0, 0]},
            {currentPos: [480, 0], previousPos: [500, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);

        const correctEndPosition = [
            {currentPos: [440, 0], previousPos: [460, 0]},
            {currentPos: [420, 0], previousPos: [440, 0]},
            {currentPos: [400, 0], previousPos: [420, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: left 4', () => {
        const startPosition = [
            {currentPos: [500, 0], previousPos: [0, 0]},
            {currentPos: [480, 0], previousPos: [500, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, startPosition);

        const correctEndPosition = [
            {currentPos: [420, 0], previousPos: [440, 0]},
            {currentPos: [400, 0], previousPos: [420, 0]},
            {currentPos: [380, 0], previousPos: [400, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: up 1', () => {
        const startPosition = [
            {currentPos: [0, 500], previousPos: [0, 0]},
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const endPosition = snake._moveSnake(Direction.Up, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
            {currentPos: [0, 440], previousPos: [0, 460]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: up 2', () => {
        const startPosition = [
            {currentPos: [0, 500], previousPos: [0, 0]},
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 460], previousPos: [0, 480]},
            {currentPos: [0, 440], previousPos: [0, 460]},
            {currentPos: [0, 420], previousPos: [0, 440]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: up 3', () => {
        const startPosition = [
            {currentPos: [0, 500], previousPos: [0, 0]},
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 440], previousPos: [0, 460]},
            {currentPos: [0, 420], previousPos: [0, 440]},
            {currentPos: [0, 400], previousPos: [0, 420]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: up 4', () => {
        const startPosition = [
            {currentPos: [0, 500], previousPos: [0, 0]},
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, startPosition);

        const correctEndPosition = [
            {currentPos: [0, 420], previousPos: [0, 440]},
            {currentPos: [0, 400], previousPos: [0, 420]},
            {currentPos: [0, 380], previousPos: [0, 400]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });
});

describe('Snake turning in a direction', () => {
    test('Returns the correct snake position: right 3, down 3', () => {
        const startPosition = [
            {currentPos: [0, 0], previousPos: [0, 0]},
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Right, startPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);

        const correctEndPosition = [
            {currentPos: [100, 20], previousPos: [100, 0]},
            {currentPos: [100, 40], previousPos: [100, 20]},
            {currentPos: [100, 60], previousPos: [100, 40]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: down 3, left 3', () => {
        const startPosition = [
            {currentPos: [100, 0], previousPos: [100, 500]},
            {currentPos: [100, 20], previousPos: [100, 0]},
            {currentPos: [100, 40], previousPos: [100, 20]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);

        const correctEndPosition = [
            {currentPos: [80, 100], previousPos: [100, 100]},
            {currentPos: [60, 100], previousPos: [80, 100]},
            {currentPos: [40, 100], previousPos: [60, 100]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: left 3, up 3', () => {
        const startPosition = [
            {currentPos: [100, 0], previousPos: [120, 0]},
            {currentPos: [80, 0], previousPos: [100, 0]},
            {currentPos: [60, 0], previousPos: [80, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);

        const correctEndPosition = [
            {currentPos: [0, 480], previousPos: [0, 0]},
            {currentPos: [0, 460], previousPos: [0, 480]},
            {currentPos: [0, 440], previousPos: [0, 460]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: up 3, right 3', () => {
        const startPosition = [
            {currentPos: [0, 500], previousPos: [0, 0]},
            {currentPos: [0, 480], previousPos: [0, 500]},
            {currentPos: [0, 460], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);

        const correctEndPosition = [
            {currentPos: [20, 400], previousPos: [0, 400]},
            {currentPos: [40, 400], previousPos: [20, 400]},
            {currentPos: [60, 400], previousPos: [40, 400]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });
});

describe('Snake looping the grid', () => {
    test('Returns the correct snake position: off the grid right', () => {
        const startPosition = [
            {currentPos: [460, 0], previousPos: [440, 0]},
            {currentPos: [480, 0], previousPos: [460, 0]},
            {currentPos: [500, 0], previousPos: [480, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Right, startPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);
        endPosition = snake._moveSnake(Direction.Right, endPosition);

        const correctEndPosition = [
            {currentPos: [520, 0], previousPos: [500, 0]},
            {currentPos: [540, 0], previousPos: [520, 0]},
            {currentPos: [560, 0], previousPos: [540, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: off the grid down', () => {
        const startPosition = [
            {currentPos: [0, 460], previousPos: [0, 440]},
            {currentPos: [0, 480], previousPos: [0, 460]},
            {currentPos: [0, 500], previousPos: [0, 480]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Down, startPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);
        endPosition = snake._moveSnake(Direction.Down, endPosition);

        const correctEndPosition = [
            {currentPos: [0, 520], previousPos: [0, 500]},
            {currentPos: [0, 540], previousPos: [0, 520]},
            {currentPos: [0, 560], previousPos: [0, 540]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: off the grid left', () => {
        const startPosition = [
            {currentPos: [40, 0], previousPos: [60, 0]},
            {currentPos: [20, 0], previousPos: [40, 0]},
            {currentPos: [0, 0], previousPos: [20, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Left, startPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);
        endPosition = snake._moveSnake(Direction.Left, endPosition);

        const correctEndPosition = [
            {currentPos: [480, 0], previousPos: [0, 0]},
            {currentPos: [460, 0], previousPos: [480, 0]},
            {currentPos: [440, 0], previousPos: [460, 0]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });

    test('Returns the correct snake position: off the grid up', () => {
        const startPosition = [
            {currentPos: [0, 40], previousPos: [0, 60]},
            {currentPos: [0, 20], previousPos: [0, 40]},
            {currentPos: [0, 0], previousPos: [0, 20]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        let endPosition = snake._moveSnake(Direction.Up, startPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);
        endPosition = snake._moveSnake(Direction.Up, endPosition);

        const correctEndPosition = [
            {currentPos: [0, 480], previousPos: [0, 0]},
            {currentPos: [0, 460], previousPos: [0, 480]},
            {currentPos: [0, 440], previousPos: [0, 460]},
        ];

        expect(endPosition).toEqual(correctEndPosition);
    });
});

describe('Snake tail', () => {
    test('Get the snakes tail position', () => {
        const startPosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const tailPosition = snake._getSnakeTailPosition(startPosition);

        const correctTailPosition = {
            currentPos: [400, 0],
            previousPos: [380, 0],
        };

        expect(tailPosition).toEqual(correctTailPosition);
    });
});

describe('Snake tail', () => {
    test('Get the snakes head position', () => {
        const startPosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const tailPosition = snake._getSnakeHeadPosition(startPosition);

        const correctTailPosition = {
            currentPos: [440, 0],
            previousPos: [420, 0],
        };

        expect(tailPosition).toEqual(correctTailPosition);
    });
});

describe('Snake grows', () => {
    test('Snake grows by one block', () => {
        const startPosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const snakePositionAfter = snake._grow(startPosition);

        const correctPositionAfter = [
            {currentPos: [380, 0], previousPos: [0, 0]},
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        expect(snakePositionAfter).toEqual(correctPositionAfter);
    });
});

describe('Snake died', () => {
    test('Snake should have died', () => {
        const startPosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [420, 0], previousPos: [440, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const snakeHasDied = snake._hasDied(startPosition);

        expect(snakeHasDied).toBe(true);
    });

    test('Snake should not have died', () => {
        const startPosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        const snake = new Snake(null, [20, 20], [500, 500]);

        const snakeHasDied = snake._hasDied(startPosition);

        expect(snakeHasDied).toBe(false);
    });
});

describe('Food', () => {
    test('Food position is returned', () => {
        const gridHeight = 500;
        const gridWidth = 500;

        const snakePosition = [
            {currentPos: [400, 0], previousPos: [380, 0]},
            {currentPos: [420, 0], previousPos: [400, 0]},
            {currentPos: [440, 0], previousPos: [420, 0]},
        ];

        const food = new Food(null, [20, 20], [gridHeight, gridWidth]);
        const foodPosition = food._generateFoodCoordinates(snakePosition);

        expect(foodPosition[0]).toBeGreaterThan(-1);
        expect(foodPosition[1]).toBeGreaterThan(-1);

        expect(foodPosition[0]).toBeLessThan(gridWidth);
        expect(foodPosition[1]).toBeLessThan(gridHeight);
    });

    test('Food can be eaten', () => {
        const food = new Food(null, [20, 20], [500, 500]);

        const head = {currentPos: [0, 0], previousPos: [0, 0]};

        const hasBeenEaten = food._foodHasBeenEaten(head, [0, 0]);

        expect(hasBeenEaten).toBe(true);
    });

    test('Food can not be eaten', () => {
        const food = new Food(null, [20, 20], [500, 500]);

        const head = {currentPos: [0, 0], previousPos: [0, 0]};

        const hasBeenEaten = food._foodHasBeenEaten(head, [1, 1]);

        expect(hasBeenEaten).toBe(false);
    });
});
