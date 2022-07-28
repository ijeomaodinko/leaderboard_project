// disable eslint.
// // import _ from 'lodash';
import './style.css';

// // import './style.css';

// const scoreBoard = [
//   {
//     name: 'Name: ',
//     score: 100,
//   },
//   {
//     name: 'Name:',
//     score: 20,
//   },
//   {
//     name: 'Name:',
//     score: 50,
//   },
//   {
//     name: 'Name:',
//     score: 78,
//   },
//   {
//     name: 'Name:',
//     score: 125,
//   },
//   {
//     name: 'Name:',
//     score: 77,
//   },
//   {
//     name: 'Name:',
//     score: 42,
//   },
// ];
// const listItems = document.querySelector('.list');

// function displayItems(arr) {
//   for (let i = 0; i < arr.length; i += 1) {
//     const divItem = document.createElement('div');
//     divItem.className = 'score-collection';
//     divItem.innerHTML = `<p class="pview">${arr[i].name}
//  <span class="pviewScore">${arr[i].score}</span><p>`;
// //     listItems.appendChild(divItem);
// //   }
// // }

// displayItems(scoreBoard);

import renderScores from './refreshScores.js';
import submit from './submitscores.js';

renderScores();
// to add event listener to the page
const refresh = document.querySelector('.btn-refresh');
refresh.addEventListener('click', () => {
  renderScores();
});

const submitData = document.querySelector('.btn-submit');
submitData.addEventListener('click', () => {
  const user = document.querySelector('.fname').value;
  const score = document.querySelector('.score').value;
  submit(user, score);
});
