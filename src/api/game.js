import axios from 'axios';

export const getPlayersTeam = payload => axios.get(`/nbs/players/team/${payload}`);

export const getLiveGameList = () => axios.get('/nbs/games?live=true');

export const getResultList = () => axios.get('/nbs/games?live=false');

export const updatePlayer = payload => axios.post('/nbs/players', payload);

export const addStatsTeam1 = payload => axios.post('/nbs/stats/team', payload);

export const addStatsTeam2 = payload => axios.post('/nbs/stats/team', payload);

export const addGame = payload => axios.post('/nbs/games', payload);

export const getCommentList = payload => axios.get(`/nbs/comments/game/${payload}`);

export const getStatsListTeam = payload => axios.get(`/nbs/stats/game/${payload}`); 

