import { Link } from 'react-router-dom';

import Logout from './Logout';
function header(props) {
	const { products } = props;

	return (
		<nav className='flex gap-4 items-center border'>
			<div className='w-[300px]'>
				<img src='Logo.png' className='w-[300px]' alt='logo'></img>
			</div>
			<div className='p-3 flex items-center gap-2'>
				<Link to='/product'>Product</Link>
				<img src='paw.svg' className='w-6' />
			</div>

			<div className='flex gap-5'>
				<button>
					<Link to='/product/create'>Create Product</Link>
				</button>
				<button>
					<Link to='/product/edit/:id'>Edit or Delete Product</Link>
				</button>
				<button>
					<Link to='/cart'>Cart</Link>
				</button>

				<button>
					<Logout />
				</button>
			</div>
		</nav>
	);
}

export default header;
