import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm,setSignInForm] = useState()
    const toggleSignInForm= ()=>{

    }
  return (
    <div  >
        <Header/>
        <div
        className='  absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='backgroundImage'/>
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'> 
            <h1 className='font-bold text-3xl py-4'>Sign In</h1>
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-500 rounded-lg'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-500 rounded-lg'/>
            <button className='p-4 my-6 bg-red-600 w-full rounded-lg'>Sign In</button>
            <p className='py-4' onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
        </form>
    </div>
  )
}

export default Login