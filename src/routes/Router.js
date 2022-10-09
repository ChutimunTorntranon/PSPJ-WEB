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
				<Route path='/product' element={<ProductPage />} />
				<Route path='/product/edit/:id' element={<EditDeletePage />} />
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
