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

const getPlayersAPI = async (url) => {
  const scoresArray = await fetch(url)
    .then((response) => response.json());

  return scoresArray;
};

export { addPlayerAPI, getPlayersAPI };
