---
layout: post
title: Random walker
tags:
  - Programming
  - Mathematics
  - Probabilty
categories:
  - The nature of code
---

How to manipulate probabilities using a random walker as example

---

A random walker is a simple application to showcase probabilty.
A point is drawn on the screen in each iteraction, given a specific coordinate (x e y combination).
The coordinate can be manipulated by the chosen direction (east, west, south or north) in every new iteraction.
By the number of directions to choose we can estimate - generally - that each direction has 25% of chances of being the chosen one.

This exercise helps to understand that probabilty manipulation in a graphical way.
Sliders can be used to manipulate probabilties and the source code is open and can be changed to make it more interesting as well.

[p5](https://p5js.org) library was used to make easer to draw on the screen, but it's basically JavaScript.

---

<iframe src="https://editor.p5js.org/eduardo.messias/embed/LW49RNzF3" width="400" height="400" scrolling="no"></iframe>

---

There are two main files in the project: **sketch.js** and **walker.js**.

**sketch.js** contains the graphics manipulation part of the code while **walker.js** is the class that trully contains the probabilty part.

### sketch.js

``` js
let walker;
let e, w, s, n;
let eTxt, wTxt, sTxt, nTxt;

function setup() {
  createCanvas(400, 400);
  background(0);
  
  walker = new Walker();
  
  createSliders();
}

function draw() {
  background(0);
  displayInstructions();
  setSliders();
  
  walker.walk();
  walker.render();
}

function displayInstructions() {
  noStroke();
  fill(255);
  text('Random walker', 2, 16);
  textStyle(ITALIC);
  text('The sliders represents the < N probablity to each direction', 2, 32);
}

function createSliders() {
  e = createSlider();
  w = createSlider();
  s = createSlider();
  n = createSlider();
  
  e.position(0, height - 120);
  w.position(0, e.y + e.height + 12);
  s.position(0, w.y + w.height + 12);
  n.position(0, s.y + s.height + 12);
  
  e.value(walker.choiceProbabilities.east);
  w.value(walker.choiceProbabilities.west);
  s.value(walker.choiceProbabilities.south);
  n.value(walker.choiceProbabilities.north);
}

function setSliders() {
  walker.choiceProbabilities.east = e.value() / 100;
  walker.choiceProbabilities.west = w.value() / 100;
  walker.choiceProbabilities.south = s.value() / 100;
  walker.choiceProbabilities.north = n.value() / 100;
  
  noStroke();
  fill(255);
  text(`east (${walker.choiceProbabilities.east})`, e.width - 54, e.y);
  text(`west (${walker.choiceProbabilities.west})`, w.width - 54, w.y);
  text(`south (${walker.choiceProbabilities.south})`, s.width - 54, s.y);
  text(`north (${walker.choiceProbabilities.north})`, n.width - 54, n.y);
}
```

### walker.js

``` js
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    
    this.pathChoice = 0.00;
    this.choiceProbabilities = {
      east: 0.25,
      west: 0.50,
      south: 0.75,
      north: 1
    }
    
    this.path = [];
  }
  
  choosePath(direction) {
    this.pathChoice = direction || random(0, 1);
  }
  
  changeDirection() {
    let choice = this.pathChoice;
    
    if (choice < this.choiceProbabilities.east) {
      this.x++;
    } else if (choice < this.choiceProbabilities.west) {
      this.x--;
    } else if (choice < this.choiceProbabilities.south) {
      this.y++;
    } else if (choice < this.choiceProbabilities.north) {
      this.y--;
    }
    
    this.fixDirection();
  }
  
  fixDirection() {
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }

  walk(direction) {
    this.choosePath(direction);
    this.changeDirection();
    
    this.path.push({x: this.x, y: this.y});
  }

  render() {
    this.path.forEach((_point) => {
      stroke(255);
      point(_point.x, _point.y);
    });
  }
}
```
