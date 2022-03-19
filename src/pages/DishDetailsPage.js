import React from 'react';
import { useSelector } from 'react-redux';

const DishDetailsPage = () => {


  const asd = useSelector(state => state.search);
  console.log(asd);

  return (
    <div className='bg-gray-900 h-screen text-white pt-12'>
      <div className='w-full'>
        <p>Hello world</p>
      </div>
    </div>
  );
};

export default DishDetailsPage;