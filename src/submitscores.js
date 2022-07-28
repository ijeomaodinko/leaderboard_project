import renderScores from './refreshScores.js';

// to send data to the api
const submit = (user, score) => {
  if (user || score !== '') {
    const sentToApi = async () => {
      const request = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zl4d7ivkemottvg2fudz/scores/',
        {
          method: 'POST',
          body: JSON.stringify({
            user: `${user}`,
            score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return request.status;
    };
    sentToApi()
      .then((res) => res)
      .then(() => {
        renderScores();
      });
  }
};

export default submit;
