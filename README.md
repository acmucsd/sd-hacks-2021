# SD Hacks Workshop 2021: Building a Server in Javascript
Welcome! This repository contains all materials for our Javascript workshop at SD Hacks. 

[Slides](http://acmurl.com/sdhacks)
[Postman Workspace URL](https://www.getpostman.com/collections/21e447493c7aa584e05a)

## Installing Node.js 
Let's install node.js into our computers. Here are some links that you can follow to get it installed, based on the OS that you run.

[Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/) \
[Mac OS](https://www.webucator.com/how-to/how-install-nodejs-on-mac.cfm)

## How do I JavaScript? 
A quick introduction to JavaScript: 

### Variables
We define variables with three keywords: `let`, `var`, and `const`: 
```javascript
let a = 3;
var b = "three";
const c = 3.14;
```
Nowadays, `let` is preferred over `var` due to the fact that `let` is scoped locally (inside the block in which it is defined) and `var` is scoped globally. 

### Functions
We define functions using either the `functions` keyword or arrow notation: 
```javascript
function sum(a,b) {
  return a + b;
}

sum = (a,b) => a+b;
```
There are key differences between the two, though we'll be using them interchangably in this workshop. 

For more information, check out our Hack School workshop on JavaScript [here](https://github.com/acmucsd/hackschool/tree/master/part-2-intro-to-backend)!

## Appendix A: Callback Functions
You may have noticed that we're passing functions into our route functions, which seems strange at first sight, though there is a reason behind it. These are called callback functions, and we need them because our route function calls need to be *asynchronous*, meaning that they don't necessarily run in sequence. We want each route to serve its corresponding content immediately when a client connects, so to achieve this, all these functions take a callback function as an argument, and the callback will be called whenever the function finishes running, which in our case is whenever someone connects to a certain route. 
