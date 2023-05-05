const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide (event) {
    //loop over every image

    //logs how far is the page being scrolled down from the top of the browser
    console.log(window.scrollY)
    sliderImages.forEach(sliderImage => {
        //decide where the inage will be shown
        /*
        finds far from the bottom of the browser
         - gives pixel level for where the user is at the bottim of the viewport
        */
       //half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;

        //bottom of the image
        /*
        find bottom of image 
         - use offsetTop to get the top of an image and how far from the top of the window and sliderImage height to determine the actual height of the image
        */
        const imageBottom = sliderImage.offsetTop - sliderImage.height;

        //isHalfShown holds slideInAt values greater than the offsetTop of the slider image
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        /*makes sure the image is not scrolled all the way past, and if so a function for sliding back out will need to be engaged */
        const isNotScrolledPast = window.scrollY < imageBottom; 

        /*create if statement using 'isHalfShown' and 'isNotScrolledPast' to determine of image is half or fully visible*/
        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        }
        else {
            sliderImage.classList.remove('remove')
        }
        //console.log slideInAt
        //console.log(slideInAt)
    })
  //console.count(event)
};
//wrap the checkSlide parameter with the function debounce
window.addEventListener('scroll', debounce(checkSlide))

/*the debounce gets a function passed through it andat the time of scroll, will run debounce for the duration of the scroll and run checkSlide every 20 miliseconds*/
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }