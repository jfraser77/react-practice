import { useState, useEffect, useRef } from "react";

//-------------------------
// GLOBAL VARIABLES
//-------------------------
let x = 200; // starting horizontal position of ball
let y = 150; // starting vertical position of ball
let dx = 1; // amount ball should move horizontally
let dy = -3; // amount ball should move vertically
// variables set in init()

let context, width, height, paddlex, bricks, brickWidth;
let paddleh = 10; // paddle height (pixels)
let paddlew = 75; // paddle width (pixels)
let canvasMinX = 0; // minimum canvas x bounds
let canvasMaxX = 0; // maximum canvas x bounds
let intervalId = 0; // track refresh rate for calling draw()
let nrows = 5; // number of rows of bricks
let ncols = 5; // number of columns of bricks
let brickHeight = 15; // height of each brick
let padding = 1; // how far apart bricks are spaced

let ballRadius = 10; // size of ball (pixels)
// change colors of bricks -- add as many colors as you like
let brick_colors = ["maroon", "gold"];
let paddlecolor = "black";
let ballcolor = "black";
let backcolor = "grey";

let score = 0; // store the number of bricks eliminated
let paused = false; // keeps track of whether the game is paused (true) or not (false)

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
  "brown",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

function App() {
  const [canvasContext, setCanvasContext] = useState(null);

  const canvasRef = useRef(null);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const canvas = canvasRef.current;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    paddlex = width / 2;
    brickWidth = width / ncols - 1;

    //canvasMinX = canvas.offset().left;
    //canvasMaxX = canvasMinX + width;

    const context = canvas.getContext("2d");
    setCanvasContext(context);

    // run draw function every 10 milliseconds to give
    // the illusion of movement
    init_bricks();
    start_animation();
  }, [canvasRef]);

  function reload() {
    x = 200; // starting horizontal position of ball
    y = 150; // starting vertical position of ball
    dx = 1; // amount ball should move horizontally
    dy = -3; // amount ball should move vertically
  }

  // used to draw the ball
  function circle(x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }

  // used to draw each brick & the paddle
  function rect(x, y, w, h) {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fill();
  }

  // clear the screen in between drawing each animation
  function clear() {
    context.clearRect(0, 0, width, height);
    rect(0, 0, width, height);
  }

  // initialize array of bricks to be visible (true)
  function init_bricks() {
    bricks = new Array(nrows);
    for (let i = 0; i < nrows; i++) {
      // for each row of bricks
      bricks[i] = new Array(ncols);
      for (let j = 0; j < ncols; j++) {
        // for each column of bricks
        bricks[i][j] = true;
      }
    }
  }

  // render the bricks
  function draw_bricks() {
    for (let i = 0; i < nrows; i++) {
      // for each row of bricks
      for (let j = 0; j < ncols; j++) {
        // for each column of bricks
        // set the colors to alternate through
        // all colors in brick_colors array
        // modulus (%, aka remainder) ensures the colors
        // rotate through the whole range of brick_colors
        context.fillStyle = brick_colors[(i + j) % brick_colors.length];
        if (bricks[i][j]) {
          rect(
            j * (brickWidth + padding) + padding,
            i * (brickHeight + padding) + padding,
            brickWidth,
            brickHeight
          );
        } // else if bricks[i][j] is false it's already been hit
      }
    }
  }

  // render the bricks
  function draw_bricks() {
    for (let i = 0; i < nrows; i++) {
      // for each row of bricks
      for (let j = 0; j < ncols; j++) {
        // for each column of bricks
        // set the colors to alternate through
        // all colors in brick_colors array
        // modulus (%, aka remainder) ensures the colors
        // rotate through the whole range of brick_colors
        context.fillStyle = brick_colors[(i + j) % brick_colors.length];
        if (bricks[i][j]) {
          rect(
            j * (brickWidth + padding) + padding,
            i * (brickHeight + padding) + padding,
            brickWidth,
            brickHeight
          );
        } // else if bricks[i][j] is false it's already been hit
      }
    }
  }

  function draw() {
    // before drawing, change the fill color
    context.fillStyle = backcolor;
    clear();
    context.fillStyle = ballcolor;
    //draw the ball
    circle(x, y, ballRadius);
    context.fillStyle = paddlecolor;
    //draw the paddle
    rect(paddlex, height - paddleh, paddlew, paddleh);
    draw_bricks();

    //check if we have hit a brick
    let rowheight = brickHeight + padding;
    let colwidth = brickWidth + padding;
    let row = Math.floor(y / rowheight);
    let col = Math.floor(x / colwidth);
    //if so reverse the ball and mark the brick as broken
    if (y < nrows * rowheight && row >= 0 && col >= 0 && bricks[row][col]) {
      dy = -dy;
      bricks[row][col] = false;
    }

    //contain the ball by rebouding it off the walls of the canvas
    if (x + dx > width || x + dx < 0) dx = -dx;

    if (y + dy < 0) {
      dy = -dy;
    } else if (y + dy > height - paddleh) {
      // check if the ball is hitting the
      // paddle and if it is rebound it
      if (x > paddlex && x < paddlex + paddlew) {
        dy = -dy;
      }
    }
    if (y + dy > height) {
      //game over, so stop the animation
      stop_animation();
    }
    x += dx;
    y += dy;
  }

  function start_animation() {
    intervalId = setInterval(draw, 10);
  }

  function stop_animation() {
    clearInterval(intervalId);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        onClick={() => {
          canvasContext.fillStyle = getRandomColor();
          canvasContext.fillRect(
            0,
            0,
            canvasContext.canvas.width,
            canvasContext.canvas.height
          );
        }}
      ></canvas>
      <p>Mouse moves platform * Press any key to pause</p>
      <button onclick="reload()">Play again</button>
      <div id="score"></div>
    </div>
  );
}

export default App;
