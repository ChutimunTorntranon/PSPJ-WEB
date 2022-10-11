import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthForm() {
	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);
	return (
		<div className=''>
			<div className='p-3 bg-warning border border-dark border-start border-opacity-10 rounded-end shadow col-md-9 mx-auto'>
				<div className='col-md-6 offset-md-3'>
					<div className='signup-form'>
						<h5 className='mt-3 text-center'>ACCOUNT</h5>
						<LoginForm />
						<div className='d-flex'>
							<button
								className='justify-center mt-3 mx-auto btn btn-outline-dark text-light col-md-5 offset-md-3'
								type='button'
								onClick={() => setIsOpen(true)}
							>
								Create Account
							</button>
						</div>
						<Modal
							title='Test'
							open={isOpen}
							onClose={() => {
								setIsOpen(false);
							}}
						>
							<RegisterForm onSuccess={() => setIsOpen(false)} />
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthForm;
