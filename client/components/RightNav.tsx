"use client";
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user';
import { graphqlClient } from '@/queryClient/api';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import React, { useCallback } from 'react'
import toast from 'react-hot-toast';

const RightNav = () => {

  const handleLoginWithGoogle = useCallback(async(cred :CredentialResponse )=>{
    const googleToken = cred.credential;

    if(!googleToken) return toast.error("Login Failed");

    const {verifyGoogleToken} = await graphqlClient.request(verifyUserGoogleTokenQuery,{token : googleToken});

    toast.success("verified");

    if(verifyGoogleToken){
      window.localStorage.setItem('__twitnetToken__' , verifyGoogleToken);
    }
    console.log(verifyGoogleToken);

  },[])
  return (
    <div className='py-10 '>
      
      <div className='p-5 bg-gray-900 w-64 flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-white p-2'>New to TwitNet?</h1>
      <GoogleLogin
         onSuccess={handleLoginWithGoogle}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      </div>
    </div>
  )
}

export default RightNav
