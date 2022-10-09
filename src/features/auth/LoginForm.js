import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { validatelogin } from '../../validations/userValidate';

function LoginForm() {
	const { login } = useAuth();

	const { startLoading, stopLoading } = useLoading();

	const [input, setInput] = useState({ emailOrMobile: '', password: '' });

	const handleChangeInput = (e) => {
		console.log(input);
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const { error } = validatelogin(input);
		if (error) {
			return toast.error(error.message);
		}
		try {
			startLoading();
			await login(input);
			toast.success('success register');
			// onSuccess();
		} catch (err) {
			toast.error(err.response.data.message);
		} finally {
			stopLoading();
		}
	};

	return (
		<form id='form' className='' onSubmit={handleSubmitForm}>
			<div className='row'>
				<div className='mb-3 col-md-6 justify-center'>
					<label>Email Address</label>
					<input
						type='text'
						className='form-control'
						name='emailOrMobile'
						value={input.emailOrMobile}
						onChange={handleChangeInput}
					/>
				</div>
				<div className='mb-3 col-md-6 justify-center'>
					<label>Password</label>
					<input
						type='text'
						className='form-control'
						name='password'
						value={input.password}
						onChange={handleChangeInput}
					/>
				</div>
				<button className='mt-3 mx-auto btn btn-outline-dark text-light col-md-5 offset-md-3'>
					Sign In
				</button>
			</div>
		</form>
	);
}
export default LoginForm;
