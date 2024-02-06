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
// Add event listener for carrousel's arrows

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("arrowleft Clicked");
});

let arrowRigth = document.querySelector(".arrow_right");
arrowRigth.addEventListener("click", () => {
  console.log("arrowright Clicked");
});

// Change color of selected point

function updatePointSelected() {
  let dots = document.querySelectorAll(".dot");
  dots.forEach((dot, j) => {
    if (bannerImage.src.endsWith(slides[j].image)) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

//Initialise all dots for each image in slides

let divDots = document.querySelector(".dots");
let bannerImage = document.querySelector(".banner-img");
let bannerTagLine = document.querySelector("#banner p");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("a");
  dot.href = "#";
  dot.className = "dot";
  divDots.appendChild(dot);
  dot.addEventListener("click", (event) => {
    event.preventDefault();
    bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
    bannerTagLine.innerHTML = slides[i].tagLine;
    updatePointSelected();
  });
}

updatePointSelected();
