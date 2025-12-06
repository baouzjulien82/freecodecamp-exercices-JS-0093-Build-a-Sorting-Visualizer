const generateArrayBtn = document.getElementById("generate-btn");
const sortBtn = document.getElementById("sort-btn");
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
    return true;
  }
  return false;
}

function highlightCurrentEls(htmlElement, numericIndex) {
  htmlElement.children[numericIndex].style.border = "2px dashed red";
  htmlElement.children[numericIndex + 1].style.border = "2px dashed red";
}
let currentArray = []
generateArrayBtn.addEventListener("click", () => {
  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArray) {
      child.remove();
    }
  });
  sortBtn.style.visibility = "visible";
  currentArray = generateArray();
  startingArray.innerHTML = "";
  fillArrContainer(startingArray, currentArray);
})

sortBtn.addEventListener("click", () => {
  highlightCurrentEls(startingArray, 0);
  sortBtn.style.visibility = 'hidden';
  let sorted = false;

while (!sorted) {
  sorted = true;
  for (let i = 0; i < currentArray.length - 1; i++) {
      const swapped = swapElements(currentArray, i);
      if(swapped) {
        sorted = false;
      }
      const container = generateContainer();
      fillArrContainer(container, currentArray);
      highlightCurrentEls(container, i);
      arrayContainer.appendChild(container);
    }
  }
});

