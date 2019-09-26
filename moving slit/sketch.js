let img;
let a = 0,
	w = 1;
var can1, can2, can3;

function preload() {
	img = loadImage('fish.jpg');
}

function setup() {
	can1 = createCanvas(750, 750);

	//	can2 = createCanvas(750, 750);
	w = width / 500;

}

function draw() {
	background(255);
	image(img, 0, 0, width, height);
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