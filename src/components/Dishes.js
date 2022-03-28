import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveData } from '../redux/actions/search';

export const Dishes = (counters) => {

  const {data} = counters;
  const dispatch = useDispatch();

  // console.log(counters);
  return (
    <div className=' bg-gray-900'>
      {/* <img  className='border border-full border-white image_dish' id={data.id} src={data.image} alt={data.title}/> */}
      <Link 
        to={`/search/${data.id}`} 
        onClick={() => {dispatch(saveData(data))}}
      >
        <img 
          className='border border-full border-white image_dish' 
          id={data.id} src={data.image} 
          alt={data.title}
        />
      </Link> 
    </div>
  );
};
