'use client';
import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';

const Navbar = () => {
    const { data: session } = useSession();
    return (
        <div className='flex sticky z-50 top-0 w-11/12 max-w-7xl mx-auto items-center justify-between p-4'  >
            <div className='flex items-center gap-3 '>
                <Link href='/' >
                    <img width={180} src="/Assets/hireloop.png" alt="HireLoops Logo" className='object-contain dark:bg-white/10 bg-black/10 rounded-md px-3 py-1 backdrop-blur-[7px] ' />
                </Link>
            </div>
            <div className='flex items-center bg-transparent backdrop-blur-[7px] shadow shadow-lg shadow-black/10 dark:shadow-white/10 px-4 py-2 rounded-2xl' >
                <ul className='flex gap-6 text-lg font-medium  ' >
                    <Link href='/' >
                        <li className='truncate hover:text-blue-500 cursor-pointer' >Home</li>
                    </Link> 
                    <Link href='/company' >
                        <li className='truncate hover:text-blue-500 cursor-pointer' >Company</li>
                    </Link>
                    <Link href='/plans' >
                        <li className='truncate hover:text-blue-500 cursor-pointer' >Pricing</li>
                    </Link>
                    <Link href='/dashboard/recruiter' >
                        <li className='truncate hover:text-blue-500 cursor-pointer' >Dashboard</li>
                    </Link> 
                </ul>
                <ThemeSwitch />
                <span className='mx-6 text-2xl text-gray-600' >|</span>

                {session?.user ? (
                    <div className='flex items-center gap-3' >
                        <p>Welcome, {session.user.name}!</p>
                        <Link href='/profile' >
                            <button className='truncate  text-blue-500 py-2 font-bold rounded-lg' >Profile</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link href='/login' >
                            <button className='truncate  text-blue-500 py-2 font-bold rounded-lg' >Sign In</button>
                        </Link>
                        <Link href='/get_started' >
                            <button className='truncate bg-black dark:bg-white text-white font-bold dark:text-black px-4 py-2 rounded-lg ml-6' >Get Started</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;