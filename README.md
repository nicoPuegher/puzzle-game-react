# ReactJS Puzzle Game

### This is a fully responsive ReactJS game where you can play with an image or numbers.

<br />

## Note

This project is also built in vanilla JavaScript and can be found here: [JavaScript Puzzle Game](https://github.com/nicoPuegher/puzzle-game) 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Available Scripts](#available-scripts)

<br />

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size
- Play with an image or numbers
- Choose a size
- Lose after 200 moves
- Win if the image or numbers are arranged in order (last block should be empty)

### Link

- Live Site URL: [GitHub Pages](https://puzzle-app-41c87.web.app/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- JavaScript Modules
- ReactJS
- React Context
- Firebase

### What I learned

- How to do a fairly good randomizer.

```js
for (let i = arr.length - 1; i > 0; i -= 1) {
  const random = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[random]] = [arr[random], arr[i]];
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
