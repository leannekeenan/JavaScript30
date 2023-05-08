const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
//determine how far the text shadow has to go
const shadowDistance = 20 //20px

function shadow(event) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

console.log(x, y)
//a shadowDistance of 20 gives a range from 10px to -10px
const x_shadowDistance = Math.round(x / width * shadowDistance - (shadowDistance / 2));
const y_shadowDistance = Math.round(y / height * shadowDistance - (shadowDistance / 2));

text.style.textShadow = `${x_shadowDistance}px ${y_shadowDistance}px 0 orange`;

//prints numberical pixel value for the position of the mouse
console.log(x_shadowDistance, y_shadowDistance)

}

hero.addEventListener('mousemove', shadow)