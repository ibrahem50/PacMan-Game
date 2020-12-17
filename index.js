import { LEVEL, OBJECT_TYPE } from './setup.js';

//classes
import GameBoard from './GameBoard.js';
import Pacman from './Pacman.js';

//Dom Elements
const gameGrid = document.querySelector('#game');
const scoreTable = document.querySelector('#score');
const startButton = document.querySelector('#start-button');
//Game constants
const POWE_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);
//Initial setup
let score = 0;
let timer = null;
let gameWin = false;
let powePillActive = false;
let powerPillTimer = null;

function gameOver(pacman, grid) {}

function checkCollision(pacman, ghosts) {}

function gameloop(pacman, ghosts) {}

function startGame() {
    gameWin = false;
    powePillActive = false;
    score = 0;
    startButton.classList.add('hide');

    gameBoard.createGrid(LEVEL);

    const pacman = new Pacman(2, 287);
    gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
    document.addEventListener('keydown', (e) =>
        pacman.handleKeyInput(e, gameBoard.objectExist.bind(gameBoard))
    );

}

//Intialize game
startButton.addEventListener('click', startGame);