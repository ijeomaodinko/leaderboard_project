// disable eslint.
// // import _ from 'lodash';
import './style.css';
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
