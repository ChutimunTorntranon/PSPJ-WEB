import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';

function CreateProductsPage() {
	const { createProduct } = useProduct();

	const Navigate = useNavigate();

	const handleClickSubmit = async (e) => {
		e.preventDefault();
		try {
			await createProduct(input);
			Navigate('/product');
		} catch (err) {
			console.log(err);
		}
	};

	const [input, setInput] = useState({
		product: '',
		priceProduct: '',
		amountProduct: '',
		typeOfProduct: '',
		ImageProduct: '',
	});

	const handleChangeInput = (e) => {
		console.log(input);
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	return (
		<div className='container mx-auto bg-white shadow-lg p-3 mt-[30px] w-[800px]'>
			<form id='form' onSubmit={handleClickSubmit}>
				<div class='flex flex-col gap-3'>
					<div>
						<label
							for='first_name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Product name
						</label>
						<input
							type='text'
							name='product'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={input.product}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<label
							for='last_name'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Price
						</label>
						<input
							type='text'
							name='priceProduct'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={input.priceProduct}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<label
							for='company'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Amount
						</label>
						<input
							type='text'
							name='amountProduct'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={input.amountProduct}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<label class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
							Type Product
						</label>
						<input
							type='tel'
							name='typeOfProduct'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={input.typeOfProduct}
							onChange={handleChangeInput}
						/>
					</div>

					<div>
						<label
							for='visitors'
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Upload Image Product (URL)
						</label>
						<input
							name='ImageProduct'
							class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							value={input.ImageProduct}
							onChange={handleChangeInput}
						/>
					</div>
				</div>

				<button
					type='submit'
					class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3'
				>
					Add Product
				</button>
			</form>
		</div>
	);
}

export default CreateProductsPage;
