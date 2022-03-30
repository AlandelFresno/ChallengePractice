import React from 'react';
import { useSelector } from 'react-redux';

const DishDetailsPage = () => {

  let  {data} = useSelector(state => state.search);
  let isUndefined = false;
  console.log(data);
  
  if (data == undefined) {
    data = {}
    data.id = localStorage.getItem('id');
    data.image = localStorage.getItem('image');
    data.tile = localStorage.getItem('title');
  }else if (data === {}) {

  };

  const handleOnClick = () => {

  };
  
  console.log(data);

  return (
    <div className='bg-gray-900 h-screen text-white pt-12'>
      <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='flex'>
            <div>
              <p>Name:</p>
              <p>{data.tile}</p>
              <p className='pt-2'>HealthScore:</p>
              <p>{data.id}</p>
            </div>
            <img 
              src={data.image} 
              className='border border-full border-white ml-4 scale_img'
              alt='pn'
            />
          </div>
        <button 
          onClick={handleOnClick}
          className='mt-8 border p-2'
        > Add to Menu</button>
       </div>
    </div>
  );
};

export default DishDetailsPage;