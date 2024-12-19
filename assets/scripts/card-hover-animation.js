function handleMouseEnter() {
  this.classList.add("s-card--hovered");
}

function handleMouseLeave() {
  this.classList.remove("s-card--hovered");
}

function addEventListenersToCard() {
  const cardElements = document.getElementsByClassName("s-card");

  Array.from(cardElements).forEach(card => {
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard(), false);