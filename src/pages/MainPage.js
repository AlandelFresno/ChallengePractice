import React from 'react';
import { useSelector } from 'react-redux';
import Menugrid from '../components/Menugrid';


export const MainPage = () => {

    const menuTen = useSelector(state => state.menu.action.menuData);

  return (
    <div className='bg-gray-900 min-h-screen  text-white pt-12'>

      <div className='flex flex-row justify-center pt-4'>
        <p className='ml-4'> Price: counter</p>
        <p className='ml-4'> Preparation time: counter2</p>
        <p className='ml-4'> Health score: counter3</p>
      </div>
      <div className='w-full flex justify-center'>
        <div className=' mt-40  grid grid-cols-3 w-96'>
            {
              menuTen.map((prop) => {
                
                return  <div key={prop.id}>
                            <Menugrid menu={prop}/>
                        </div>
                })
            }
        </div>

      </div>
    </div>
  );
};
