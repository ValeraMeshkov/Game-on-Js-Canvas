// create enemy1
function Enemy1(){
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = Math.random() * gameWidth + gameWidth;
	this.drawY = Math.random() * gameHeight * 0.65;
	this.height = 400;
   this.width = 150;
}

// draw enemy1
Enemy1.prototype.draw = function() {
	clearCtxEnemy1();
	ctxEnemy1.drawImage(enemy1Image, this.srcX, this.srcY,
		this.width, this.height, this.drawX,this.drawY,
		this.width/2, this.height/2);
}

//move enemy1
Enemy1.prototype.update = function() {
	this.drawX -= 5;
	if (this.drawX < -this.width/2) {
		this.drawX = Math.random() * gameWidth + gameWidth ;
		this.drawY = Math.random() * gameHeight * 0.65;
	}
}

//clear ctx enemy1
function clearCtxEnemy1(){
	ctxEnemy1.clearRect(0, 0, gameWidth, gameHeight)
}



