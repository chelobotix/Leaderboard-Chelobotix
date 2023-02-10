import Player from './players.js';
import ringAnimation from './animation.js';
import src from '../assets/images/user.png';

const UpdateScores = (player) => {
  player.getPlayers()
    .then((response) => {
      const leaderBoard = response.result.sort((a, b) => b.score - a.score);
      let aux = '';
      leaderBoard.forEach((elem) => {
        aux += `<li class="player-scores flex">
        <img src="${src}" class="user-img" />
        <p class="p-user">${elem.user} : ${elem.score}</p>
        </li>`;
      });
      document.querySelector('ul.player-scores').innerHTML = aux;
      ringAnimation();
    });
};

const renderScore = () => {
  const player = new Player(
    'N6LN8OdSQs7L7qxDSROl',
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  );
  // fill the scores table
  UpdateScores(player);

  /* -------------------------------------------------------------------------- */
  /*                               Event listener                               */
  /* -------------------------------------------------------------------------- */
  const form = document.querySelector('#scoreForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const objPlayer = {
      user: form.elements.name.value,
      score: form.elements.score.value,
    };
    player.addPlayer(objPlayer)
      .then((resolve) => {
        document.querySelector('#msg').textContent = resolve;
        form.elements.name.value = '';
        form.elements.score.value = '';
      });
  });

  document.querySelector('#btnRefresh').addEventListener('click', () => {
    UpdateScores(player);
  });
};

export default renderScore;
