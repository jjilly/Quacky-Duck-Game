function hurdle(){
	this.top=random(40,canvLength/2.5);
	this.bottom=random(40,canvLength/2.5);
	this.x=canvWidth;
	this.wid=15;
	this.frameMove=3;
	this.changeColour=false;
	this.changeColourSpecial=false;
	this.value=1;
	this.specialValue=0;

	//check each hurdle is passable
	playable();

	this.appear=function(){
		fill(255);
		if(this.changeColour){fill('rgb(100%,0%,10%)');}
		if(this.changeColourSpecial){fill('rgba(0,255,0, 0.25)');}
		rect(this.x,0,this.wid,this.top);
		rect(this.x,canvLength-this.bottom,this.wid,this.bottom);
		console.log("hurdle drawn");
	}

	this.gameOver=function(duck){
		if(!this.changeColourSpecial){
			if(duck.y<this.top || duck.y>height-this.bottom){
				if(duck.x>this.x && duck.x<this.x+this.wid){
					this.changeColour=true;
					console.log("GAME OVER");
					return true;
				}
			}else{
				return false;
			}
		}
	}

	this.specialValue=function(){
		this.specialValue=10;
		this.changeColourSpecial=true;
	}

	this.update=function(){
		this.x-=this.frameMove;
	}

}
function playable(){
	while(10 *duck.duckY>this.bottom-this.top > 2*  duck.duckY){
		hurdle.top=random(canvLength/2);
		hurdle.bottom=random(canvLength/2);
	}
}
