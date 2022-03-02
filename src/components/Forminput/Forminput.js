import React from 'react';
import './Forminput.css';


export const Forminput = (props) => {


    const {label, errorMessage, onChange, id, ...inputProps} = props;

  return (
    <div className= 'flex flex-col mt-4 '>
        <label className='text-white'>{label}</label>
        <input 
            {...inputProps}
            onChange={onChange}
            className='bg-gray-800 border p-2   text-white border-white rounded mt-4'
        />
        <span className='errorMessage text-red-600 pt-1 text-base'>{errorMessage}</span>
    </div>
  );
};
