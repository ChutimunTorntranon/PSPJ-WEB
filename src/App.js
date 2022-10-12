import Router from './routes/Router';
import { ToastContainer } from 'react-toastify';
import { useLoading } from './contexts/LoadingContext';
import Spinner from './components/ui/Spinner';

function App() {
	const { loading } = useLoading();

	return (
		<>
			{loading && <Spinner />}
			<Router />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	);
}

export default App;
