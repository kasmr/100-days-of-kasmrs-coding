const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

// Destructuring in ES6
// const [current, imgs] = [
//   document.querySelector("#current"),
//   document.querySelectorAll(".imgs img")
// ];

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  //reset the opacity of all images
  imgs.forEach(img => (img.style.opacity = 1));

  //change current image to src of clicked image
  current.src = e.target.src;

  //add fade in class
  current.classList.add("fade-in");

  //remove fade-in class after 0.5 sec
  setTimeout(() => current.classList.remove("fade-in"), 500);

  //Change the opacity to opacity variable
  e.target.style.opacity = opacity;
}
