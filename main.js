let slidePosition = 0;

const cards = document.getElementsByClassName("card");
const length = cards.length;

document.getElementById("next-slide").addEventListener("click", () => {
  moveNextSlide();
});

function moveNextSlide() {
  if (slidePosition === length - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlide();
}

document.getElementById("previous-slide").addEventListener("click", () => {
  movePreviousSlide();
});

function movePreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = 0;
  } else {
    slidePosition--;
  }
  updateSlide();
}

function updateSlide() {
  for (let card of cards) {
    card.classList.remove("card--visible");
    card.classList.add("card--invisible");
  }

  cards[slidePosition].classList.add("card--visible");
}
