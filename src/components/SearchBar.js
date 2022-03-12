import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  return (

    <div className='searchbar'>
        <SearchIcon  className='absolute top-3 left-72'/> 
          <input
              className='bg-gray-900 border-2 border-white rounded-xl m-1 ml-4 mt-1 p-1 pl-8 no-underline text-lg ' 
              type='text'
              placeholder='Search' 
          />
    </div>
  );
};

export default SearchBar;