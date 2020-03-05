import axios from 'axios';

export const getPlayersTeam = payload => axios.get(`/nbs/players/team/${payload}`);

export const updatePlayer = payload => axios.post('/nbs/stats', payload);

