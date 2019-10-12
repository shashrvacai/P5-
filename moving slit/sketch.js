let img,img1,img3;
let a = 0,
	w = 1;
var can1, can2, can3;

function preload() {
	img = loadImage('03.jpg');
	img1 = loadImage('bird.jpg');
	img2 = loadImage('fish.jpg');
	img3 = loadImage('02.jpg');
}

function setup() {
	can1 = createCanvas(750, 3000);

	//	can2 = createCanvas(750, 750);
	w = width / 500;

}

function draw() {
	background(255);
	image(img, 0, 0, width, 750);
	image(img1, 0, 0, width, 750);
	image(img2, 0, 0, width, 750);
	image(img3, 0, 0, width, 750);
	
	let x = sin(a) * width / 8 - 11.5;

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
