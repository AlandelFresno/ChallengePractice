import React from 'react';

const Menugrid = (prop) => {

  const {menu} = prop;

  console.log(menu);
    
  return (
    
      <div>
        <img 
          src={menu.image} 
          className='border border-full border-white ml-4 img_size'
          alt=''
          />
        <p className='pt-1 pb-3'>{menu.tile}</p>
      </div>
    
  );
};

export default Menugrid;