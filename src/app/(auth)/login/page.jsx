"use client"

import React, { useState } from 'react';
import { Person, Lock, Eye, EyeSlash, ArrowRight } from '@gravity-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';

export default function LoginPagenp() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email, password);
    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await authClient.signIn.email({
                email, // required
                password, // required
                rememberMe: true,
                callbackURL: "/",
            });
            console.log(data, error);

        } catch (catcherror) {
            console.log(catcherror);
        } 


    };


    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-[#030303] transition-colors flex items-center justify-center px-6 py-3   font-sans overflow-hidden relative">


            <div className="absolute inset-0 pointer-events-none z-0"></div>


            <div className="relative z-10 w-full max-w-md bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.03)] rounded-[2rem] p-8 md:p-10 flex flex-col">

                {/* Brand Logo / Header */}
                <div className="flex flex-col items-center mb-8 text-center w-full">
                    <img src="/Assets/hireloop.png" alt="Hireloop Logo" />
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 w-full">
                        Welcome back
                    </h1>
                    <p className="text-xs md:text-sm">
                        Enter your details to access your hireloop account
                    </p>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSignIn} className="space-y-5 w-full">

                    {/* Email Input Field */}
                    <div className="space-y-2 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider">
                            Email Address
                        </label>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Person className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-current placeholder:opacity-40"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Password Input Field */}
                    <div className="space-y-2 w-full">
                        <div className="flex items-center justify-between w-full">
                            <label className="text-xs font-semibold uppercase tracking-wider">
                                Password
                            </label>
                            <a href="#" className="text-xs font-medium hover:underline  ">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Lock className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-current placeholder:opacity-40"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="shrink-0 ml-2 transition-opacity focus:outline-none"
                            >
                                {showPassword ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me Checkbox */}
                    <div className="flex items-center gap-2 pt-1 w-full">
                        <input
                            type="checkbox"
                            id="remember"
                            className="w-4 h-4 rounded bg-transparent accent-indigo-600 cursor-pointer"
                        />
                        <label htmlFor="remember" className="text-xs font-medium cursor-pointer select-none">
                            Keep me logged in for 30 days
                        </label>
                    </div>

                    {/* Sign In Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group   active:scale-[0.98]"
                    >
                        Sign in to account
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100    transform group-hover:translate-x-1" />
                    </button>
                </form>

                {/* Divider text */}
                <div className="relative flex items-center justify-center my-6 w-full">
                    <div className="absolute w-full h-[1px] bg-current opacity-10"></div>
                    <span className="relative bg-transparent px-3 text-xs uppercase tracking-wider font-medium">
                        Or continue with
                    </span>
                </div>

                {/* Social Authentication */}
                <button className="w-full py-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 font-semibold text-sm rounded-xl flex items-center justify-center gap-3   active:scale-[0.98]">
                    <FcGoogle className="w-5 h-5 shrink-0" />
                    Continue with Google
                </button>

                {/* Footer Navigation */}
                <p className="mt-8 text-center text-xs font-medium w-full">
                    Don't have an account?{' '}
                    <a href="/signup" className="font-bold hover:underline text-blue-500">
                        Create free account
                    </a>
                </p>

            </div>
        </section>
    );
}