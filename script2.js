let buttonFilter = document.querySelectorAll("#myRadio");
let images = document.querySelectorAll(".imageFilter");
let allSelector = document.querySelectorAll("#animal");
let currentButton;
let searchValue = document.getElementById("searchBox");
let searchIndex;
let form = document.getElementsByName("all-animals")[0];

// Updates currentButton with which Radio Button is currently selected
function renderAnimal() {
  for (button of buttonFilter) {
    if (button.checked) {
      currentButton = button.value;
      animalImage();
      console.log(currentButton);
    }
  }
}

// Searches image classes/tags to find the search criteria and then removes filter class
function animalImage() {
  for (image of images) {
    if (currentButton === image.name) {
      image.classList.remove("imageFilter");
    } else if (currentButton === image.id) {
      image.classList.remove("imageFilter");
    } else if (searchIndex == image.alt && searchIndex !== "") {
      image.classList.remove("imageFilter");
    } else if (searchIndex == image.name) {
      image.classList.remove("imageFilter");
    } else {
      image.classList.add("imageFilter");
    }
  }
}

// Use input Search Bar function
searchValue.addEventListener("keyup", function (e) {
  e.preventDefault();
  searchIndex = searchValue.value;
  console.log("searchIndex:" + searchIndex);
  currentButton = 0;
  animalImage();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
});