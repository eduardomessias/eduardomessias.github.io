---
layout: post
title: Perlin noise
tags:
  - Programming
  - Computer graphics
categories:
  - The nature of code
---

How to organically change an object location on screen using a perlin noise as example

---

Perlin noise is a a technique used to produce natural appearing textures on computer generated surfaces for motion picture visual effects.
The development of Perlin Noise has allowed computer graphics artists to better represent the complexity of natural phenomena in visual effects for the motion picture industry. [Wikipedia](https://en.wikipedia.org/wiki/Perlin_noise).

An ellipse is drawn on the screen in each iteraction, given a specific location, which is coordinate (x e y combination), and also a specific size (it's possible to think the size as width and height, in this case, because it's fixed).
The location is manipulated by the chosen direction (east, west) in every new iteraction.

We apply the Perlin noise to the location.
First we have a variable **t** that will represent the time, as a unit of time, nothing denominated (such as miliseconds or seconds because it doesn't matter in this case).
Following to this, in each iteration, we increment this unit of time, by the velocity of the movement that we want to see in the ellipse animation.
Then it's applied the **noise** method to the **t** parameter;

So, from now on the t parameter is alreay treated to give us the organical movement we are trying to achieve.
The next step is to map this value to a reasonable value inside the limits of the canvas, so we do it.

**[p5](https://p5js.org)** library was used to make easer to draw on the screen, but it's basically JavaScript.

---

<iframe src="https://editor.p5js.org/eduardo.messias/embed/_uHfqinnE" width="400" height="400" scrolling="no"></iframe>

---

There are one main file in the project: **sketch.js**.

### sketch.js

``` js
let t = 0;

function setup() {
  createCanvas(400, 400);
  
  //frameRate(32)
}

function draw() {
  background(0);
  
  t = t + 0.01;
  
  let x =  noise(t)
  
  x = map(x, 0, 1, 0, width)
  
  ellipse(x, height / 2, 40, 40);
}
```

Perlin noise method source code can be found on the **[p5.js repository](https://github.com/processing/p5.js/blob/master/src/math/noise.js)**

---

*This post makes part of my studies about the video series [**The nature of code**](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aFlwukCmDf0-1-uSR7mklK), by Daniel Shiffman*.
