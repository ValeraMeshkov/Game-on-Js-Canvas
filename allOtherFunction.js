function pointCountEnemys(){
	clearCtxCountEnemys()
	ctxCountEnemys.fillText("Game Point " + countNumberEnemys, 10 , 30);
	ctxCountEnemys.font = "15px Arial";
	ctxCountEnemys.fillStyle = "greenYellow";
	if (healthLine <= 0) {
		document.getElementById("but").style.opacity = 1;
		clearCtxCountEnemys()
		ctxCountEnemys.font = "100px Arial";
		ctxCountEnemys.fillText("Game Point " + countNumberEnemys, 130 , 300);
	}
}


function healthChange (){
	clearCtxHealth()
	if (healthLine > 670) {
		ctxHealth.fillStyle = "greenYellow";
	}else if (healthLine > 330) {
		ctxHealth.fillStyle = "orange";
	}else {
		ctxHealth.fillStyle = "red";
	}
	ctxHealth.fillRect(0,0, healthLine ,3);
	if (healthLine < 0) {
		efwf
	}
}
function clearCtxHealth(){
	ctxHealth.clearRect(0, 0, gameWidth, gameHeight);
}

function clearCtxCountEnemys(){
	ctxCountEnemys.clearRect(0, 0, gameWidth, gameHeight)
}

function clearCtxScreenGame(){
	ctxScreenGame.clearRect(0, 0, gameWidth, gameHeight);
}

//Setinterval for sprites Player
setInterval(function(){
	//спрайты меняются от 1 до 4
	if (spraitMoveX >= 3)
		spraitMoveX = 0;
	else {spraitMoveX += 1}
	player.spriteChange();
}, 200)

//Setinterval for sprites Enemys
setInterval(function(){
	if (enemySpraitSpeed >= 3)
		enemySpraitSpeed = 0;
	else {enemySpraitSpeed += 1}
}, 50)

setInterval(function(){
	speedEnemy += 0.1;
}, 10000)

function stolknovenue(){
	if (player.drawX + player.width / 2 > enemy1.drawX &&
		 player.drawY + player.height / 2> enemy1.drawY &&
		 player.drawX < enemy1.drawX + enemy1.width / 2 &&
		 player.drawY < enemy1.drawY + enemy1.height / 2) {
		healthLine-=2;
	}
	for (var i = 0; i < enemys1Arr.length; i++) {
		if (player.drawX + player.width / 2 > enemys1Arr[i].drawX &&
			 player.drawY + player.height / 2 > enemys1Arr[i].drawY &&
			 player.drawX < enemys1Arr[i].drawX + enemys1Arr[i].width / 4 &&
			 player.drawY < enemys1Arr[i].drawY + enemys1Arr[i].height / 4) {
			healthLine-=2;
		}
	}
	for (var i = 0; i < enemys2Arr.length; i++) {
		if (player.drawX + player.width / 2 > enemys2Arr[i].drawX &&
			 player.drawY + player.height / 2 > enemys2Arr[i].drawY &&
			 player.drawX < enemys2Arr[i].drawX + enemys2Arr[i].width / 3 &&
			 player.drawY < enemys2Arr[i].drawY + enemys2Arr[i].height / 3) {
			healthLine-=2;
		}
	}
	for (var i = 0; i < enemys3Arr.length; i++) {
		if (player.drawX + player.width / 2 > enemys3Arr[i].drawX &&
			 player.drawY + player.height / 2 > enemys3Arr[i].drawY &&
			 player.drawX < enemys3Arr[i].drawX + enemys3Arr[i].width / 2 &&
			 player.drawY < enemys3Arr[i].drawY + enemys3Arr[i].height / 2) {
			healthLine-=2;
		}
	}
	for (var i = 0; i < enemys4Arr.length; i++) {
		if (player.drawX + player.width / 2 > enemys4Arr[i].drawX &&
			 player.drawY + player.height / 2 > enemys4Arr[i].drawY &&
			 player.drawX < enemys4Arr[i].drawX + enemys4Arr[i].width / 3 &&
			 player.drawY < enemys4Arr[i].drawY + enemys4Arr[i].height / 3) {
			healthLine-=2;
		}
	}


	if (player.drawY >= 499.5) {
		healthLine-= 5;
	}
}


