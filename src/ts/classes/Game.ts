import Direction from '../types/Direction';
import Block from '../types/Block';
import BlockPosition from '../types/BlockPosition';
import Snake from './Snake';
import Food from './Food';
import throttle from '../helpers/throttle'

/**
 * Game.
 */
class Game {
    /**
     * Game canvas context.
     *
     * @type {CanvasRenderingContext2D}
     * @memberof Game
     */
    _ctx : CanvasRenderingContext2D;

    /**
     * Current snake direction.
     *
     * @type {Direction}
     * @memberof Game
     */
    _currentDirection : Direction = Direction.Right;

    /**
     * Coordinates of the food.
     *
     * @type {[number, number]}
     * @memberof Game
     */
    _foodPosition : [number, number] = [0, 0];

    /**
     * The initial snake.
     *
     * @type {BlockPosition[]}
     * @memberof Game
     */
    _snakePosition : BlockPosition[];

    /**
     * Instance of the Snake.
     *
     * @memberof Game
     */
    _snake;

    /**
     * Instance of Food.
     *
     * @memberof Game
     */
    _food;

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
     *The default speed of the game.
     *
     * @memberof Game
     */
    _speed : number = 200;

    _score : number = 0;

    _changing : Boolean = false;

    /**
     * Game constructor.
     * @param {HTMLCanvasElement} canvas - Game canvas.
     * @param {[number, number]} gridSize - The width and height of canvas.
     * @param {Block} blockSize - The height and width of the blocks.
     * @param {number} speed - The snake speed.
     */
    constructor(
        canvas : HTMLCanvasElement,
        gridSize: [number, number],
        blockSize : Block,
        speed: number = 100,
    ) {
        this._ctx = canvas.getContext('2d')!;

        this._currentDirection = Direction.Right;

        this._blockSize = blockSize;

        this._gridSize = gridSize;

        this._snakePosition = [
            {currentPos: [20, 0], previousPos: [0, 0]},
            {currentPos: [40, 0], previousPos: [0, 0]},
            {currentPos: [60, 0], previousPos: [0, 0]},
            {currentPos: [80, 0], previousPos: [0, 0]},
            {currentPos: [100, 0], previousPos: [0, 0]},
        ];

        this._snake = new Snake(
            this._ctx,
            this._blockSize,
            this._gridSize,
        );

        this._food = new Food(
            this._ctx,
            this._blockSize,
            this._gridSize,
        );

        this._foodPosition =
            this._food._generateFoodCoordinates(this._snakePosition);

        this._speed = speed;

        this._ctx.strokeRect(0, 0, this._gridSize[0], this._gridSize[1]);

        this._startGame();
    }

    /**
     * Handles the keypresses to control the snake.
     * @param {KeyboardEvent} e
     * @return {void}
     */
    _handleKeypress(e : KeyboardEvent) : void {
        switch (e.key) {
        case 'ArrowLeft':
            if (this._currentDirection === Direction.Right) return;

            this._setDirection(Direction.Left);
            break;

        case 'ArrowUp':
            if (this._currentDirection === Direction.Down) return;

            this._setDirection(Direction.Up);
            break;

        case 'ArrowRight':
            if (this._currentDirection === Direction.Left) return;

            this._setDirection(Direction.Right);
            break;

        case 'ArrowDown':
            if (this._currentDirection === Direction.Up) return;

            this._setDirection(Direction.Down);
            break;
        }
    }

    /**
     * Handles the direction of the snake.
     * @param {Direction} direction - direction
     */
    _setDirection(direction: Direction) : void {
        this._currentDirection = direction;
    }

    /**
     * Draws the score to the screen.
     */
    _drawScore() : void {
        const scoreString = this._score.toString();

        const scoreSize = scoreString.length * 10;

        this._ctx.font = '24px Arial';

        this._ctx.fillText(this._score.toString(), (470 - scoreSize), 40);
    }

    /**
     * Clears the canvas.
     */
    _clearCanvas() : void {
        this._ctx.clearRect(
            0,
            0,
            this._gridSize[0] + this._blockSize[0],
            this._gridSize[1] + this._blockSize[1],
        );
    }

    /**
     * Sets the snake position.
     * @param {BlockPosition[]} snakePosition - Sets snake position
     */
    _setSnakePosition(snakePosition: BlockPosition[]) : void {
        this._snakePosition = snakePosition;
    }

    /**
     * Returns the snake position.
     * @return {BlockPosition[]}
     */
    _getSnakePosition() : BlockPosition[] {
        return this._snakePosition;
    }

    /**
     * Adds event listeners.
     */
    _addEventListeners() : void {
        const throttledKeypresses : Function = throttle(this._handleKeypress, this._speed).bind(this)
        window.addEventListener('keyup', (e) => {
            throttledKeypresses(e)
        });
    }

    /**
     * Performs game evens on the defined interval.
     */
    _gameEvents() : void {
        setInterval(() => {
            const snakePosition = this._getSnakePosition();

            const snakeHeadPosition =
                this._snake._getSnakeHeadPosition(snakePosition);

            const foodPosition = this._foodPosition;

            this._clearCanvas();

            this._drawScore();

            let newSnakePosition = this._snake._moveSnake(
                this._currentDirection,
                snakePosition,
            );

            if (this._food._foodHasBeenEaten(snakeHeadPosition, foodPosition)) {
                newSnakePosition =
                    this._snake._grow(snakePosition);

                this._foodPosition =
                    this._food._generateFoodCoordinates(newSnakePosition);

                this._score+=10;
            }

            this._setSnakePosition(newSnakePosition);

            this._snake._drawSnake(snakePosition);

            this._food._drawFood(foodPosition);

            if (this._snake._hasDied(snakePosition)) {
                while (snakePosition.length > 5) {
                    this._snakePosition.pop();
                }

                this._score = 0;
            }
        }, this._speed);
    }

    /**
     * Starts the game and runs the game events on the interval.
     */
    _startGame() : void {
        this._addEventListeners();

        this._gameEvents();
    }
}

export default Game;
