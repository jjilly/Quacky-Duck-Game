var duck;
var canvLength=500;
var canvWidth=1200;
var hurdles=[];
var hurdleSpecial=0;

var score=0
var finalScore=0;
var highestScore=0;

var img;
var duckQuackSound;
var backgroundMusic;

function preload(){
	duckQuackSound=loadSound('sounds/quackSound.mp3');
	backgroundMusic=loadSound('sounds/Yiruma.mp3')
	img = loadImage('images/duck.png');
}

function setup(){
	createCanvas(canvWidth,canvLength);
	backgroundMusic.loop()
	//hurdles.push(new hurdle);
	//console.log(duck);
	duck = new duck();
}

function draw(){
	background(51);//color for backsround
	duck.appear(); 
	duck.update();

	if(frameCount % 20 ===0){ //frameCount p5.dom function
		var hurdleNew=new hurdle();
		if(score%4===(3 || 2)){
			hurdleNew.specialValue();
		}
		hurdles.push(hurdleNew);


	}
	for(i=hurdles.length-1;i>=0;i--){
		hurdles[i].appear();
		hurdles[i].update();

		if(hurdles[i].gameOver(duck)){
			hurdles[i].value=0;
			finalScore=score;
			if(highestScore<finalScore){
				highestScore=finalScore;
			}
			score=0;
		}else if(hurdles[i].x<duck.x ){
				score+=hurdles[i].value;
				textSize(20);
				text("Current Score is: "+score,18,40);
				textSize(20);
				text("Your Highest Score: "+highestScore,18,20);
				hurdles[i].value=0;
		}

		if(hurdles[i].x< -hurdles[i].wid){
			hurdles.splice(i,1);
		}
	}

}

function keyPressed(){ //p5.DOM event function
	if(key===' '){ //p5 key function
		duck.move();
	}
}
