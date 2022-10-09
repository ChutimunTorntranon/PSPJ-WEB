import axios from '../config/axios';

export const getAllProduct = () => axios.get('/product');

export const getProductById = (id) => axios.get(`/product/${id}`);

export const createProduct = (input) => axios.post('/product/create', input);

export const editProduct = (input, id) =>
	axios.patch(`/product/${id}/edit`, input);

export const deleteProduct = (id) => axios.delete(`/product/${id}/delete`);
