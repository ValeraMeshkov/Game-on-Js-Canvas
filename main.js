window.onload = init;

var speedEnemy = 3;

var gameWidth = 1000,
	gameHeight = 600;

var map,
	ctxMap;

var player,
	ctxPlayer,
 	spraitMoveX = 0;

var enemy1,
	ctxEnemy1;

var enemys1,
	ctxEnemys1,
	enemys1Arr = [],
	enemys1ArrCount = 4;

var enemys2,
	ctxEnemys2,
	enemys2Arr = [],
	enemys2ArrCount = 4;

var enemys3,
	ctxEnemys3,
	enemys3Arr = [],
	enemys3ArrCount = 4;

var enemys4,
	ctxEnemys4,
	enemys4Arr = [],
	enemys4ArrCount = 4;

var enemySpraitSpeed = 0;

var health,
	ctxHealth;
	healthLine = 1000;

var background = new Image();
	background.src = "img/fonGame1.png";
var background1 = new Image();
	background1.src = "img/fonGame1.png";

var bgW = 0,
	bgW1 = gameWidth;

var playerImage = new Image();
	playerImage.src = "img/PlayerWalk.png";

var enemy1Image = new Image();
	enemy1Image.src = "img/Enemy1.png";

var enemys1Image = new Image();
var enemys2Image = new Image();
var enemys3Image = new Image();
var enemys4Image = new Image();

	enemys1Image.src = enemys2Image.src =
	enemys3Image.src = enemys4Image.src = "img/Enemy1.png";

var countEnemys,
	ctxCountEnemys,
	countNumberEnemys = 0;


var isPlaying;
var requestAnimFrame = window.requestAnimationFrame ||
							     	 window.webkitRequestAnimationFrame ||
							     	 window.mozRequestAnimationFrame ||
							     	 window.oRequestAnimationFrame ||
							     	 window.msRequestAnimationFrame;


//main game function
function init () {
	map = document.getElementById("map");
	ctxMap = map.getContext("2d");

	player = document.getElementById("player");
	ctxPlayer = player.getContext("2d");

	enemy1 = document.getElementById("enemy1");
	ctxEnemy1 = enemy1.getContext("2d");

	enemys1 = document.getElementById("enemys1");
	ctxEnemys1 = enemys1.getContext("2d");

	enemys2 = document.getElementById("enemys2");
	ctxEnemys2 = enemys2.getContext("2d");

	enemys3 = document.getElementById("enemys3");
	ctxEnemys3 = enemys3.getContext("2d");

	enemys4 = document.getElementById("enemys4");
	ctxEnemys4 = enemys4.getContext("2d");

	health = document.getElementById("health");
	ctxHealth = health.getContext("2d");

	countEnemys = document.getElementById("countEnemys");
	ctxCountEnemys = countEnemys.getContext("2d");

	map.width =	player.width =
	enemy1.width = enemys1.width =
	enemys2.width = enemys3.width =
	enemys4.width = health.width =
	countEnemys.width = gameWidth;

	map.height = player.height =
	enemy1.height = enemys1.height =
	enemys2.height = enemys3.height =
	enemys4.height = health.height =
	countEnemys.height = gameHeight;


	player = new Player();
   enemy1 = new Enemy1();



	startLoop();
   player.chooseMove();

	document.addEventListener("keydown", checkKeyDown, false);
	document.addEventListener("keyup", checkKeyUp, false);

  var button = document.getElementById("but");
  button.addEventListener("click", buttonCl, false);
}



function buttonCl() {
	location.reload();
}



// Create loop game
function loop(){
	if (isPlaying) {
		draw();
		update();
		requestAnimFrame(loop);
	}
}
//  start loop
function startLoop(){
	isPlaying = true;
	loop();
	addEnemys1Arr(enemys1ArrCount);
	addEnemys2Arr(enemys2ArrCount);
	addEnemys3Arr(enemys3ArrCount);
	addEnemys4Arr(enemys4ArrCount);
}
// stop loop
function Stoploop(){
	isPlaying = false;
}

// update game
function update(){
	backgroundMove()
	drawBackground();
	player.update();
	enemy1.update();

	for (var i = 0; i < enemys1Arr.length; i++) {
		enemys1Arr[i].update();
	}
	for (var i = 0; i < enemys2Arr.length; i++) {
		enemys2Arr[i].update();
	}
	for (var i = 0; i < enemys3Arr.length; i++) {
		enemys3Arr[i].update();
	}
	for (var i = 0; i < enemys4Arr.length; i++) {
		enemys4Arr[i].update();
	}

	stolknovenue();
	healthChange();
	pointCountEnemys();
}

// draw game
function draw(){
	enemy1.draw();
	player.draw();


	clearCtxEnemys1();
	clearCtxEnemys2();
	clearCtxEnemys3();
	clearCtxEnemys4();
	for (var i = 0; i < enemys1Arr.length; i++) {
		enemys1Arr[i].draw();
	}
	for (var i = 0; i < enemys2Arr.length; i++) {
		enemys2Arr[i].draw();
	}
	for (var i = 0; i < enemys3Arr.length; i++) {
		enemys3Arr[i].draw();
	}
	for (var i = 0; i < enemys4Arr.length; i++) {
		enemys4Arr[i].draw();
	}
}





