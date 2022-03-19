import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../components/SearchBar';
import { Dishes } from '../components/Dishes';
import mockdata from '../assets/MOCK_DATA2.json';
import './pages.css'
import { obtain, saveData } from '../redux/actions/search';

const SearchPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const {value} = useSelector(state => state.search);
    const {results} = mockdata;
    const [filterData, setFilterData] = useState([...results]);
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value)
        dispatch(obtain(e.target[0].value));
        dispatch(saveData(results));
        navigate('/search');
    };

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        const newFilter = results.filter((value) => {
            // console.log(value.tile.includes(searchWord));
            return value.tile.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFilterData([...results]);
        }else {
            setFilterData(newFilter);
        };
    };  
    
    return (
        <div className='bg-gray-900 h-screen text-white pt-12'>
            <div className='w-full'>
                <div className='flex h-24 items-center justify-center'>
                    <form 
                        onSubmit={handleSubmit}
                        onChange={handleFilter}
                    >
                        <SearchBar  placeholder={value}/> 
                    </form>
                </div>
                <div className='h-screen  w-screen bg-gray-900 grid_image_search overflow-hidden overflow-y-auto '>
                    {
                        filterData.slice(0, 20).map((prop) => {
                            const datajson = {...prop}
                            return  <div key={prop.id}>
                                        <Dishes data={datajson} />
                                        <p> {prop.tile}</p>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchPage;