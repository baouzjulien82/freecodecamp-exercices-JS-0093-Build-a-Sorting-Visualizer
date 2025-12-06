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
  for(let i = 5; i > 0; i--) {
    const span = document.createElement("span")
    elmt.appendChild(span)
    span.innerText = integersArray[Math.floor(Math.random() * integersArray.length)];
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
  
})
