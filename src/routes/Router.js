import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../layouts/Header';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';

import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import CreateProductsPage from '../pages/CreateProductsPage';
import EditDeletePage from '../pages/EditDeletePage';
function Router() {
	const { user } = useAuth();
	return (
		<>
			<Header />
			<Routes>
				{user ? (
					<>
						<Route path='/home' element={<PostPage />} />
						<Route path='/product' element={<ProductPage />} />
						<Route path='/product/:id/edit' element={<EditDeletePage />} />
						<Route path='/product/create' element={<CreateProductsPage />} />
						<Route path='/cart' element={<CartPage />} />
					</>
				) : (
					<>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/' element={<LoginPage />} />
					</>
				)}
			</Routes>
		</>
	);
}

export default Router;
