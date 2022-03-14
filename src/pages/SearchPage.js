import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { Dish } from '../components/Dish';
import mockdata from '../assets/MOCK_DATA2.json';
import './pages.css'
import { useNavigate } from 'react-router';
import { Obtain } from '../redux/actions/search';

const SearchPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const {value} = useSelector(state => state.search);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Obtain(e.target[0].value));
        navigate('/search');
      };

    const {results} = mockdata;
    let counter = 0;
    console.log(results);
    
    return (
        <div className='bg-gray-900 h-screen text-white pt-12'>
            <div className='w-full '>
                <div className='flex h-24 w-full items-center justify-center'>
                    <form 
                        onSubmit={handleSubmit} 
                    >
                        <SearchBar  placeholder={value}/> 
                    </form>
                </div>
                <div className='h-screen  w-screen bg-gray-900 grid_image_search overflow-hidden overflow-y-auto '>
                    {
                        results.slice(0, 20).map((prop) => {
                            counter++
                            return <Dish className='' key={prop.id} prop={counter} />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;