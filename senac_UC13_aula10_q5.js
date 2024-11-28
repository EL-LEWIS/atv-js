/**
 * Jogo de Adivinhação: O usuário tenta adivinhar um número entre 1 e 10.
 * 
 * Gera um número aleatório e permite ao usuário fazer tentativas até acertar
 * ou decidir sair do jogo. Oferece mensagens de orientação e validação para 
 * garantir uma experiência fluida.
 * @param {number} number
 * 
 * @return {void} - A função não retorna valor, apenas interage com o usuário.
 */

function game() {
  // Número aleatório entre 1 e 10
  const choice = Math.floor(Math.random() * 10) + 1;
  let attempt;

  console.log("Welcome to the Guessing Game!");
  console.log('Type "exit" to quit at any time.');

  // Loop para continuar pedindo até que o usuário acerte ou digite "exit"
  while (true) {
    // Solicita ao usuário que digite um número ou "exit"
    attempt = prompt("Choose a number from 1 to 10: ");

    // Verifica se o usuário quer sair do jogo
    if (attempt.toLowerCase() === "exit") {
      console.log("You chose to leave. Goodbye!");
      break;
    }

    // Converte a entrada para um número
    const numAttempt = Number(attempt);

    // Verifica se a entrada é um número válido
    if (isNaN(numAttempt)) {
      console.log("Invalid input. Please enter a number between 1 and 10.");
    } else if (numAttempt < 1 || numAttempt > 10) {
      console.log("Number out of range. Please choose a number between 1 and 10.");
    } else if (numAttempt === choice) {
      console.log("Congratulations! You guessed the correct number!");
      break;
    } else {
      console.log("Wrong guess. Please try again.");
    }
  }
}

// Chama a função
game();

