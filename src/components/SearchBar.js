import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = (prop) => {

  let {placeholder} = {
    placeholder: 'search'
  };
  if (prop !== {} ) {
    placeholder = prop.placeholder
  };

  return (

    <div className='searchbar border border-white rounded-xl'>
        <SearchIcon  className=' ml-4'/> 
        <input
            className='bg-gray-900  m-1 ml-4 mt-1 p-1 pl-8 no-underline text-lg ' 
            type='text'
            placeholder={placeholder}
        />
    </div>
  );
};

export default SearchBar;