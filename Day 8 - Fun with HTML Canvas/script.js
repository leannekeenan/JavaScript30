/*make a object that holds the value from the HTML element 'canvas' witht the id of 'draw'*/
const canvas = document.querySelector('#draw');
/*you are not drawing directly on the canvas element, but the context (can be 2D or 3D) */
const context = canvas.getContext('2d');
/*make context the same size as the viewport (currently set to 800px x 800px as stated in the HTML)*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//base settings
//stroke setting
/*starting stroke color*/
context.strokeStyle = '#000000';
/*line is rounded instead of square*/
context.lineJoin = 'round';
/*line connections are round instead of square*/
context.lineCap = 'round';
context.lineWidth = 10;

/*only draws when mouse is clicked and dragged*/
let isDrawing = false;
/*sets start and stop for the line being drawn*/
let lastX = 0;
let lastY = 0;

//called when mouse moves over canvas
function draw(event) {
  if (!isDrawing) return;
  console.log(event);
  context.beginPath();
  //starts from
  context.moveTo(lastX, lastY);
  //goes to
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();

  lastX = event.offsetX;
  lastY = event.offsetY;
    /*
  same as [lastX, lastY] = [event.offsetX, event.offsetY] (destructured)
  */
}
canvas.addEventListener('mousemove', draw);/*
canvas.addEventListener('mousemove', draw);*/
canvas.addEventListener('mousedown', (event) => {
  //allows for new lines to be made after mouseup goes back to mousedown
  isDrawing = true;
  [lastX, lastY] = [event.offsetX, event.offsetY]
});

canvas.addEventListener('mouseup', () => isDrawing = false);/*
canvas.addEventListener('mouseup', () => isDrawing = false);*/
canvas.addEventListener('mouseout', () => isDrawing = false);/*
canvas.addEventListener('mouseout', () => isDrawing = false);*/
