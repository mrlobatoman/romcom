// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var randButton = document.querySelector('.random-cover-button')
var makeOwnCoverButton = document.querySelector('.make-new-button')
var coverData = document.querySelector('.home-view')
var formData = document.querySelector('.form-view')
var homeButton = document.querySelector('.home-button')
var saveButton = document.querySelector('.save-cover-button')
var savedCoversButton = document.querySelector('.view-saved-button')
var savedData = document.querySelector('.saved-view')
var userInputCover = document.querySelector('.user-cover')
var userInputTitle = document.querySelector('.user-title')
var userInputDesc1 = document.querySelector('.user-desc1')
var userInputDesc2 = document.querySelector('.user-desc2')
var createNewBookButton = document.querySelector('.create-new-book-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedCoversPage = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', getRandomCover)
randButton.addEventListener('click', getRandomCover)
makeOwnCoverButton.addEventListener('click', switchToForm)
savedCoversButton.addEventListener('click', function() {
switchToSaved();
displaySavedCovers();
})
homeButton.addEventListener('click', switchToHome)
createNewBookButton.addEventListener('click', makeCustomBook)
saveCoverButton.addEventListener('click', saveCover )
viewSavedCoversPage.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)]
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText)
}
function switchToForm() {
  coverData.classList.add('hidden')
  formData.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
}
function switchToSaved() {
  coverData.classList.add('hidden')
  formData.classList.add('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedData.classList.remove('hidden')

}
function switchToHome() {
  homeButton.classList.add('hidden')
  savedData.classList.add('hidden')
  formData.classList.add('hidden')
  saveButton.classList.remove('hidden')
  savedCoversButton.classList.remove('hidden')
  coverData.classList.remove('hidden')
  randButton.classList.remove('hidden')
}
function makeCustomBook() {
  event.preventDefault()
  covers.push(userInputCover.value)
  titles.push(userInputTitle.value)
  descriptors.push(userInputDesc1.value)
  descriptors.push(userInputDesc2.value)
  coverImage.src = userInputCover.value
  coverTitle.innerText = userInputTitle.value
  descriptor1.innerText = userInputDesc1.value
  descriptor2.innerText = userInputDesc2.value
  currentCover = new Cover(userInputCover.src, coverTitle.innerText, descriptor1.innerText, userInputDesc2.innerText)
  switchToHome()
}
function displaySavedCovers() {
  viewSavedCoversPage.innerHTML = ""
  for(var i = 0; i < savedCovers.length; i++){
    viewSavedCoversPage.innerHTML += `
    <div class= 'mini-cover' id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </div>
    `
    }
  }
function saveCover(){
  if(!savedCovers.includes(currentCover)){
    savedCovers.push(currentCover)
    }
  }

function deleteCover(cover){
  for (var i=0; i<savedCovers.length; i++){
  if (cover.target.parentNode.id == savedCovers[i].id){
      savedCovers.splice(i, 1)
      }
  }
    displaySavedCovers()
}
//========NOTES=========//
//ARE THESE INPUTS BEING PUSHED INTO THEIR RESPECTIVE ARRAYS?
//PUSH OUR NEW INSTANCE OF CLASS INTO OUR SAVED COVERS PAGE


// ??Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data

// ??Use the values from the inputs to create a new instance of the Cover class


//=================QUESTIONS================//
// WHY DOES THE MAKE MY BOOK BUTTON RELOAD THE PAGE EVERYTIME IT'S CLICKED? NO OTHER BUTTONS HAD THIS SAME EFFECT.





//psuedocode here:
// Query Selector notes -
// syntax to affect "random cover button":

// document.querySelector('.random-cover-button')

// Classes to focus upon:

// <img class="cover-image" src="./assets/prairie.jpg"> This should be the cover image location, we will want to write code to enable cycling through all of ./assets in a random manner. Covers array in data.js
// <h2 class ="cover-title"> Windswept Hearts</h2> This should be the title displayed upon the cover image, we should pass the titles array into this location.
// <h3 class = "tagline"> 
// "A tale of"
//<span class="tagline-1">passion</span> For this line as well as tagline 2, this is where we will pass the array of words from descriptors.
//" and "
//<span class="tagline-2">woe</span> **^
//
// "random-cover-button"