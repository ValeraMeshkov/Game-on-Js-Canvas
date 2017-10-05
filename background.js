//draw Background
function drawBackground(){
	ctxMap.clearRect(0, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background, 0, 50, 1270, 590,
		bgW, 0, gameWidth, gameHeight);
	ctxMap.drawImage(background1, 0, 50, 1270, 590,
		bgW1, 0, gameWidth, gameHeight);
}

function backgroundMove(){
	bgW -= 2;
	bgW1 -= 2;
	if (bgW + gameWidth < 0)
		bgW = gameWidth - 5;
	if (bgW1 + gameWidth < 0)
		bgW1 = gameWidth - 5;
}