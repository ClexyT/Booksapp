const Footer = () => {
  return (
    <footer className='bg-gray-242424 text-white px-6 py-4 text-center'>
      <div className='mb-4'>BooksApp was developed by: Eduardo Aguilar, Jared Portocarrero, Miguel González</div>
      <div className='flex flex-wrap justify-center items-center text-gray-400'>
        <div className='flex flex-col md:flex-row gap-4'>
          <a href='https://www.instagram.com/aguilarr.ans/' className='text-gray-300 hover:text-white'>
            <img src='../../public/instagram.svg' alt='instagram-logo' className='w-5' />
          </a>
          <a href='https://github.com/ClexyT' className='text-gray-300 hover:text-white'>
            <img src='../../public/github.svg' alt='github-logo' className='w-5' />
          </a>
          <a href='https://twitter.com/zMiguezzz' className='text-gray-300 hover:text-white'>
            <img src='../../public/twitter.svg' alt='twitter-logo' className='w-6' />
          </a>
          <a href='https://www.instagram.com/_jared1x_/' className='text-gray-300 hover:text-white'>
            <img src='../../public/instagram.svg' alt='instagram-logo' className='w-5' />
          </a>
          <a href='https://github.com/vaancillo' className='text-gray-300 hover:text-white'>
            <img src='../../public/github.svg' alt='github-logo' className='w-5' />
          </a>
          <a href='https://twitter.com/jaredmazapann' className='text-gray-300 hover:text-white'>
            <img src='../../public/twitter.svg' alt='twitter-logo' className='w-6' />
          </a>
          <a href='https://www.instagram.com/mxrenoo_/' className='text-gray-300 hover:text-white'>
            <img src='../../public/instagram.svg' alt='instagram-logo' className='w-5' />
          </a>
          <a href='https://github.com/zMiguezz' className='text-gray-300 hover:text-white'>
            <img src='../../public/github.svg' alt='github-logo' className='w-5' />
          </a>
          <a href='https://twitter.com/zmiguezdev' className='text-gray-300 hover:text-white'>
            <img src='../../public/twitter.svg' alt='twitter-logo' className='w-6' />
          </a>
        </div>
      </div>
      <div className='mt-4 text-gray-400'>
        © 2023 Our Company, Inc. All rights reserved.
      </div>
    </footer>

  )
}

export default Footer