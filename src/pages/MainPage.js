import React from 'react';
import { useSelector } from 'react-redux';
import Menugrid from '../components/Menugrid';


export const MainPage = () => {

    const menuTen = useSelector(state => state.menu.action.menuData);

  return (
    <div className='bg-gray-900 min-h-screen  text-white pt-12'>

      <div>
        <h3 className='flex justify-center items-center max-heigh-40 h-40 text-lg'> Menu </h3>
      </div>
      <div className='w-full flex justify-center'>
        <div className=' mt-10  grid grid-cols-4 w-3/4'>
            {
              menuTen.map((prop) => {
                
                return  <div key={prop.id}>
                            <Menugrid menu={prop}/>
                        </div>
                })
            }
        </div>
      </div>
      <div className='w-full flex justify-center pt-10'>
        <p> The prices are unavailable and this is the Menu for this month</p>
      </div>
    </div>
  );
};
