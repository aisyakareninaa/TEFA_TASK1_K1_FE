// Product
const clc = document.querySelector(".cancle");
const arr = document.querySelector(".arr-container");
const left_container = document.querySelector(".left-container");
arr.addEventListener("click", () => {
  arr.classList.add("active-arr");
  if (left_container.classList.contains("off")) {
    left_container.classList.remove("off");
    left_container.classList.add("active");
  }
});
clc.addEventListener("click", () => {
  arr.classList.remove("active-arr");
  if (left_container.classList.contains("active")) {
    left_container.classList.remove("active");
    left_container.classList.add("off");
  }
});

const clc1 = document.querySelector(".cancle1");
const arr1 = document.querySelector(".arr1");
const left_container1 = document.querySelector(".left1");
arr1.addEventListener("click", () => {
  arr1.classList.add("active-arr");
  if (left_container1.classList.contains("off")) {
    left_container1.classList.remove("off");
    left_container1.classList.add("active");
  }
});
clc1.addEventListener("click", () => {
  arr1.classList.remove("active-arr");
  if (left_container1.classList.contains("active")) {
    left_container1.classList.remove("active");
    left_container1.classList.add("off");
  }
});

const clc2 = document.querySelector(".cancle2");
const arr2 = document.querySelector(".arr2");
const left_container2 = document.querySelector(".left2");
arr2.addEventListener("click", () => {
  arr2.classList.add("active-arr");
  if (left_container2.classList.contains("off")) {
    left_container2.classList.remove("off");
    left_container2.classList.add("active");
  }
});
clc2.addEventListener("click", () => {
  arr2.classList.remove("active-arr");
  if (left_container2.classList.contains("active")) {
    left_container2.classList.remove("active");
    left_container2.classList.add("off");
  }
});

const clc3 = document.querySelector(".cancle3");
const arr3 = document.querySelector(".arr3");
const left_container3 = document.querySelector(".left3");
arr3.addEventListener("click", () => {
  arr3.classList.add("active-arr");
  if (left_container3.classList.contains("off")) {
    left_container3.classList.remove("off");
    left_container3.classList.add("active");
  }
});
clc3.addEventListener("click", () => {
  arr3.classList.remove("active-arr");
  if (left_container3.classList.contains("active")) {
    left_container3.classList.remove("active");
    left_container3.classList.add("off");
  }
});
// End Product

// Service
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;

next.addEventListener("click", () => {
  if (currentIndex == slides.length - 1) {
    currentIndex = 0;
    document.querySelector(".active").classList.remove("active");
    slides[currentIndex].classList.add("active");
    return;
  }

  if (currentIndex < slides.length) {
    document.querySelector(".active").classList.remove("active");
    currentIndex++;
    slides[currentIndex].classList.add("active");
  }
});

prev.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = slides.length - 1;
    document.querySelector(".active").classList.remove("active");
    slides[currentIndex].classList.add("active");
    return;
  }

  if (currentIndex < slides.length) {
    document.querySelector(".active").classList.remove("active");
    currentIndex--;
    slides[currentIndex].classList.add("active");
  }
});
// End Service