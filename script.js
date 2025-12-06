const generateArrayBtn = document.getElementById("generate-btn");
const arrayContainer = document.getElementById("array-container");
const startingArray = document.getElementById("starting-array");

function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
};

function generateArray() {
  return Array.from({length: 5}, generateElement)
};

function generateContainer() {
  const container = document.createElement("div");
  return container
};

function fillArrContainer(elmt, integersArray) {
  elmt.innerHTML = "";
  for (let i = 0; i < integersArray.length; i++) {
    const span = document.createElement("span");
    span.innerText = integersArray[i];
    elmt.appendChild(span);
  }
}

function isOrdered(firstInteger, secondInteger) {
  return firstInteger <= secondInteger;
}

function swapElements(integersArray, numericIndex) {
  if(!isOrdered(integersArray[numericIndex], integersArray[numericIndex + 1])) {
    [integersArray[numericIndex], integersArray[numericIndex + 1]] = [integersArray[numericIndex + 1], integersArray[numericIndex]]
  }
}

function highlightCurrentEls(htmlElement, numericIndex) {
  htmlElement.children[numericIndex].style.border = "2px dashed red";
  htmlElement.children[numericIndex + 1].style.border = "2px dashed red";
}

generateArrayBtn.addEventListener("click", () => {
  fillArrContainer(startingArray, generateArray());
})
