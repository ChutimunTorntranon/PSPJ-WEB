import AuthForm from './AuthForm';

function AuthContainer() {
	return (
		<div>
			<div className='container mt-4 mx-auto p-5'>
				<div className='row'>
					<AuthForm />
				</div>
			</div>
		</div>
	);
}

export default AuthContainer;
