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
// Add event listenerr for carrousel's arrows

let arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", () => {
  console.log("arrowleft Clicked");
});

let arrowRigth = document.querySelector(".arrow_right");
arrowRigth.addEventListener("click", () => {
  console.log("arrowright Clicked");
});

// Add a bullet point for each element contains in slide table
let divDots = document.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
  divDots.innerHTML += `<a href="${slides[i].image}" class="dot"></a>
  `;
}
