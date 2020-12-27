let counter = 0;

const buttonCounterMore = document.getElementById("counterButtonMore");
const buttonCounterLess = document.getElementById("counterButtonLess");
const counterBoard = document.getElementById("counterBoard");

buttonCounterMore.onclick = function () {
  counter = counter + 1;
  counterBoard.innerHTML = counter;
};

buttonCounterLess.onclick = function () {
  if (counter === 0) {
    counter = 0;
  } else {
    counter = counter - 1;
  }
  counterBoard.innerHTML = counter;
};
