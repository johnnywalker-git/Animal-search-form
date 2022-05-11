let animalRadios = document.forms[0].elements.animal;
console.log("animal image", animalRadios);

let images = document.querySelectorAll(".imageFilter");
console.log(images);



let imageChildren = images.attributes;
// let imageArray = Array.prototype.filter(n =)
for(let i =0; i <images.length; i++) {
  console.log("images.attributes")
}



for (const animalRadio of animalRadios) {
    animalRadio.addEventListener("change", filterAnimals)}
  
  function filterAnimals() {

if (animalRadios.value === "all") {
console.log("yes")
images.forEach(img => img.classList.remove('imageFilter'))

} 

else if (animalRadios.value === "lion") {
console.log("yes")
if (images === animalRadios.value) {
images.forEach(img => img.classList.remove('imageFilter'))
}

else {
  console.log("not working")
}
// images.forEach(img => img.classList.remove('imageFilter'))

}

else {
  console.log("does not work")
}


// for(image in images {
//   if animalRadios.value === images.
// })



// if (animalRadios.value === images.attributes.animal) {
  

}
// console.log(imageArray)
