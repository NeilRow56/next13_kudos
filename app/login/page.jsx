"use client"
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const LoginPage = () => {

    const [show, setShow] = useState(false)

    

  return (
    <>
    
         <section className='w-2/6 mx-auto flex flex-col gap-10'>
            <div className='title text-center'>
                <h2 className="text-5xl font-extrabold text-blue-700 mt-5">Welcome to Kudos!</h2>
        <p className="font-semibold  mt-5 text-blue-700">Log In To Give Some Praise!</p>

            </div>

            {/* Form */}
            <form className='flex flex-col gap-5'>
                
                <div className='input_group'>
                    
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className='input_text'
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                </div>
               
                <div className='input_group'>
                    
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='Password'
                    className='input_text'
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                </div>

                {/* login buttons */}
                <div className='button'>
                    <button type='submit'>
                        Login
                    </button>
                </div>
               
            </form>

            {/* Bottom */}
            <p className='text-center text-red-400 '>
                Don&apos;t have an account yet? <Link href={'/register'} className='text-blue-700'>Sign Up</Link>
            </p>
        </section>
    </>
    
  )
}

export default LoginPage
