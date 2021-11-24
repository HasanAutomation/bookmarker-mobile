import client from './client';

const login = userDetails => client.post('/users/login', userDetails);
const getCurrentUser = () => client.get('/users/me');

export default { login, getCurrentUser };
