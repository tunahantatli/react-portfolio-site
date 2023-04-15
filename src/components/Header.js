import React from 'react';


const Header = () => {
  return <header className="py-5">
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <h3 className='text-white uppercase text-[36px]'><b>tt<span className="text-blue-900">.dev</span></b></h3>
        </a>
        {/* button */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
