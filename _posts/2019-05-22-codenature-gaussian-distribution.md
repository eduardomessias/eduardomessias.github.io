---
layout: post
title: Gaussian distribution
tags:
  - Programming
  - Mathematics
  - Probabilty
categories:
  - The nature of code
---

How to manipulate probabilities using a gaussian distribution as example

---

Gaussian distribution is also known as normal distribution, as can be seeing in its definition in [Wikipedia](https://en.wikipedia.org/wiki/Normal_distribution).
An ellipse is drawn on the screen in each iteraction, given a specific location, which is coordinate (x e y combination), and also a specific size (it's possible to think the size as width and height, in this case, because it's fixed).
The location is manipulated by the chosen direction (east, west) in every new iteraction.

We apply the gaussian distribution to the location.
First, we specify a limit east value, as 100, and a limit west, as 300. The canvas width value is 400, so we basically saying that the ball will never be drawn in the intervals 0-99 and 301-400 of the canvas.
So, after this first is completed, the ball will appear in random location between the limits mentioned, and what this experiment demonstrates is that, by applying the Gaussian distribution, besides the locations are randomly choosed, there will always be a normal distribution - a medium point, which in this is center of the screen, and a proportional distribution to each of the limits (east and west).

There will not be a moment in time that the ball will be more east or west, by this definition.

This exercise helps to understand that distribution in a graphical way.

[p5](https://p5js.org) library was used to make easer to draw on the screen, but it's basically JavaScript.

---

<iframe src="https://editor.p5js.org/eduardo.messias/embed/QrAIGcehy" width="400" height="400" scrolling="no"></iframe>

---

There are one main file in the project: **sketch.js**.

### sketch.js

``` js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let xloc = gaussianRandom(100, 300);

  push();
  fill(0);
  noStroke();
  ellipse(xloc, height / 2, 16, 16);
  pop();
}

function gaussianRandom(min, max) {
  let gRandom = Math.random(min, max);

  let sd = max - min;
  let mean = sd / 2;

  gRandom = (gRandom * sd) + mean;
  
  return gRandom;
}
```

---

*This post makes part of my studies about the video series [**The nature of code**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK), by Daniel Shiffman*.
