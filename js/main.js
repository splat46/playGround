// Smooth scroll to next section
document.querySelectorAll('button a[href^="#"]').forEach((trigger) => {
  trigger.onclick = function (e) {
    e.preventDefault();
    let hash = this.getAttribute("href");
    let target = document.querySelector(hash);
    let headerOffset = 100;
    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
});

// Change backbround image
const buttonChangeBg = document.getElementById("buttonChangeBg");
const backgroundSection = document.getElementById("two");
const colors = ["red", "blue", "green", "yellow"];

backgroundSection.style.backgroundColor = "pink";
buttonChangeBg.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  backgroundSection.style.backgroundColor = colors[colorIndex];
}

// Section Counter + or -
// default = 0
let counter = 0;

const buttonCounterMore = document.getElementById("counterButtonMore");
const buttonCounterLess = document.getElementById("counterButtonLess");
const counterBoard = document.getElementById("counterBoard");

// increase by 1
buttonCounterMore.onclick = function () {
  counter = counter + 1;
  counterBoard.innerHTML = counter;
};
// decrease by 1
buttonCounterLess.onclick = function () {
  // prevent lower than 0
  if (counter === 0) {
    counter = 0;
  } else {
    counter = counter - 1;
  }
  counterBoard.innerHTML = counter;
};
