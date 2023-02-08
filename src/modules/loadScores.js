import Player from './players.js';

const loadScore = () => {
  const player = new Player(
    '8K44VNwh9ZuC6E3ZxTPc',
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  );
  player.addPlayer({ user: 'Natish', score: 2018 })
    .then((resolve) => console.log(`dtttas${resolve}`));
  // let aux = '';
  // getScoreArray().forEach((elem) => {
  //   aux += `<li class="player-scores">${elem.fName} : ${elem.points}</li>`;
  // });
  // document.querySelector('ul.player-scores').innerHTML = aux;
};

export default loadScore;
