import React from 'react';

const Menugrid = (prop) => {

  const {menu} = prop;

  // console.log(menu);
    
  return (
    
      <div>
        <div className='flex flex-col justify-center  items-center '>

          <img 
            src={menu.image} 
            className='border border-full border-white img_size'
            alt=''
            />
          <p className='pt-1 pb-3 pl-2 '>{menu.tile}</p>
        </div>
      </div>
    
  );
};

export default Menugrid;