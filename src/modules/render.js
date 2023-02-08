import Player from './players.js';

const renderScore = () => {
  const player = new Player(
    '8K44VNwh9ZuC6E3ZxTPc',
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  );


  player.getPlayers()
    .then((response) => console.log(response));

  const form = document.querySelector('#scoreForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const objPlayer = {
      user: form.elements.name.value,
      score: form.elements.score.value,
    };
    player.addPlayer(objPlayer)
      .then((resolve) => {
        document.querySelector('#msg').textContent = resolve;
      });
  });
  // let aux = '';
  // getScoreArray().forEach((elem) => {
  //   aux += `<li class="player-scores">${elem.fName} : ${elem.points}</li>`;
  // });
  // document.querySelector('ul.player-scores').innerHTML = aux;
};

export default renderScore;
