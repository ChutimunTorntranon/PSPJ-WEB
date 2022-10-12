import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';
function CartPage(props) {
	const [quantity, setQuantity] = useState('0');

	const { products } = useProduct();

	const handleDrecrement = () => {
		if (quantity > 1) {
			setQuantity((prevCount) => prevCount - 1);
		}
	};

	const handleIncrement = () => {
		if (quantity < 100) {
			setQuantity((prevCount) => prevCount + 1);
		}
	};

	return (
		<div className='flex row container mx-auto '>
			{' '}
			<div className=' flex flex-col border w-[500px] h-[530px] mt-[45px] bg-white shadow-lg'>
				<span className='font-semibold text-2xl mt-[30px] ml-[px]'>
					Information
				</span>
				<div
					for='first_name'
					className='w-[70px] mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-[20px] ml-[40px]'
				>
					Address
				</div>
				<input
					type='text'
					name='product'
					className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				/>
				<div
					for='first_name'
					className='w-[70px] mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-[20px] ml-[40px]'
				>
					City
				</div>
				<input
					type='text'
					name='product'
					className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				/>
				<div
					for='first_name'
					className='w-[70px] mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-[20px] ml-[40px]'
				>
					Zip Code
				</div>
				<input
					type='text'
					name='product'
					className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] ml-[40px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				/>
				<div className='border-t mt-8 w-[400px] mx-auto'>
					<div className='flex font-semibold justify-between py-6 text-sm uppercase'>
						<span>Total cost</span>
						<span>$600</span>
					</div>
					<button
						type='button'
						className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3'
					>
						Checkout
					</button>
				</div>
			</div>
			<div className='container mt-10 w-[800px]'>
				<div className='flex shadow-lg'>
					<div className=' bg-white px-10 py-10 ml-[-50px] shadow-lg'>
						<div className='flex justify-between border-b pb-8'>
							<h1 className='font-semibold text-2xl'>Shopping Cart</h1>
						</div>
						<div className='flex mt-10 mb-5'>
							<h3 className='font-semibold text-gray-600 text-xs uppercase w-3/6'>
								Product Details
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase ml-[60px] w-1/6 '>
								Quantity
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/6 '>
								Price
							</h3>
							<h3 className='font-semibold text-center text-gray-600 text-xs uppercase w-1/6'>
								Total
							</h3>
						</div>
						{products.map((item) => (
							<div className='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
								{/* //product */}
								<div className='flex w-[600px]'>
									<div className='w-20'>
										<img className='h-24' src={item.ImageProduct} />
									</div>
									<div className='my-auto flex flex-col justify-between ml-4 flex-grow'>
										<span class='font-bold text-sm'>{item.product}</span>
										<a
											href='#'
											className='font-semibold hover:text-red-500 text-gray-500 text-xs'
										>
											Remove
										</a>
									</div>
								</div>
								{/* รวมราคา สินค้า */}
								<div className='flex justify-center w-1/5 gap-1'>
									<button onClick={handleDrecrement}>-</button>
									<div className='border p-[10px]'>{quantity}</div>
									<button onClick={handleIncrement} className=''>
										+
									</button>
								</div>
								<span className='text-center w-1/5 font-semibold text-sm'>
									{item.priceProduct}
								</span>
								<span className='text-center w-1/5 font-semibold text-sm'>
									{item.priceProduct}
								</span>
							</div>
						))}

						<div>
							<Link
								to='/product'
								className='flex font-semibold text-indigo-600 text-sm mt-10'
							>
								<svg
									className='fill-current mr-2 text-indigo-600 w-4'
									viewBox='0 0 448 512'
								>
									<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
								</svg>
								Continue Shopping
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
