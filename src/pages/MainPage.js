import React from 'react';
import Menugrid from '../components/Menugrid';


export const MainPage = () => {

  


  return (
    <div className='bg-gray-900 min-h-screen  text-white pt-12'>

      <div className='flex flex-row justify-center pt-4'>
        <p className='ml-4'> Price: counter</p>
        <p className='ml-4'> Preparation time: counter2</p>
        <p className='ml-4'> Health score: counter3</p>
      </div>
      <div className=''>
        <Menugrid  />
      </div>
    </div>
  );
};
