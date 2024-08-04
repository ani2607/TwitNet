"use client";
import { GoogleLogin } from '@react-oauth/google'
import React from 'react'

const RightNav = () => {
  return (
    <div className='py-10 '>
      
      <div className='p-5 bg-gray-900 w-64 flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-white p-2'>New to TwitNet?</h1>
      <GoogleLogin
         onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </div>
    </div>
  )
}

export default RightNav
