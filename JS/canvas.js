 'use strict';

var canvas = null;
var context = null;
var assets = null;
var frameRate = 600/3;
var frame = 0;
var frames = [];
var img = new Image();

var setup = function () {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext('2d')
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	assets = ['../resources/Fox_assets/asset1.png',
			'../resources/Fox_assets/asset2.png',
			'../resources/Fox_assets/asset3.png']
	for (var i = 0 ; i <= assets.length - 1; i++) {
		frames.push(new Image());
		frames[i].onload = onImageLoad;
		frames[i].src=assets[i];
	}

	setInterval(animate, frameRate);


}

var animate = function Animate(){
		context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(frames[frame],100,100);
		frame = (frame+1)% frames.length;
};

var onImageLoad = function () {
	console.log("IMAGE LOADED")
	// context.drawImage(img, 100, 100);
}

 setup();