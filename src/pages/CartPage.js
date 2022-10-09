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
		<div>
			{' '}
			<div class='container mx-auto mt-10 w-[800px]'>
				<div class='flex shadow-lg'>
					<div class=' bg-white px-10 py-10'>
						<div class='flex justify-between border-b pb-8'>
							<h1 class='font-semibold text-2xl'>Shopping Cart</h1>
						</div>
						<div class='flex mt-10 mb-5'>
							<h3 class='font-semibold text-gray-600 text-xs uppercase w-3/6'>
								Product Details
							</h3>
							<h3 class='font-semibold text-center text-gray-600 text-xs uppercase ml-[60px] w-1/6 '>
								Quantity
							</h3>
							<h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/6 '>
								Price
							</h3>
							<h3 class='font-semibold text-center text-gray-600 text-xs uppercase w-1/6'>
								Total
							</h3>
						</div>
						{products.map((item) => (
							<div class='flex items-center hover:bg-gray-100 -mx-8 px-6 py-5'>
								{/* //product */}
								<div class='flex w-[600px]'>
									<div class='w-20'>
										<img class='h-24' src={item.ImageProduct} />
									</div>
									<div class='my-auto flex flex-col justify-between ml-4 flex-grow'>
										<span class='font-bold text-sm'>{item.product}</span>
										<a
											href='#'
											class='font-semibold hover:text-red-500 text-gray-500 text-xs'
										>
											Remove
										</a>
									</div>
								</div>
								{/* รวมราคา สินค้า */}
								<div class='flex justify-center w-1/5 gap-1'>
									<button onClick={handleDrecrement}>-</button>
									<div className='border p-[10px]'>{quantity}</div>
									<button onClick={handleIncrement} className=''>
										+
									</button>
								</div>
								<span class='text-center w-1/5 font-semibold text-sm'>
									{item.priceProduct}
								</span>
								<span class='text-center w-1/5 font-semibold text-sm'>
									{item.priceProduct}
								</span>
							</div>
						))}

						<div>
							<Link
								to='/product'
								class='flex font-semibold text-indigo-600 text-sm mt-10'
							>
								<svg
									class='fill-current mr-2 text-indigo-600 w-4'
									viewBox='0 0 448 512'
								>
									<path d='M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z' />
								</svg>
								Continue Shopping
							</Link>
						</div>

						<div class='border-t mt-8'>
							<div class='flex font-semibold justify-between py-6 text-sm uppercase'>
								<span>Total cost</span>
								<span>$600</span>
							</div>
							<button class='bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full'>
								Checkout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartPage;
