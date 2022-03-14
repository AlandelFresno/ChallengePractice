import React from 'react';

import mockdata from '../assets/MOCK_DATA2.json';

export const Dish = (prop) => {
  
  const {results} = mockdata;
  const counter = prop.prop;
  // console.log(results[i].id);
  // console.log(results)
  // console.log(results[i])
  
  console.log(results[counter].tile)
  return (
    <div className=' bg-gray-900'>
      <img className='border border-full border-white image_dish' id={results[counter].id} src={results[counter].image} alt={results[counter].title}/>
      <p>{results[counter].tile}</p>
    </div>
  );
};
