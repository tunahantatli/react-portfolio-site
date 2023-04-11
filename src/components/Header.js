import React from 'react';
//images
import Logo from '../assets/logo.jpg'

const Header = () => {
  return <header className="py-5">
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <h3 className='text-white uppercase'>tt<span className="text-primary">.dev</span></h3>
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
