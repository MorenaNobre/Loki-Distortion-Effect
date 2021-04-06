//DISTORTION
new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./images/loki03.png",
  image2: "./images/loki02.png",
  displacementImage: "./images/diss.png",
  imagesRatio: 380 / 300,
});

/*=== NAVBAR ===*/
TweenMax.staggerFrom(".navbar div", 1.5, {
  delay: 1.5,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
}, 0.08);

/*=== LINKS ===*/
TweenMax.staggerFrom(".links ul li", 1.5, {
  delay: 1.5,
  opacity: 0,
  x: "-20",
  ease: Expo.easeInOut,
}, 0.08);

//TEXT
TweenMax.from(".text img", 1.5, {
  delay: 1,
  opacity: 0,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".text h3 .hidetext", 1.5, {
  delay: 1,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".text p .hidetext", 1.5, {
  delay: 1.2,
  opacity: 0,
  y: "100%",
  ease: Expo.easeInOut,
});

TweenMax.from(".text h2", 1.5, {
  delay: 2,
  opacity: 0,
  x: "-10000",
  ease: Expo.easeInOut,
});

/*=== TRICKSTER ===*/
TweenMax.from(".trickster img", 1.5, {
  delay: 0.8,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
});

TweenMax.from(".trickster p", 1.5, {
  delay: 0.9,
  opacity: 0,
  y: "20",
  ease: Expo.easeInOut,
});

/*=== DISTORTION ===*/
TweenMax.from(".distortion", 1.5, {
  delay: 2.5,
  opacity: 0,
  y: "10",
  ease: Expo.easeInOut,
});

/*=== OVERLAY ===*/
TweenMax.to(".first", 1.5, {
  delay: 0.5,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".second", 1.5, {
  delay: 0.7,
  top: "-100%",
  ease: Expo.easeInOut,
});

TweenMax.to(".third", 1.5, {
  delay: 0.9,
  top: "-100%",
  ease: Expo.easeInOut,
});

/*=== MOUSE FOLLOWER ===*/

const circleSvg = document.querySelector("svg");

let mouseX = 0;
let mouseY = 0;
let intv = 0;

window.addEventListener("mousemove", (event) => {
  // circleSvg.style.top = event.clientY - 45;
  // circleSvg.style.left = event.clientX - 45;

  mouseY = event.clientY / 16 - 45 / 16 + "rem";
  mouseX = event.clientX / 16 - 45 / 16 + "rem";
});

const mouseMouve = () => {
  intv += 1;
  circleSvg.style.top = mouseY;
  circleSvg.style.left = mouseX;

  circleSvg.style.opacity = 1 + Math.sin(intv * 0.07);

  window.requestAnimationFrame(mouseMouve);
};

mouseMouve();