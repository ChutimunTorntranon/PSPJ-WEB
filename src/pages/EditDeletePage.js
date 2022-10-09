import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';
function EditDeletePage() {
	const { deleteProduct, getProductById, editProduct } = useProduct();
	const Navigate = useNavigate();
	const { id } = useParams();

	const [input, setInput] = useState({
		product: '',
		priceProduct: '',
		amountProduct: '',
		typeOfProduct: '',
	});
	const [file, setFile] = useState(null);

	const formData = new FormData();
	formData.append('product', input.product);
	formData.append('priceProduct', input.priceProduct);
	formData.append('amountProduct', input.amountProduct);
	formData.append('typeOfProduct', input.typeOfProduct);
	formData.append('ImageProduct', file);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await getProductById(id);
				const {
					product,
					priceProduct,
					amountProduct,
					typeOfProduct,
					ImageProduct,
				} = res.data.post;
				setInput({
					product,
					priceProduct,
					amountProduct,
					typeOfProduct,
					ImageProduct,
				});
			} catch (err) {
				console.log(err);
			}
		};
		fetchProduct();
	}, [id]);

	const handleClickEditForm = async (e) => {
		e.preventDefault();
		try {
			await editProduct(formData, id);
			Navigate('/product');
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};
	const handleClickDeleteForm = async (e) => {
		e.preventDefault();
		try {
			await deleteProduct(id);
			Navigate('/product');
		} catch (err) {
			console.log(err);
		}
	};

	const handleChangeInput = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	return (
		<div className='container mx-auto bg-white shadow-lg p-3 mt-[30px] w-[800px]'>
			<form id='form' onSubmit={handleClickEditForm}>
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
							class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
							for='file_input'
						>
							Upload Image file
						</label>
						<input
							class='block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
							id='file_input'
							type='file'
							onChange={(e) => setFile(e.target.files[0])}
						/>
					</div>
				</div>
				<div className='flex gap-5'>
					<button
						type='submit'
						class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3'
					>
						Edit
					</button>
					<button
						onClick={handleClickDeleteForm}
						type='button'
						class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3'
					>
						Delete
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditDeletePage;
