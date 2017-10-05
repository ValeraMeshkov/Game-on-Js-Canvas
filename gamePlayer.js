//create player
function Player (){
	this.srcX = 0;
	this.srcY = 240;
	this.drawX = 50;
	this.drawY = gameHeight/4;
   this.width = 90;
	this.height = 120;

	this.isUp = false;
	this.isDown = false;
	this.isRight = false;
	this.isLeft = false;

	this.speed = 3;
}





//draw player
Player.prototype.draw = function(){
	clearCtxPlayer();

	ctxPlayer.drawImage(playerImage, this.width * spraitMoveX, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		(this.width)/1.5, (this.height)/1.5);
	//fly down Player
	if (this.drawY  > -10 && this.drawY < 480) {
		this.drawY += 1.5;
	}else {
		this.drawY += 0.5;
	}

	//fair near leg Player
	if (this.drawY > 500) {
		this.drawY = 480;
	}
};

//update player
Player.prototype.update = function() {
	if (this.drawX < 0)
		this.drawX = 0;
	if (this.drawX > gameWidth - this.width)
		this.drawX = gameWidth - this.width;
	if (this.drawY < 0)
		this.drawY = 0;
	if (this.drawY > gameHeight - this.height/4)
		this.drawY = gameHeight - this.height;

	this.chooseMove();
}

//clear ctx player
function clearCtxPlayer(){
	ctxPlayer.clearRect(0, 0, gameWidth, gameHeight)
}

Player.prototype.chooseMove = function (){
	if (this.isUp)
		this.drawY -= this.speed + 2;
	if (this.isDown && this.drawY < 470)
		this.drawY += this.speed ;
	if (this.isRight)
		this.drawX += this.speed;
	if (this.isLeft)
		this.drawX -= this.speed + 1;
}

//Клавиатура нажатие клавиш проверка
function checkKeyDown(e){
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);
	if (keyChar == "W") {
		player.isUp = true;
		e.preventDefault();
	}
	if (keyChar == "S") {
		player.isDown = true;
		e.preventDefault();
	}
	if (keyChar == "D") {
		player.isRight = true;
		e.preventDefault();
	}
	if (keyChar == "A") {
		player.isLeft = true;
		e.preventDefault();
	}
}

//Клавиатура нажатие отпускания клавиш проверка
function checkKeyUp(e){
	var keyID = e.keyCode || e.which ;
	var keyChar = String.fromCharCode(keyID);
	if (keyChar == "W") {
		player.isUp = false;
		e.preventDefault();
	}
	if (keyChar == "S") {
		player.isDown = false;
		e.preventDefault();
	}
	if (keyChar == "D") {
		player.isRight = false;
		e.preventDefault();
	}
	if (keyChar == "A") {
		player.isLeft = false;
		e.preventDefault();
	}
}


//Сhange All sprites for player
Player.prototype.spriteChange = function(){
	if (this.drawY >=490) {
		this.srcY = 0;
	}
	else if(this.isUp && this.isRight) {
		this.srcY = 360;
		this.width = 112.5;
		this.height = 115;
	}
	else if(this.isDown && this.isRight && this.drawY < 400) {
		this.srcY = 475;
		this.width = 112.5;
		this.height = 115;
	}
	else if(this.isRight && this.drawY < 450) {
		this.srcY = 590;
		this.width = 120;
		this.height = 90;
	}
	else if(this.isUp && this.isLeft) {
		this.srcY = 685;
		this.width = 112.5;
		this.height = 115;
	}
	else if(this.isDown && this.isLeft && this.drawY < 400) {
		this.srcY = 795;
		this.width = 112.5;
		this.height = 115;
	}
	else if(this.isLeft && this.drawY < 450) {
		this.srcY = 910;
		this.width = 120;
		this.height = 90;
	}
	else if(this.isUp) {
		this.srcY = 240;
		this.width = 90;
		this.height = 120;
	}
	else {
		this.srcY = 120;
		this.width = 90;
		this.height = 120;
	}
}