//SCRIPT 
const people = [
  {
    name: "OBAMA",
    initial:"AMERICAN",
   hints: ["FORMER PRESIDENT", "BASED ON 'SUS' (BRAZILIAN HEALTHCARE SYSTEM) TO CREATE AN AFFORDABLE COVERAGE", "DID NOT APOLOGIZE FOR JAPAN", "FORMER HARVARD STUDENT", "WON A NOBEL PEACE PRIZE (lol)"]
  },
  {
    name: "ANITTA",
    initial:"WORKED WITH SNOOP DOG",
    hints: ["FROM HONÓRIO GURGEL, BRAZIL", "HAS A PERFUME BRAND", "SINGER", "USED TO BE POOR", "INTERNATIONAL"]
  },
  // Add other people here
];
let currentPerson = 0;
let currentHint = 0;
let lives = 5; // Set the initial number of lives


const initialHint = document.getElementById("zeroTip");

const clueSpans = [
  document.getElementById("firTip"),
  document.getElementById("secTip"),
  document.getElementById("thTip"),
  document.getElementById("foTip"),
  document.getElementById("fiTip")
];


// Exibir a dica inicial automaticamente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  showInitialHint();
});

function showInitialHint() {
  if (people[currentPerson].initial !== "") {
    initialHint.textContent = people[currentPerson].initial;
  }
}


const livesP = document.getElementById("livesP");
updateLives(); // Update the number of lives on initial display

const inputWord = document.getElementById("inputWord");
const showButton = document.getElementById("showButton");
const guessButton = document.getElementById("guessButton");
const skipButton = document.getElementById("skipButton");

function showNextHint() {
  if (currentHint < people[currentPerson].hints.length) {
    clueSpans[currentHint].textContent = people[currentPerson].hints[currentHint];
    currentHint++;
    lives--;
    updateLives();
  }

  // Check if more hints are available to display
  if (currentHint < people[currentPerson].hints.length) {
    showButton.disabled = false;
  } else {
    showButton.disabled = true;
  }

  inputWord.value = "";
}


function updateLives() {
  livesP.textContent = " ❤".repeat(lives);
}

showButton.addEventListener("click", () => {
  showNextHint();
});

guessButton.addEventListener("click", () => {
  const personName = people[currentPerson].name;
  const guess = inputWord.value.toUpperCase();
  if (guess === personName) {
    alert("Congratulations, you got it right!");
    currentPerson = (currentPerson + 1) % people.length; // Move on to the next person
    currentHint = 0; // Reset hints for the new person
    lives = 5; // Reset lives for the new person
    updateLives();
    skipButton.click;
    showInitialHint();
    clueSpans.forEach(span => (span.textContent = "")); // Limpa as dicas exibidas
    showButton.disabled = false; // Habilita o botão Exibir para a nova pessoa
    inputWord.value = "";
  } else {
    alert("Try Again");
    showNextHint();
  }
  inputPal.value = "";
});

skipButton.addEventListener("click", () => {
  currentPerson = (currentPerson + 1) % people.length;
  currentHint = 0;
  lives = 5;
  updateLives();
  clueSpans.forEach(span => (span.textContent = ""));
  showButton.disabled = false; // Enable the Show button after skipping to the next person
  showInitialHint();
  inputWord.value = "";
 });

// CONFIGURING THE RULES POP-UP
const closePopupButton = document.getElementById("closeButton");
const popup = document.getElementById("popup");

function closePopup() {
  popup.style.display = "none";
}

closePopupButton.addEventListener("click", closePopup);

//REOPEN REVIEW BUTTON
const openButton = document.getElementById("openBtn");
// const popup = document.getElementById("popup"); // Substitua com o ID correto do pop-up

function openP() {
  popup.style.display = "block"; // Exibe o pop-up de avaliação}
}

openButton.addEventListener("click", openP);