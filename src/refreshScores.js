import addScore from './index.js';

// to get data from the api
const renderScores = () => {
  const scoresItem = document.getElementById('scoreRender');
  scoresItem.innerHTML = '';
  const getScores = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zl4d7ivkemottvg2fudz/scores/',
    );
    // console.log(request)
    const data = await request.json();
    return data.result;
  };

  getScores().then(
    (value) => {
      value.forEach((score, id) => {
        addScore(score.user, score.score, id);
      });
    },
    (error) => {
      throw error;
    },
  );
};

export default renderScores;