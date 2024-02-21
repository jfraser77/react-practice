import React, { useRef, useEffect } from "react";

const scoreDisplay = document.getElementById("score");

export function Canvas(props) {
  const canvasRef = useRef(null); // create reference to teh canvas element

  let x = 200; // starting horizontal position of ball
  let y = 150; // starting vertical position of ball
  let dx = 1; // amount ball should move horizontally
  let dy = -3; // amount ball should move vertically

  let context, width, height, paddlex, bricks, brickWidth;
  let canvasMinX = 0;
  let canvasMaxX = 0;
  let paddleh = 10; // paddle height (pixels)
  let paddlew = 75; // paddle width (pixels)
  let intervalId = 0; // track refresh rate for calling draw()
  let nrows = 5; // number of rows of bricks
  let ncols = 5; //  number of columns of bricks
  let brickHeight = 15; // height of each brick
  let padding = 1; // how far apart bricks are spaced

  let ballRadius = 10; //size of ball (pixels);
  // change colors of bricks -- add as many colors as you like
  let brick_colors = ["green", "purple", "blue"];
  let paddlecolor = "black";
  let ballcolor = "red";
  let backcolor = "grey";

  let score = 0; // store the number of bricks eliminated
  let paused = false; // keeps track of whether the game is paused (true) or not (false)

  // used to draw the ball
  const circle = (x, y, r) => {
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * width, true);
    context.closePath();
    context.fill();
  };

  // used to draw each brick & the paddle
  const rect = (x, y, w, h) => {
    context.beginPath();
    context.rect(x, y, w, h);
    context.closePath();
    context.fill();
  };

  // initialize array of bricks to be visible (true)
  const init_bricks = () => {
    bricks = new Array(nrows);
    for (let i = 0; i < nrows; i++) {
      // for each row of bricks
      bricks[i] = new Array(ncols);
      for (let j = 0; j < ncols; j++) {
        // for each column of bricks
        bricks[i][j] = true;
      }
    }
  };

  // render the bricks
  const draw_bricks = () => {
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
  };

  // clear the screen in between drawing each animation
  const clear = () => {
    context.clearRect(0, 0, width, height);
    rect(0, 0, width, height);
  };

  const pause = () => {
    if (paused) {
      // if paused, begin animation again
      start_animation();
    } else {
      // if unpaused, clear the animation
      stop_animation();
    }
    paused = !paused;
  };

  const draw = () => {
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
      score++;
      scoreDisplay.innerText = score;
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
  };

  const start_animation = () => {
    intervalId = setInterval(draw, 10);
  };

  const stop_animation = () => {
    clearInterval(intervalId);
  };

  // drawing code when the component mounts
  useEffect(() => {
    //Draw canvas here...
    const canvas = canvasRef.current; // current state of canvas
    const context = canvas.getContext("2d"); // 2D context of canvas element to draw on.
    width = props.width;
    height = props.height;
    paddlex = width / 2;
    brickWidth = width / ncols - 1;
    canvasMinX = canvas.offsetLeft;
    canvasMaxX = canvasMinX + width; // maximum canvas x bounds

    init_bricks();
    start_animation();
    // context.fillStyle = "red"; // minimum canvas x bounds // context to fill canvas is 'red'
    // context.fillRect(0, 0, props.width, props.height); // fill entire canvas in rectangle.

    // const clickHandler = () => {
    //   context.fillStyle = "blue";
    //   context.fillRect(0, 0, props.width, props.height);
    // };

    // canvas.addEventListener("click", clickHandler);

    // return () => {
    //   canvas.removeEventListener("click", clickHandler);
    // };
  }, []);

  return (
    <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
  );
}
