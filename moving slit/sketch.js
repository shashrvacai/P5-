let img, img1, img3;
let a = 0,
	w = 1;
var can1, can2, can3;
var imgSize = 750;

function preload() {
	img = loadImage('03.jpg');
	img1 = loadImage('bird.jpg');
	img2 = loadImage('fish.jpg');
	img3 = loadImage('02.jpg');
}

function setup() {
	can1 = createCanvas(windowWidth, 3000);

	//	can2 = createCanvas(750, 750);
	w = imgSize / 500;

}

function draw() {
	background(255);
	imageMode(CENTER);
	image(img, width / 2, 375, imgSize, imgSize);
	image(img1, width / 2, 1125, imgSize, imgSize);
	image(img2, width / 2, 1775, imgSize, imgSize);
	image(img3, width / 2, 2650, imgSize, imgSize);

	let x = sin(a) * 93 - 13.5;

	fill(0);

	push();
	translate(x + width / 4, 0);
	drawSlit();
	pop();

	a += 0.005;

}

function drawSlit() {
	for (let i = -width / 2; i < width; i += 5 * w) {
		rect(i, 0, w * 4, height);
	}
	
}
