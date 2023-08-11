// Import the addScore function
import addScore from './addScores.js';

// Define the renderScores function
function renderScores() {
  const scoresItem = document.getElementById('scoreRender');
  scoresItem.innerHTML = '';

  // Define the getScores function
  function getScores() {
    return fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zl4d7ivkemottvg2fudz/scores/'
    ).then(function (request) {
      return request.json();
    }).then(function (data) {
      return data.result;
    });
  }

  getScores().then(function (value) {
    value.forEach(function (score, id) {
      addScore(score.user, score.score, id);
    });
  }, function (error) {
    throw error;
  });
}

export default renderScores;
