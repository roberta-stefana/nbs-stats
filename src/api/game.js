import axios from 'axios';

export const getPlayersTeam = payload => axios.get(`/nbs/players/team/${payload}`);

export const updatePlayer = payload => axios.post('/nbs/players', payload);

export const addStatsTeam1 = payload => axios.post('/nbs/stats/team', payload);

export const addStatsTeam2 = payload => axios.post('/nbs/stats/team', payload);

export const addGame = payload => axios.post('/nbs/games', payload);

