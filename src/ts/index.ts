import Game from './classes/Game';

const canvas : HTMLCanvasElement = document.querySelector('canvas')!;

if (canvas) {
    const gridWidth : number = canvas.width;
    const gridHeight : number = canvas.height;

    const gridSize: [number, number] = [gridWidth, gridHeight];
    const blockSize: [number, number] = [20, 20];

    new Game(
        canvas,
        gridSize,
        blockSize,
    );
}

