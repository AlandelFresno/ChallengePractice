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
  
  console.log(data);

  return (
    <div className='bg-gray-900 h-screen text-white pt-12'>
      <div className='w-full h-full flex items-center justify-center'>
        <div>
          <p>Name:</p>
          <p>{data.tile}</p>
        </div>
        <img 
          src={data.image} 
          className='border border-full border-white ml-4 scale_img'
          alt='pn'
        />
       </div>
    </div>
  );
};

export default DishDetailsPage;