// Récupération des éléments du DOM
const generateArrayBtn = document.getElementById("generate-btn"); // bouton pour générer un nouveau tableau
const sortBtn = document.getElementById("sort-btn");              // bouton pour lancer le tri
const arrayContainer = document.getElementById("array-container");// conteneur des étapes du tri
const startingArray = document.getElementById("starting-array");  // conteneur du tableau initial

// Génère un entier aléatoire entre 1 et 100
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
};

// Crée un tableau de 5 entiers aléatoires
function generateArray() {
  return Array.from({length: 5}, generateElement)
};

// Crée un nouveau container <div> pour une étape du tri
function generateContainer() {
  const container = document.createElement("div");
  return container;
};

// Remplit un container avec les valeurs du tableau
function fillArrContainer(elmt, integersArray) {
  elmt.innerHTML = "";
  for (let i = 0; i < integersArray.length; i++) {
    const span = document.createElement("span");
    span.innerText = integersArray[i];
    elmt.appendChild(span);
  }
}

// Vérifie si deux entiers sont dans le bon ordre (croissant)
function isOrdered(firstInteger, secondInteger) {
  return firstInteger <= secondInteger;
}

// Échange deux éléments consécutifs si nécessaire
// Retourne true si un swap a eu lieu, sinon false
function swapElements(integersArray, numericIndex) {
  if(!isOrdered(integersArray[numericIndex], integersArray[numericIndex + 1])) {
    [integersArray[numericIndex], integersArray[numericIndex + 1]] =
      [integersArray[numericIndex + 1], integersArray[numericIndex]];
    return true;
  }
  return false;
}

// Met en évidence les deux éléments comparés en rouge
function highlightCurrentEls(htmlElement, numericIndex) {
  htmlElement.children[numericIndex].style.border = "2px dashed red";
  htmlElement.children[numericIndex + 1].style.border = "2px dashed red";
}

let currentArray = [];

// Gestion du bouton "Generate Array"
generateArrayBtn.addEventListener("click", () => {
  // Supprime toutes les étapes précédentes sauf le tableau initial
  Array.from(arrayContainer.children).forEach(child => {
    if (child !== startingArray) {
      child.remove();
    }
  });
  // Réaffiche le bouton de tri
  sortBtn.style.display = "flex";
  // Génère un nouveau tableau
  currentArray = generateArray();
  startingArray.innerHTML = "";
  fillArrContainer(startingArray, currentArray); // affiche le tableau initial
});

// Gestion du bouton "Sort" (version instantanée)
sortBtn.addEventListener("click", () => {
  highlightCurrentEls(startingArray, 0);
  sortBtn.style.display = "none"; // cache le bouton pendant le tri
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
  // Bordure verte sur le dernier état (tableau trié)
  arrayContainer.lastChild.style.border = "4px solid green";
});

// Version animée avec setInterval (affichage étape par étape)
/*
sortBtn.addEventListener("click", () => {
  sortBtn.style.display = "none";
  let i = 0;
  let sorted = false;

  const interval = setInterval(() => {
    if (i >= currentArray.length - 1) {
      // Fin d'une passe
      if (sorted) {
        clearInterval(interval);
        arrayContainer.lastChild.style.border = "4px solid green"; // dernier état en vert
        return;
      }
      // Nouvelle passe
      i = 0;
      sorted = true;
    }

    const swapped = swapElements(currentArray, i);
    if (swapped) {
      sorted = false;
    }

    const container = generateContainer();
    fillArrContainer(container, currentArray);
    highlightCurrentEls(container, i);
    arrayContainer.appendChild(container);

    i++;
  }, 500); // délai de 500ms entre chaque étape
});
*/
