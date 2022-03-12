import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Forminput } from '../components/Forminput.js';
import { logIn } from '../redux/actions/auth.js';

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const formStyle = {
    width: '280px'
  };

  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      errorMessage: 'It should be a valid email adress',
      label: 'Email',
      required: true
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'password',
      errorMessage: 'Password should be between 6-30 characters and include at least 1 letter and 1 number (valid special characters: @$!%*#?&)',
      label: 'Password',
      pattern: '^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9@$!%*#?&]{6,30}$',
      required: true
    }
  ];
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn());
    // console.log('submited');
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  // console.log(values);

  return (
    <div className='bg-gray-900 '>

      <div className='flex h-screen items-center justify-center'>
        <div>
          <form 
            style={formStyle}
            onSubmit={handleSubmit}
          >
            {inputs.map((input) => (
              <Forminput 
              key={input.id} {...input}
              value={values[input.name]} 
              onChange={onChange}
              />
              ))}
            <button className='text-white mt-4 w-full bg-black rounded-md pt-1 pb-1 '>Submit</button>
            <span> </span>
          </form>

          <button 
            onClick={() => {
              dispatch(logIn());
            }}
            className='text-white mt-4 w-full bg-black rounded-md pt-1 pb-1 ' 
          > Login</button>
          </div>
      </div>

    </div>
  );
  
};
