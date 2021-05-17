var database;
var form;
var game;
var player;

var gameState = 0;
var playerCount;
var allPlayers


function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  game = new Game()
  game.start()
  game.readState()

}

function draw() {
  background("white");

  if (playerCount === 4) {
   game.updateState(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }

  drawSprites();

}


