---
layout: post
title: JavaScript physics engine
tags:
  - Physics
  - Programming
  - JavaScript
categories:
  - Portfolio
---

Physics engine to general purpose made up with JavaScript and **[p5.js](https://p5js.org)**

---

# Physics engine

  - 1 Probability                       
    - 1.1 Gaussian distribution         
    - 1.2 Custom distribution           
    - 1.3 Perlin noise                 
  - 2 Vectors                           
    - 2.1 Location                      
    - 2.2 Velocity                      
    - 2.3 Acceleration                  
  - 3 Forces                            
    - 3.1 General concept               
    - 3.2 Gravity                       
    - 3.3 Drag                          
    - 3.4 Friction                      
    - 3.5 Attraction       
    
---
    
## What is happening?
  

<iframe src="https://editor.p5js.org/eduardo.messias/embed/2uV8pWtca" width="800" height="400" scroll="no" align="center"></iframe> 

- 1 Applying gravity 
  - *Yellow ball is being pulled down by the weight of its own gravity*
  - *The same is happening with the blue ball*
  - *As there's no other force being applied to the balls they hit the ground at the same time*

<iframe src="https://editor.p5js.org/eduardo.messias/embed/EmBAlqDS9" width="800" height="400" scroll="no" align="center"></iframe>

- 2 Applying other forces (air resistance)
  - *Air resistance now is being applied to the balls*
  - *Their weight now affects the time they hit the ground*
  
<iframe src="https://editor.p5js.org/eduardo.messias/embed/09nFcoO9L" width="800" height="400" scroll="no" align="center"></iframe>

- 3 Applying friction
  - *With the friction force the balls eventually will stick to the ground, as in the real world*


