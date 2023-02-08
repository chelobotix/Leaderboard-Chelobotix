const addPlayerAPI = async (player, url) => {
  const newPlayer = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body:
      JSON.stringify(
        player,
      ),
  })
    .then((response) => response.json());
  return newPlayer.result;
};

// const getPlayers = (url) => {
//   const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
// };

export default addPlayerAPI;
