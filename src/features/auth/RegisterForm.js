import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

import { validateRegister } from '../../validations/userValidate';

function RegisterForm({ onSuccess }) {
	const { register } = useAuth();
	const { startLoading, stopLoading } = useLoading();

	const [input, setInput] = useState({
		firstName: '',
		lastName: '',
		emailOrMobile: '',
		password: '',
		confirmPassword: '',
	});

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmitForm = async (e) => {
		e.preventDefault();
		const { error } = validateRegister(input);

		onSuccess();
		if (error) {
			return toast.error(error.message);
		}
		try {
			startLoading();
			// await register(input);
			toast.success('success register');
		} catch (err) {
			toast.error(err.response.data.message);
		} finally {
			stopLoading();
		}
	};

	return (
		<form id='form' className='mt-3' onSubmit={handleSubmitForm}>
			<div className='row'>
				<div className='mb-3 col-md-6'>
					<label>First Name </label>
					<input
						type='text'
						name='firstName'
						className='form-control'
						value={input.firstName}
						onChange={(e) => handleChangeInput(e)}
					/>
				</div>
				<div className='mb-3 col-md-6'>
					<label>Last Name </label>
					<input
						type='text'
						name='lastName'
						className='form-control'
						value={input.lastName}
						onChange={handleChangeInput}
					/>
				</div>
				<div className='mb-3 col-md-12'>
					<label>EmailOrMobile</label>
					<input
						type='text'
						name='emailOrMobile'
						className='form-control'
						value={input.emailOrMobile}
						onChange={(e) => handleChangeInput(e)}
					/>
				</div>

				<div className='mb-3 col-md-12'>
					<label>Password</label>
					<input
						type='password'
						name='password'
						className='form-control'
						value={input.password}
						onChange={handleChangeInput}
					/>
				</div>
				<div className='mb-3 col-md-12'>
					<label>Confirm Password</label>
					<input
						type='password'
						name='confirmPassword'
						className='form-control'
						value={input.confirmPassword}
						onChange={handleChangeInput}
					/>
				</div>
				<button
					type='submit'
					className='mt-3 mx-auto btn btn-outline-dark text-light col-md-5 offset-md-3'
				>
					Register
				</button>
			</div>
		</form>
	);
}
export default RegisterForm;
