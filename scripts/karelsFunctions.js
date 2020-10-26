var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();

myCanvas.width = width = 600;
myCanvas.height = height = 600;

var columns = 10;
var rows = 10;

var dirFacing = "East";

var blockWidth = width/columns;
var blockHeight = height/rows;

var balls = [];

var moveX = 0;
var moveY = 0;

var moveDelay = 0;

//////Functions\\\\\\
//This function draws the area for Karel to work in
function drawBoard(){
	for(var i = 0; i < columns; i++){
		for(var j = 0 ; j < rows; j++){
			ctx.rect(blockWidth*j, blockHeight*i, blockWidth, blockHeight);
			ctx.stroke();
		}
	}
	drawBall();
}

//This function draws Karel the dog and determins which way he is facing
function drawKarel(posX, posY, dir="East"){
	if(dir == "East"){
		var facingEast = document.getElementById("East");
	  ctx.drawImage(facingEast, posX, posY, blockWidth, blockHeight);
	}else if(dir == "South"){
		var facingSouth = document.getElementById("South");
		ctx.drawImage(facingSouth, posX, posY, blockWidth, blockHeight);
	}else if(dir == "West"){
		var facingWest = document.getElementById("West");
		ctx.drawImage(facingWest, posX, posY, blockWidth, blockHeight);
	}else if(dir == "North"){
		var facingNorth = document.getElementById("North");
		ctx.drawImage(facingNorth, posX, posY, blockWidth, blockHeight);
	}else{
		return "Dead;";
	}
  ctx.stroke();
}

//This function draws the ball in the position that karel is standing, and adds the coordinate to the array of ball positions
function drawBall(){
	for(var i = 0; i < balls.length; i++){
		var ball = document.getElementById("Ball");
		ctx.drawImage(ball, blockWidth*balls[i][0], blockWidth*balls[i][1], blockWidth, blockHeight);
	}
	drawKarel();
}

//This funciton removes the ball at the position of Karel
function removeBall(value){
	ctx.clearRect(0, 0,myCanvas.width, myCanvas.height);
  for(i = 0; i < balls.length; i++){
		var j = JSON.stringify(balls[i]) == JSON.stringify(value);
		console.log(j, balls[i], value);
		if(j){
			balls.splice(i, 1);
			console.log(balls);
		}
		drawBall();
	}
}


//This function checks to make sure that the player did not leave the visible area
function inWorld(){
	if(moveX < 0){
		alert("Oops Karel ran into the wall. \nDo you have an extra move command?")
		moveX = 0;
		moveY = 0;
		dirFacing = "East";
	}else if(moveX > columns-1){
		alert("Oops Karel ran into the wall. \nDo you have an extra move command?")
		moveX = 0;
		moveY = 0;
		dirFacing = "East";
	}else if(moveY < 0){
		alert("Oops Karel ran into the wall. \nDo you have an extra move command?")
		moveX = 0;
		moveY = 0;
		dirFacing = "East";
	}else if(moveY > rows-1){
		alert("Oops Karel ran into the wall. \nDo you have an extra move command?")
		moveX = 0;
		moveY = 0;
		dirFacing = "East";
	}
}

//This funciton resets the world and all the variables to their default value
function reset(){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	drawBoard();
	moveX = 0;
	moveY = 0;
	balls = [];
	drawBall();
	dirFacing = "East";
	drawKarel(0, 0, "East");
	
}

//////program\\\\\\
drawKarel(0, 0, "East");
drawBoard();
drawBall();