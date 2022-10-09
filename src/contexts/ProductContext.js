import * as productService from '../api/productApi';
import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

function ProductContextProvider({ children }) {
	const [products, setProducts] = useState([]);
	console.log(products);

	useEffect(() => {
		const fetchProduct = async () => {
			const res = await productService.getAllProduct();
			setProducts(res.data.post);
		};
		fetchProduct();
	}, []);

	const createProduct = async (input) => {
		return await productService.createProduct(input);
	};

	const deleteProduct = async (input, id) => {
		return await productService.deleteProduct(input, id);
	};

	return (
		<ProductContext.Provider value={{ products, createProduct, deleteProduct }}>
			{children}
		</ProductContext.Provider>
	);
}

export const useProduct = () => {
	return useContext(ProductContext);
};

export default ProductContextProvider;
