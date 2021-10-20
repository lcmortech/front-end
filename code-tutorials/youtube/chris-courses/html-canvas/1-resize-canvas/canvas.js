//setting the height and width in JS ensures it uses the entire browser space

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//paint/brush object for canvas
const ctx = canvas.getContext('2d');

//Draws Rectangle
//(x, y, width, height)
//100 pixels from left, of screen, and 100 pixels from top of screen
ctx.fillRect(100, 100, 100, 100)
ctx.fillRect(300, 300, 100, 100)
ctx.fillRect(300, 100, 100, 100)