import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Header from '../layouts/Header';

import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';

function Router() {
	const { user } = useAuth();
	return (
		<>
			<Header />

			<Routes>
				{user ? (
					<>
						<Route path='/' element={<PostPage />} />
					</>
				) : (
					<Route path='/' element={<LoginPage />} />
				)}
			</Routes>
		</>
	);
}

export default Router;