const shiftClass = document.querySelector(".imgShift");
const images = document.querySelector(".background");
const imgWidth = images.scrollWidth;
let baseShift = 0;
shiftClass.style.marginLeft = `${baseShift}%`;

const shiftLeft = function () {
  baseShift += 97;
  shiftClass.style.marginLeft = `${baseShift}%`;
  console.log(baseShift);
};

const shiftRight = function () {
  baseShift -= 97;
  shiftClass.style.marginLeft = `${baseShift}%`;
  console.log(baseShift);
};
