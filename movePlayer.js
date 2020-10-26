//This function tells the program to stop and wait for the amount of ms determind by the variable moveDelay
function sleep(ms=5000){
  return new Promise(resolve => setTimeout(resolve, ms));
}

//This function moves the character by clearing the cnavas then redrawing the character in the new position
async function move(){
	ctx.clearRect(0, 0,myCanvas.width, myCanvas.height);
	drawBoard();
	//console.log("moving")
	
	if(dirFacing == "East"){
		moveX += 1;
		drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	}else if(dirFacing == "South"){
		moveY += 1;
		drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	}else if(dirFacing == "West"){
		moveX -= 1;
		drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	}else if(dirFacing == "North"){
		moveY -= 1;
		drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	}else{
		alert("Direction not set");
	}
	inWorld();
	await sleep();
}

//this function will rotate the character 90 deg every time it is called
async function turnRight(){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	drawBoard();
	if(dirFacing == "East"){
		dirFacing = "South";
	}else if(dirFacing == "South"){
		dirFacing = "West";
	}else if(dirFacing == "West"){
		dirFacing = "North";
	}else{
		dirFacing = "East";
	}
	drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	inWorld();
	await sleep();
}

//This function tells karel how to put down a ball
async function putBall(){
	balls.push([moveX, moveY]);
	drawBall();
	await sleep(20);
	drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);	
	await sleep();
}

//This function tells Karel how to take the ball
async function takeBall(){
	console.log(balls);
	removeBall([moveX, moveY]);
	ctx.clearRect(0, 0,myCanvas.width, myCanvas.height);
	drawBoard();
	drawBall();
	drawKarel(blockWidth*moveX, blockHeight*moveY, dirFacing);
	await sleep();
}