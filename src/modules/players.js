import { addPlayerAPI, getPlayersAPI } from './apiRequest.js';

export default class Player {
  #gameId;

  #requestURL;

  constructor(gameId, url) {
    this.#gameId = gameId;
    this.#requestURL = `${url}${this.#gameId}/scores`;
  }

  addPlayer = (player) => addPlayerAPI(player, this.#requestURL);

  getPlayers = () => getPlayersAPI(this.#requestURL)
    .then((response) => response)
}
