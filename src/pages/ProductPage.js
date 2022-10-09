import { Link } from 'react-router-dom';
import { useProduct } from '../contexts/ProductContext';

function ProductPage() {
	const { products } = useProduct();

	return (
		<div className='mt-8'>
			<span className='font-bold ml-[50px] mt-[20px] text-[30px]'>Product</span>
			<div className='grid grid-cols-4 shadow-md container mx-auto'>
				{products.map((item) => (
					<div className='rounded-lg mt-[10px] border border-red-500 w-[250px] shadow mb-[10px] mx-auto'>
						<img src={item.ImageProduct}></img>
						<div className='p-[10px]'>
							<a className=''>{item.product}</a>
							<br></br>
							<span className='text-yellow-300 ml-2'>{item.priceProduct}</span>
							<br></br>
							<span className='text-red-500 ml-2'>
								amount : {item.amountProduct}
							</span>
							<br></br>
							<span className='text-gray-200 ml-2'>{item.typeOfProduct}</span>
						</div>
						<button className='block bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[5px] mx-auto mb-[5px]'>
							Add to cart
						</button>
						<Link to={`/product/${item.id}/edit`}>
							<button className='block bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[5px] mx-auto mb-[5px]'>
								edit
							</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductPage;
