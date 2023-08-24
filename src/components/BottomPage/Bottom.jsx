import {instagram,github,twitter,linkedin} from "../../../public/index"
const Footer = () => {
  let color = 'text-gray-300 hover:text-white'
  return (
    <>

    <footer className='bg-gray-242424 text-white px-6 py-4 text-center'>
      <div className='mb-4 cursor-default'>BooksApp was developed by:</div>
      <div className='flex flex-wrap justify-center items-center text-gray-400'>
        <div className='flex flex-col md:flex-row gap-4'>
        <p className='cursor-default'>Eduardo Aguilar</p>
          <a href='https://www.instagram.com/aguilarr.ans/' className={color}>
            <img src={instagram} alt='instagram-logo' className='w-5 '/>
          </a>
          <a href='https://github.com/ClexyT' className={color}>
            <img src={github} alt='github-logo' className='w-5' />
          </a>
          
          <a href='https://twitter.com/ClexyT_' className={color}>
            <img src={twitter} alt='twitter-logo' className='w-6' />
          </a>
          <img src={linkedin} alt='linkedin-logo' className='w-5' />
          <div className="bg-white w-0.5"></div>
          <p className='cursor-default'>Jared Portocarrero</p>
          <a href='https://www.instagram.com/_jared1x_/' className={color}>
            <img src={instagram} alt='instagram-logo' className='w-5' />
          </a>
          <a href='https://github.com/vaancillo' className={color}>
            <img src={github} alt='github-logo' className='w-5' />
          </a>
          <a href='https://twitter.com/jaredmazapann' className={color}>
            <img src={twitter} alt='twitter-logo' className='w-6' />
          </a>
          <img src={linkedin} alt='linkedin-logo' className='w-5' />
          <div className="bg-white w-0.5"></div>
          <p className='cursor-default'>Miguel Gonzalez</p>
          <a href='https://www.instagram.com/mxrenoo_/' className={color}>
            <img src={instagram} alt='instagram-logo' className='w-5' />
          </a>
          <a href='https://github.com/zMiguezz' className={color}>
            <img src={github} alt='github-logo' className='w-5' />
          </a>
          <a href='https://twitter.com/zmiguezdev' className={color}>
            <img src={twitter} alt='twitter-logo' className='w-6' />
          </a>
          <img src={linkedin} alt='linkedin-logo' className='w-5' />
        </div>
      </div>
      <div>
      </div>
      <div className='mt-4 cursor-default text-gray-400'>
        © 2023 Our Company, Inc. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer