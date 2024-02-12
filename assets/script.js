const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Change color of selected point

function updatePointSelected() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (bannerImage.src.endsWith(slides[index].image)) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
function updateImageAndTagLine() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerTagLine.innerHTML = slides[currentIndex].tagLine;
}

//Initialise all dots for each image in slides and synchronise index of carousel when user clic on a dot to change the slide

let divDots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("a");
  dot.href = "#";
  dot.className = "dot";
  divDots.appendChild(dot);
  dot.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = i;
    bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
    bannerTagLine.innerHTML = slides[i].tagLine;
    updatePointSelected();
  });
}

// Add arrows function with infinite slide
let arrowLeft = document.querySelector(".arrow_left");
let arrowRigth = document.querySelector(".arrow_right");
let bannerImage = document.querySelector(".banner-img");
let bannerTagLine = document.querySelector("#banner p");
let currentIndex = 0;

arrowLeft.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
  updateImageAndTagLine();
  updatePointSelected();
});

arrowRigth.addEventListener("click", (event) => {
  event.preventDefault();
  currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
  updateImageAndTagLine();
  updatePointSelected();
});

updatePointSelected();
