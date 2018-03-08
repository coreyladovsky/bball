import * as APIUtil from "../util/api_util";

export const RECEIVE_PLAYERS = "RECEIVE_PLAYERS";
export const RECEIVE_PLAYER = "RECEIVE_PLAYER";

export const receivePlayers = players => ({
  type: RECEIVE_PLAYERS,
  players
});


export const receivePlayer = (player, playerID) => {
  return({
  type: RECEIVE_PLAYER,
  player,
  playerID
});};


export const fetchAllPlayers  = () => dispatch =>
  APIUtil.fetchData("http://data.nba.net/data/10s/prod/v1/2017/players.json").then(
    players => dispatch(receivePlayers(JSON.parse(players)))
  );

  export const fetchPlayerStats = (playerID) => dispatch =>
  APIUtil.fetchData(`http://data.nba.net/data/10s/prod/v1/2017/players/${playerID}_profile.json`).then(
    player => dispatch(receivePlayer(JSON.parse(player), playerID))
  );
