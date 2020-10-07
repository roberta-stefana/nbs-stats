import axios from 'axios';

export const getStatsPlayer = payload => axios.get(`/nbs/stats/player/${payload}`);