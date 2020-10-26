function start(){
	for(var i = 0; i < 6; i++){
		putBall();
		move();
	}
	turnAround();
	move();
	move();
	move();
	turnAround();
	move();
	takeBall();
}

function turnAround(){
	turnRight();
	turnRight();
}