import Direction from '../types/Direction';
import Block from '../types/Block';
import BlockPosition from '../types/BlockPosition';

/**
 * Snake.
 */
class Snake {
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
     * Snake Constructor.
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
     * Sets the snakes new position.
     * @param {Direction} direction - Direction of the snake movemenet.
     * @param {BlockPosition} snakePosition - The current snake position.
     * @return {BlockPosition} - Return the snake position.
     */
    _moveSnake(
        direction: Direction,
        snakePosition: BlockPosition[]) : BlockPosition[] {
        const head : BlockPosition =
            this._getSnakeHeadPosition(snakePosition);

        switch (direction) {
        case 'RIGHT':
            head.previousPos[0] = head.currentPos[0];
            head.previousPos[1] = head.currentPos[1];

            if (head.currentPos[0] === this._gridSize[0]) {
                head.currentPos[0] = 0;
            } else {
                head.currentPos[0] += this._blockSize[0];
            }

            break;

        case 'LEFT':
            head.previousPos[0] = head.currentPos[0];
            head.previousPos[1] = head.currentPos[1];

            if (head.currentPos[0] === 0) {
                head.currentPos[0] = this._gridSize[0];
            } else {
                head.currentPos[0] -= this._blockSize[0];
            }

            break;

        case 'UP':
            head.previousPos[0] = head.currentPos[0];
            head.previousPos[1] = head.currentPos[1];

            if (head.currentPos[1] === 0) {
                head.currentPos[1] = this._gridSize[1];
            } else {
                head.currentPos[1] -= this._blockSize[1];
            }

            break;

        case 'DOWN':
            head.previousPos[0] = head.currentPos[0];
            head.previousPos[1] = head.currentPos[1];

            if (head.currentPos[1] === this._gridSize[1]) {
                head.currentPos[1] = 0;
            } else {
                head.currentPos[1] += this._blockSize[1];
            }

            break;
        }

        for (let i = snakePosition.length - 2; i >= 0; i--) {
            const nextSegment = snakePosition[i + 1];

            snakePosition[i].previousPos[0] = snakePosition[i].currentPos[0];
            snakePosition[i].previousPos[1] = snakePosition[i].currentPos[1];

            snakePosition[i].currentPos[0] = nextSegment.previousPos[0];
            snakePosition[i].currentPos[1] = nextSegment.previousPos[1];
        }

        return snakePosition;
    }

    /**
     * Returns the position of the snakes head.
     * @param {BlockPosition} snakePosition
     * @return {BlockPosition} headPos - Returns the position of the head.
     */
    _getSnakeHeadPosition(snakePosition : BlockPosition[]) : BlockPosition {
        const head : BlockPosition =
            snakePosition[snakePosition.length - 1];
        return head;
    }

    /**
     * Returns the position of the snakes last block.
     * @param {BlockPosition} snakePosition - Returns the position of the tail.
     * @return {BlockPosition} tailPos
     */
    _getSnakeTailPosition(snakePosition : BlockPosition[]) : BlockPosition {
        const tailPos : BlockPosition = snakePosition[0];
        return tailPos;
    }

    /**
     * Draws the snake to canvas.
     * @param {BlockPosition} snakePosition - Draws the snake to the canvas.
     */
    _drawSnake(snakePosition: BlockPosition[]) : void {
        this._ctx.fillStyle = '#736000';

        for (let i = 0; i < snakePosition.length; i++) {
            const block = snakePosition[i];

            this._ctx.fillRect(
                block.currentPos[0],
                block.currentPos[1],
                this._blockSize[0],
                this._blockSize[1],
            );
        }
    }

    /**
     * Increases the length of the snake by one block.
     * @param {BlockPosition[]} snakePosition - Snakes current position.
     * @return {BlockPosition[]} snakePosition
     */
    _grow(
        snakePosition : BlockPosition[]) {
        const snakeTail = this._getSnakeTailPosition(snakePosition);

        const newPos : Block = [
            snakeTail.previousPos[0],
            snakeTail.previousPos[1],
        ];

        const newBlock : BlockPosition = {
            currentPos: newPos,
            previousPos: [0, 0],
        };

        const newSnakePosition = [newBlock, ...snakePosition];

        return newSnakePosition;
    }

    /**
     * Returns true if the snake had died, else false.
     * @param {BlockPosition} snakePosition
     * @return {Boolean} hasDied
     */
    _hasDied(snakePosition : BlockPosition[]) {
        let hasDied = false;

        for (let i = 0; i < snakePosition.length; i++) {
            if (hasDied) break;

            for (let j = 0; j < snakePosition.length; j++) {
                if (i === j) continue;

                if (snakePosition[i].currentPos[0] ===
                    snakePosition[j].currentPos[0] &&
                    snakePosition[i].currentPos[1] ===
                    snakePosition[j].currentPos[1]) {
                    hasDied = true;
                    break;
                }
            }
        }

        return hasDied;
    }
}

export default Snake;
