// create enemy1
function Enemy1(){
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = Math.random() * gameWidth + gameWidth;
	this.drawY = Math.random() * gameHeight * 0.65;
	this.height = 390;
   this.width = 130;
}

// draw enemy1
Enemy1.prototype.draw = function() {
	clearCtxEnemy1();
	ctxEnemy1.drawImage(enemy1Image, this.width * spraitMoveX, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/2, this.height/2);
}

//move enemy1
Enemy1.prototype.update = function() {
	this.drawX -= speedEnemy;
	if (this.drawX <= -100) {
		countNumberEnemys++;
		enemy1Image.src = "img/Enemy1.png";
		this.drawX = Math.random() * gameWidth + gameWidth;
		this.drawY = Math.random() * gameHeight * 0.65;
	}
}

//clear ctx enemy1
function clearCtxEnemy1(){
	ctxEnemy1.clearRect(0, 0, gameWidth, gameHeight);
}



// create enemys1
function Enemys1(){
	this.srcX = 0;
	this.srcY = 390;
	this.drawX = Math.random() * gameWidth + gameWidth * Math.floor(Math.random() * 10);
	this.drawY = Math.random() * gameHeight * 0.8;
	this.height = 130;
   this.width = 130;
}

function addEnemys1Arr(count){
	for(var i=0; i < count; i++){
		enemys1Arr[i] = new Enemys1();
	}
}

//clear ctx enemys1
function clearCtxEnemys1(){
	ctxEnemys1.clearRect(0, 0, gameWidth, gameHeight);
}

// draw enemys1
Enemys1.prototype.draw = function() {
	ctxEnemys1.drawImage(enemys1Image, this.width * enemySpraitSpeed, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/4, this.height/4);
}

//move enemys1
Enemys1.prototype.update = function() {
	this.drawX -= speedEnemy * 1.1;
	if (this.drawX <= -100) {
		countNumberEnemys++;
		enemys1Image.src = "img/Enemy1.png";
		this.drawX = Math.random() * gameWidth + gameWidth ;
		this.drawY = Math.random() * gameHeight * 0.8;
	}
}

// create enemys2
function Enemys2(){
	this.srcX = 0;
	this.srcY = 520;
	this.drawX = Math.random() * gameWidth + gameWidth * Math.floor(Math.random() * 10);
	this.drawY = Math.random() * gameHeight * 0.8;
	this.height = 130;
   this.width = 130;
}

function addEnemys2Arr(count){
	for(var i=0; i < count; i++){
		enemys2Arr[i] = new Enemys2();
	}
}

//clear ctx enemys2
function clearCtxEnemys2(){
	ctxEnemys2.clearRect(0, 0, gameWidth, gameHeight);
}

// draw enemys2
Enemys2.prototype.draw = function() {
	ctxEnemys2.drawImage(enemys2Image, this.width * enemySpraitSpeed, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/3, this.height/3);
}

//move enemys2
Enemys2.prototype.update = function() {
	this.drawX -= speedEnemy / 1.1;
	if (this.drawX <= -100) {
		countNumberEnemys++;
		enemys2Image.src = "img/Enemy1.png";
		this.drawX = Math.random() * gameWidth + gameWidth ;
		this.drawY = Math.random() * gameHeight * 0.8;
	}
}

// create enemys3
function Enemys3(){
	this.srcX = 0;
	this.srcY = 650;
	this.drawX = Math.random() * gameWidth + gameWidth * Math.floor(Math.random() * 10);
	this.drawY = Math.random() * gameHeight * 0.8;
	this.height = 130;
   this.width = 130;
}

function addEnemys3Arr(count){
	for(var i=0; i < count; i++){
		enemys3Arr[i] = new Enemys3();
	}
}

//clear ctx enemys3
function clearCtxEnemys3(){
	ctxEnemys3.clearRect(0, 0, gameWidth, gameHeight);
}

// draw enemys3
Enemys3.prototype.draw = function() {
	ctxEnemys3.drawImage(enemys3Image, this.width * enemySpraitSpeed, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/2, this.height/2);
}

//move enemys3
Enemys3.prototype.update = function() {
	this.drawX -= speedEnemy * 1.3;
	if (this.drawX <= -100) {
		countNumberEnemys++;
		enemys3Image.src = "img/Enemy1.png";
		this.drawX = Math.random() * gameWidth + gameWidth ;
		this.drawY = Math.random() * gameHeight * 0.8;
	}
}

// create enemys4
function Enemys4(){
	this.srcX = 0;
	this.srcY = 785;
	this.drawX = Math.random() * gameWidth + gameWidth * Math.floor(Math.random() * 10);
	this.drawY = Math.random() * gameHeight * 0.8;
	this.height = 135;
   this.width = 130;
}

function addEnemys4Arr(count){
	for(var i=0; i < count; i++){
		enemys4Arr[i] = new Enemys4();
	}
}

//clear ctx enemys4
function clearCtxEnemys4(){
	ctxEnemys4.clearRect(0, 0, gameWidth, gameHeight);
}

// draw enemys4
Enemys4.prototype.draw = function() {
	ctxEnemys4.drawImage(enemys4Image, this.width * enemySpraitSpeed, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/2.5, this.height/2.5);
}

//move enemys4
Enemys4.prototype.update = function() {
	this.drawX -= speedEnemy / 1.3;
	if (this.drawX <= -100) {
		countNumberEnemys++;
		enemys4Image.src = "img/Enemy1.png";
		this.drawX = Math.random() * gameWidth + gameWidth ;
		this.drawY = Math.random() * gameHeight * 0.8;
	}
}