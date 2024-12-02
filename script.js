// Mazo de cartas (números del 1 al 10 por simplicidad, puedes usar combinaciones como "As de corazones").
const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Puntuaciones iniciales
let score1 = 0;
let score2 = 0;

// Selección de elementos
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const score1Element = document.getElementById("score1");
const score2Element = document.getElementById("score2");
const drawCardButton = document.getElementById("drawCard");
const winnerMessage = document.getElementById("winnerMessage");

// Función para barajar el mazo
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Función para sacar una carta aleatoria
function drawCard() {
  if (deck.length < 2) {
    winnerMessage.textContent = "¡El mazo está vacío! Reinicia el juego.";
    drawCardButton.disabled = true;
    return;
  }

  // Cada jugador toma una carta
  const player1Card = deck.pop();
  const player2Card = deck.pop();

  // Mostrar las cartas
  card1.textContent = `Carta: ${player1Card}`;
  card2.textContent = `Carta: ${player2Card}`;

  // Determinar el ganador de la ronda
  if (player1Card > player2Card) {
    score1++;
    winnerMessage.textContent = "Jugador 1 gana esta ronda.";
  } else if (player2Card > player1Card) {
    score2++;
    winnerMessage.textContent = "Jugador 2 gana esta ronda.";
  } else {
    winnerMessage.textContent = "Empate en esta ronda.";
  }

  // Actualizar los puntajes
  score1Element.textContent = score1;
  score2Element.textContent = score2;
}

// Barajar el mazo al inicio
shuffleDeck(deck);

// Agregar evento al botón
drawCardButton.addEventListener("click", drawCard);
