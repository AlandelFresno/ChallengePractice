import React from 'react';
import { Link } from 'react-router-dom';

export const Dishes = (counters) => {

  const {data} = counters;
  console.log(counters)
  return (
    <div className=' bg-gray-900'>
      {/* <img  className='border border-full border-white image_dish' id={data.id} src={data.image} alt={data.title}/> */}
      <Link to={`/search/${data.id}`} onClick={() => {console.log('click')}}>
        <img className='border border-full border-white image_dish' id={data.id} src={data.image} alt={data.title}/>
      </Link> 
    </div>
  );
};
