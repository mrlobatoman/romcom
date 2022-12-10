// Create variables targetting the relevant DOM elements here 👇
var homeButton = document.querySelector('.home-button')
var randButton = document.querySelector('.random-cover-button')
var saveButton = document.querySelector('.save-cover-button')
var makeOwnCoverButton = document.querySelector('.make-new-button')
var savedCoversButton = document.querySelector('.view-saved-button')
var createNewBookButton = document.querySelector('.create-new-book-button')
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')
var coverData = document.querySelector('.home-view')
var formData = document.querySelector('.form-view')
var savedData = document.querySelector('.saved-view')
var userInputCover = document.querySelector('.user-cover')
var userInputTitle = document.querySelector('.user-title')
var userInputDesc1 = document.querySelector('.user-desc1')
var userInputDesc2 = document.querySelector('.user-desc2')
var viewSavedCoversPage = document.querySelector('.saved-covers-section')

// We've provided a few variables below
var savedCovers = [
  new Cover('http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg', 'Sunsets and Sorrows', 'sunsets', 'sorrows')
]
var currentCover

// Add your event listeners here 👇
window.addEventListener('load', getRandomCover)
randButton.addEventListener('click', getRandomCover)
makeOwnCoverButton.addEventListener('click', switchToForm)
savedCoversButton.addEventListener('click', function() {
switchToSaved()
displaySavedCovers()
})
homeButton.addEventListener('click', switchToHome)
createNewBookButton.addEventListener('click', makeCustomBook)
saveButton.addEventListener('click', saveCover )
viewSavedCoversPage.addEventListener('dblclick', deleteCover)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}
function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)]
  coverTitle.innerText = titles[getRandomIndex(titles)]
  descriptor1.innerText = descriptors[getRandomIndex(descriptors)]
  descriptor2.innerText = descriptors[getRandomIndex(descriptors)]
  currentCover = new Cover(coverImage.src, coverTitle.innerText, descriptor1.innerText, descriptor2.innerText)
}
function switchToForm() {
  formData.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  coverData.classList.add('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
}
function switchToSaved() {
  homeButton.classList.remove('hidden')
  savedData.classList.remove('hidden')
  coverData.classList.add('hidden')
  formData.classList.add('hidden')
  saveButton.classList.add('hidden')
  randButton.classList.add('hidden')
}
function switchToHome() {
  saveButton.classList.remove('hidden')
  savedCoversButton.classList.remove('hidden')
  coverData.classList.remove('hidden')
  randButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
  savedData.classList.add('hidden')
  formData.classList.add('hidden')
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
    <div class= "mini-cover" id=${savedCovers[i].id}>
    <img class="cover-image" src=${savedCovers[i].cover}>
    <h2 class="cover-title">${savedCovers[i].title}</h2>
    <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    <img class="price-tag" src="./assets/price.png">
    <img class="overlay" src="./assets/overlay.png">
    </div>
    `
    }
  }
function saveCover() {
  if(!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    }
  }
function deleteCover(cover) {
  for (var i=0; i<savedCovers.length; i++) {
  if (cover.target.parentNode.id == savedCovers[i].id) {
      savedCovers.splice(i, 1)
      }
  }
  displaySavedCovers()
}