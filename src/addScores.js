// to add items to the board
const addScore = (name, score) => {
  const scoresItem = document.getElementById('scoreRender');
  const divItem = document.createElement('div');
  divItem.classList.add('score-collection');
  divItem.className = ('score-collection');
  divItem.innerHTML = `<p class="pview">${name} <span class="pviewScore">${score}</span><p>`;
  scoresItem.appendChild(divItem);
};
export default addScore;