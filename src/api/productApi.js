import axios from '../config/axios';

export const getAllProduct = () => axios.get('/product');
export const createProduct = (input) => axios.post('/product/create', input);
export const editProduct = (input, id) =>
	axios.patch('/product/:id/edit', input, id);
export const deleteProduct = (input, id) =>
	axios.delete('/product/:id/edit', input, id);
