function Spinner() {
	return (
		<div
			className='d-flex flex-column justify-center items-center my-96'
			style={{ zIndex: 1100 }}
		>
			<div className='spinner-grow text-purple-600 mx-auto'></div>
			<span className=' text-yellow-300'>Please Wait</span>
		</div>
	);
}

export default Spinner;
