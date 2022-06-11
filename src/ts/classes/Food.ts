import Block from '../types/Block';
import BlockPosition from '../types/BlockPosition';

/**
 * Game.
 */
class Food {
    /**
     * Game canvas context.
     *
     * @type {CanvasRenderingContext2D}
     * @memberof Game
     */
    _ctx : CanvasRenderingContext2D;

    /**
      *The size of the game blocks.
      *
      * @type {Block}
      * @memberof Snake
      */
    _blockSize : Block;

    /**
      * Size of the canvas.
      *
      * @type {[number, number]}
      * @memberof Game
      */
    _gridSize : [number, number];

    /**
     * Food Constructor.
     * @param { CanvasRenderingContext2D } ctx - The game canvas context.
     * @param {Block} blockSize - The height and width of the blocks.
     * @param {[number, number]} gridSize - The current game grid size.
     */
    constructor(
        ctx: CanvasRenderingContext2D,
        blockSize: Block,
        gridSize: [number, number],
    ) {
        this._ctx = ctx;

        this._blockSize = blockSize;

        this._gridSize =
            [
                gridSize[0] - this._blockSize[0],
                gridSize[1] - this._blockSize[1],
            ];
    }

    /**
     * Sets random food coordinates and make sure food is visible.
     * @param {BlockPosition[]} snakePosition
     * @return {Block} randomBlockPosition
     */
    _generateFoodCoordinates(snakePosition : BlockPosition[]) : Block {
        const currentPositionArr = snakePosition.map((pos) => pos.currentPos);

        let foodUnderSnake = true;

        let randomBlockPosition : Block = [
            Math.ceil((Math.random() * 500) /
            this._blockSize[0]) * this._blockSize[0] - this._blockSize[0],
            Math.ceil((Math.random() * 500) /
            this._blockSize[0]) * this._blockSize[0] - this._blockSize[1],
        ];

        while (foodUnderSnake) {
            randomBlockPosition = [
                Math.ceil((Math.random() * 500) /
                this._blockSize[0]) * this._blockSize[0] - this._blockSize[0],
                Math.ceil((Math.random() * 500) /
                this._blockSize[0]) * this._blockSize[0] - this._blockSize[1],
            ];

            if (!currentPositionArr.includes(randomBlockPosition)) {
                foodUnderSnake = false;
            }
        }

        return randomBlockPosition;
    }

    /**
     * Checks if the food has been eaten or not.
     * @param {BlockPosition} snakeHeadPosition
     * @param {Block} foodPosition
     * @return {Boolean} snakeHasEatenFood
     */
    _foodHasBeenEaten(
        snakeHeadPosition : BlockPosition,
        foodPosition: Block) : Boolean {
        let snakeHasEatenFood = false;

        if (snakeHeadPosition.currentPos[0] === foodPosition[0] &&
            snakeHeadPosition.currentPos[1] === foodPosition[1]) {
            snakeHasEatenFood = true;
        }

        return snakeHasEatenFood;
    }

    /**
     * Generates food randomly within the grid.
     * @param {Block} foodPosition
     */
    _drawFood(foodPosition : Block) : void {
        this._ctx.beginPath();
        this._ctx.arc(
            foodPosition[0] + 10,
            foodPosition[1] + 10,
            this._blockSize[0] / 2, 0, 2 * Math.PI);
        this._ctx.fillStyle = '#736000';
        this._ctx.fill();
        this._ctx.closePath();
    }
}

export default Food;
