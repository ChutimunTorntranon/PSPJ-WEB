function LoginForm() {
	return (
		<form id='form' className=''>
			<div className='row'>
				<div className='mb-3 col-md-6 justify-center'>
					<label>Email Address</label>
					<input type='text' className='form-control' name='emailOrMobile' />
				</div>
				<div className='mb-3 col-md-6 justify-center'>
					<label>Password</label>
					<input type='text' className='form-control' name='password' />
				</div>
				<button
					type='button'
					className='mt-3 mx-auto btn btn-outline-dark text-light col-md-5 offset-md-3'
				>
					Sign In
				</button>
			</div>
		</form>
	);
}
export default LoginForm;
