import renderScores from './refreshScores.js';

// Define the submit function
async function submit(user, score) {
  if (user || score !== '') {
    // Define the sentToApi function
    async function sentToApi() {
      const response = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zl4d7ivkemottvg2fudz/scores/',
        {
          method: 'POST',
          body: JSON.stringify({
            user: user,
            score: score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      return response.status;
    }

    // Call the sentToApi function
    const res = await sentToApi();
    renderScores();
    return res;
  }
}

export default submit;
