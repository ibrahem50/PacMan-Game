import { LEVEL, OBJECT_TYPE } from './setup.js';

//classes
import GameBoard from './GameBoard.js';

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

function startGame() {}