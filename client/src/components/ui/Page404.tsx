import React from 'react'

const Page404 = () => {
  return (
    <section>
			<div className=' text-white'>
				<div className='flex h-screen'>
					<div className='m-auto text-center'>
						<div>
							<img src='https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg' alt='404' width="550px" height="550px"/>
						</div>
						<p className='text-sm md:text-base text-[#F6009B] p-2 mb-4'>
							The stuff you were looking for doesn't exist
						</p>
						<a
							href='/'
							className='bg-transparent hover:bg-[#F6009B] text-[#F6009B] hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-[#F6009B] hover:border-transparent'
						>
							Take me home
						</a>
					</div>
				</div>
			</div>
		</section>
  )
}

export default Page404