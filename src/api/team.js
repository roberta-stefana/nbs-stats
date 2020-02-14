import axios from 'axios';

export const getTeamList = () => axios.get('/nbs/teams');