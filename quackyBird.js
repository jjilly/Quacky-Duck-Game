function duck(){ //constructor for duck
	this.y=canvLength/2;
	this.x=canvWidth/4;

	this.duckX=35;
	this.duckY=32;

	this.g=.4; //gravity
	this.up=-25; //keyPress acceleration upwards
	this.v=0; //initial velocity

	this.appear=function(){
		image(img,this.x,this.y);
		imageMode(CENTER);
		//rect(this.x,this.y,this.duckX,this.duckY)
	}

	this.move=function(){
		this.v+= this.up;
		this.v*=.9; //scaling acceleration
		duckQuackSound.play();
	}

	this.update=function(){
			this.v+=this.g; //velocity of duck acceletated by gravity

			var newYPos=this.y+this.v
			if(newYPos>=canvLength-this.duckX){//reaches bottom of canvas
				this.y=canvLength-20;//update y pos of duck
				this.v=0;
			}else{
				this.y=newYPos;
				this.v*=.7;//scaling acceleration
			}
			newYPos=this.y+this.v
			if(newYPos<0){
				this.y=0;//update y pos of duck
				this.v=0;
			} 
	}
}
