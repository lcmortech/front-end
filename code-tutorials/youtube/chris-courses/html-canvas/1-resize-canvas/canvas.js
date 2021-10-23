//setting the height and width in JS ensures it uses the entire browser space

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//paint/brush object for canvas
const ctx = canvas.getContext('2d');

//fills color, must be ordered before draw tools
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';

//Draws Rectangle
//(x, y, width, height)
//100 pixels from left, of screen, and 100 pixels from top of screen
// ctx.fillRect(100, 100, 100, 100)
// ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
// ctx.fillRect(300, 300, 100, 100)
// ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
// ctx.fillRect(300, 100, 100, 100)



//Line
// ctx.beginPath(); //initiates path, do not connect to anything
// ctx.moveTo(50, 300); //(x, y) coordinate
// ctx.lineTo(300, 100); //(x, y) line to a new point
// ctx.lineTo(400, 300)


// //adds color to lines
// ctx.strokeStyle = '#fa34a3'; //rgb/hsl/text
// //stroke method must be called to see line
// ctx.stroke()

//create circles/arcs
//(x, y, radius, start angle (radiant), end angle (radiant))
//radiant for circle = Math.PI * 2
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke(); 

// for(let i = 0; i < 3; i++) {
//     ctx.beginPath();
//     ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
//     ctx.stroke(); 
// }
//circles end up on top of each other by default

//increase number of interations for more/less circles
// for(let i = 0; i < 12; i++) {
//     //keeps circle within window width
//     let x = Math.random() * window.innerWidth;
//     //keeps circle within window height
//     let y = Math.random() * window.innerHeight;
//     //color randomizers
//     let colorR = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//     let colorB = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//     let colorG = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
//     ctx.beginPath();
//     ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue' //'rgba(colorR, colorB, colorG, 0.5)';
//     ctx.stroke(); 
// }

    ctx.beginPath();
    ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
    ctx.stroke(); 