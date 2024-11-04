console.log('%c HI', 'color: firebrick')

function filterBreeds(filterString){
    const results = document.querySelectorAll(`[id^="${filterString}"]`)
    results.forEach((res) => res.remove())
}

const dogContainer = document.querySelector("div#dog-image-container")
const breedList = document.querySelector("ul#dog-breeds")
const dropdownSearch = document.querySelector("select#breed-dropdown")

dropdownSearch.addEventListener("change",(event)=>filterBreeds(event.target.value))

function handleClickEvent(event){
    event.target.style.color = "green"
}

const createDogs = (data) => {
    //console.log(data.message)
    data.message.forEach((dogImg) => {
        const img = document.createElement("img")
        img.src = dogImg
        dogContainer.append(img)
    })
}

const createBreeds = (data) => {
    //console.log(data.message)
    const breedArr = Object.keys(data.message)
    breedArr.forEach((breed) => {
        const li = document.createElement("li")
        li.textContent = breed
        li.id = breed
        li.addEventListener('click',handleClickEvent)
        breedList.append(li)
    })
}


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
.then((response) => response.json())
.then((data) => createDogs(data))

fetch(breedUrl)
.then((response) => response.json())
.then((data) => createBreeds(data))