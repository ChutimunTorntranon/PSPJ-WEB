import React from 'react';
import { Carousel } from 'flowbite-react';

function PostPage() {
	return (
		<div className='mt-[20px] container w-[900px] h-[400px]'>
			<Carousel slideInterval={5000}>
				<img src='cat01.jpg' alt='...' />

				<img src='cat02.jpg' alt='...' />
				<img src='cat03.jpg' alt='...' />
			</Carousel>
			<div className='mt-[10px]'>
				<h4 className='font-bold text-center'>Featured Product</h4>
				<div className='row gap-3'>
					<div className='rounded-lg mt-[10px] ml-[20px] border border-red-500 w-[200px]'>
						<img src='senye_retractable_dog_leash_16ft_dog_traction_rope_1_346x346_crop_center.webp'></img>
						<a className=''>
							Senye Retractable Dog Leash 16ft Dog Traction Rope
						</a>
						<br></br>
						<span className='text-yellow-300'>$38.00</span>
						<span className='text-yellow-300'>-</span>
						<span className='text-yellow-300'>$70.00</span>
						<button className='bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[10px] ml-[20px]'>
							Add to cart
						</button>
					</div>
					<div className='rounded-lg mt-[10px] border border-red-500 w-[200px]'>
						<img src='pawz_road_cat_sleeping_bag_self_warming_kitty_sack_1_346x346_crop_center.jpeg'></img>
						<a className=''>
							Pawz Road Cat Sleeping Bag Self Warming Kitty Sack
						</a>
						<br></br>
						<span className='text-yellow-300'>$25.00</span>
						<span className='text-yellow-300'>-</span>
						<span className='text-yellow-300'>$50.00</span>
						<button className='bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[10px] ml-[20px]'>
							Add to cart
						</button>
					</div>
					<div className='rounded-lg mt-[10px] border border-red-500 w-[200px]'>
						<img src='qpey_pet_food_bowl_stainless_steel_1_346x346_crop_center.webp'></img>
						<a className=''>Qpey Pet Food Bowl Stainless Steel</a>
						<br></br>
						<div className='mt-[20px]'>
							<span className='text-yellow-300'>$38.00</span>
							<span className='text-yellow-300'>-</span>
							<span className='text-yellow-300'>$70.00</span>
							<button className='bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[10px] ml-[20px]'>
								Add to cart
							</button>
						</div>
					</div>
					<div className='rounded-lg mt-[10px] border border-red-500 w-[200px]'>
						{/* <Carousel slideInterval={5000}> */}
						<img src='blueberry_pet_essentials_zoo_fun_dog_collars_1_470x470_crop_center.webp'></img>
						<a className=''>Blueberry Pet Essentials Zoo Fun Dog Collars</a>
						<br></br>
						<div className='mt-[20px]'>
							<span className='text-yellow-300'>$38.00</span>
							<span className='text-yellow-300'>-</span>
							<span className='text-yellow-300'>$70.00</span>
							<button className='bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mt-[10px] ml-[20px]'>
								Add to cart
							</button>
						</div>
						{/* </Carousel> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default PostPage;
