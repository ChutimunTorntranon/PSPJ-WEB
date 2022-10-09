import { useAuth } from '../contexts/AuthContext';

function Logout() {
	const { logout } = useAuth();
	return (
		<div className=''>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

export default Logout;
