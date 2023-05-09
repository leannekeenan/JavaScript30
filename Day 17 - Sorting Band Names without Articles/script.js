/*using array.sort without the beginning articles 
('A', 'An') being counted toward alphabetizing the band*/
//1. sort the array
//2. put them into the HTML list item in alphabetical order

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
//1. remove the articles from the band names



function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}
   



//2/ alphabetize the array
let sortedBands = bands.sort(function(a, z) {
    if(strip(a) > strip(z)) {
        return 1;
    }
    else {
        return -1;
    }
})
console.log(sortedBands)

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')