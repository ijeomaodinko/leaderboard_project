// Define the addScore function
function addScore(user, score, id) {
  // Implementation of adding score to the DOM
  const scoresItem = document.getElementById('scoreRender');
  const scoreElement = document.createElement('div');
  scoreElement.className = ('score-collection');
  scoreElement.innerHTML = `<p class="pview">${user} <span class="pviewScore"> ${score}</span><p>`;
  scoresItem.appendChild(scoreElement);
}

export default addScore;
