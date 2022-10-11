import * as productService from '../api/productApi';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../config/axios';
const ProductContext = createContext();

function ProductContextProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await axios.get('/product');
			// console.log(res.data.post);
			setProducts(res.data.post);
		};
		fetchProduct();
	}, []);

	const createProduct = async (input) => {
		return await productService.createProduct(input);
	};

	const editProduct = async (input, id) => {
		return await productService.editProduct(input, id);
	};
	const deleteProduct = async (id) => {
		return await productService.deleteProduct(id);
	};
	const getProductById = async (input, id) => {
		return await productService.getProductById(input, id);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				createProduct,
				deleteProduct,
				editProduct,
				getProductById,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export const useProduct = () => {
	return useContext(ProductContext);
};

export default ProductContextProvider;
