import React from 'react';

const ErrorPage = () => {
  return (
    <div className='bg-gray-900 h-screen text-white pt-12'>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <h3 className='text-5xl'>ERROR 404</h3>
        <br/>
        <p className='text-2xl'>Page not found.</p>
        <br/>
        <p>We couldn't find what you are looking for.</p>
        <p>:(</p>
      </div>
    </div>
  );
};

export default ErrorPage;