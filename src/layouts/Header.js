function header() {
	return (
		<nav className='border flex gap-4 items-center'>
			<div className='border-4 border-red-400 p-1 w-60'>
				<img src='Logo.png' className='w-52' alt='logo'></img>
			</div>
			<div className='border border-dark p-3 flex items-center gap-2'>
				<p>Foods</p>
				<img src='paw.svg' className='w-6' />
			</div>
			<div className='border border-dark p-3 flex items-center gap-2'>
				<p>Toys</p>
				<img src='paw.svg' className='w-6' />
			</div>
			<div className='border border-dark p-3 flex items-center gap-2'>
				<p>Bowl & FeedingMachine</p>
				<img src='paw.svg' className='w-6' />
			</div>
			<div className='border border-dark p-3 flex items-center gap-2'>
				<p>Sand & Toilet</p>
				<img src='paw.svg' className='w-6' />
			</div>
			<div className='border border-dark p-3 flex items-center gap-2'>
				<p>Bed & Condo</p>
				<img src='paw.svg' className='w-6' />
			</div>
			<div className='border border-dark ml-4'>
				<img src='bucket.svg' className='w-8' />
			</div>
			<div className='border border-dark ml-4'>
				<img src='person.svg' className='w-8' />
			</div>
			<div className='border border-dark ml-4'>
				<img src='Logout.svg' className='w-8' />
			</div>
		</nav>
	);
}

export default header;
