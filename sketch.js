let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;
const ballRadius = 20;

function setup() {
  createCanvas(800, 600);
  // Initialize ball position and speed
  ballX = width / 2;
  ballY = height / 2;
  ballSpeedX = 5;
  ballSpeedY = 5;
}

function draw() {
  background(200);

  // Move the ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Check for collision with the boundaries
  if (ballX > width - ballRadius || ballX < ballRadius) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballY > height - ballRadius || ballY < ballRadius) {
    ballSpeedY = -ballSpeedY;
  }

  // Draw the ball
  fill(50, 121, 168);
  ellipse(ballX, ballY, ballRadius * 2, ballRadius * 2);
}
