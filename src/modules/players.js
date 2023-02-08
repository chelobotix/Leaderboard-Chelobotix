import addPlayerAPI from './apiRequest.js';

export default class Player {
  #playersArray;

  #gameId;

  #requestURL;

  constructor(gameId, url) {
    this.#playersArray = [];
    this.#gameId = gameId;
    this.#requestURL = `${url}${this.#gameId}/scores`;
  }

  /* --------------------------- getters -------------------------- */

  getPlayerArray = () => this.#playersArray;

  getGameId = () => this.#gameId;

  /* ------------------------------ Class methods ----------------------------- */

  addPlayer = (player) => addPlayerAPI(player, this.#requestURL);

  // getPlayers = () =>
}
