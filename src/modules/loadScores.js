import getScoreArray from './scores.js';

const loadScore = () => {
  let aux = '';
  getScoreArray().forEach((elem) => {
    aux += `<li class="player-scores">${elem.fName} : ${elem.points}</li>`;
  });
  document.querySelector('ul.player-scores').innerHTML = aux;
};

export default loadScore;
