import axios from 'axios';

// TODO: review those paths
export const login = payload => axios.post('/login', payload);

export const checkToken = () => axios.get('/user/token');

export const getUser = username => axios.get(`/users/${username}`);

export const getCurrentUser = () => axios.get('/auth/current-user');

export const addUser = payload => axios.post('/users', payload);

export const updateUser = payload => axios.put(`/user/${payload.id}`, payload);

export const deleteUser = id => axios.delete(`/user/${id}`);

export const getUserList = payload => axios.get('/user');