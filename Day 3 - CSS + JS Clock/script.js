const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hoursHand = document.querySelector('.hour-hand');


function setDate() {
   const now = new Date();


   const seconds = now.getSeconds()
   const secondsDegrees = ((seconds / 60) * 360) + 90;
   console.log(seconds)
   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

   const minutes = now.getMinutes()
   minutesDegrees = ((minutes / 60) * 360) + 90;
   console.log(minutes)
   minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

   const hours = now.getHours()
   const hoursDegrees = ((hours / 12) * 360) + 90;
   console.log(hours)
   hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}
setInterval(setDate, 1000)

