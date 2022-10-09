import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../layouts/Header';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';

import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import data from '../data test/data';
import CreateProductsPage from '../pages/CreateProductsPage';
function Router() {
	const { user } = useAuth();

	const { products } = data;

	return (
		<>
			<Header products={products} />
			<Routes>
				<Route path='/product' element={<ProductPage />} />
				<Route path='/product/create' element={<CreateProductsPage />} />
				<Route path='/cart' element={<CartPage />} />
				{user ? (
					<>
						<Route path='/home' element={<PostPage />} />
					</>
				) : (
					<Route path='/login' element={<LoginPage />} />
				)}
			</Routes>
		</>
	);
}

export default Router;
