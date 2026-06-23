"use client"

import React, { useState } from 'react';
import { Person, Lock, Eye, EyeSlash, ArrowRight, Picture } from '@gravity-ui/icons';
import { Description, Radio, RadioGroup } from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { Label, ListBox, Select } from "@heroui/react";



export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [role, setRole] = useState('job-seeker'); // Default role
    console.log(role);

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await authClient.signUp.email({
                name, // required
                email, // required
                password, // required
                image: imageUrl, // optional
                role, // optional
                callbackURL: "/",
            });
            if (error) {
                console.log(error);
                console.log("error triggered");
            } else {
                console.log(data);
                console.log("data triggered");
            }
            if (data.ok) {
                console.log("rest triggered");
                
            }
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <section className="w-full min-h-screen bg-gray-50 dark:bg-[#030303] transition-colors   flex items-center justify-center px-6 py-3 font-sans overflow-hidden relative">

            <div className="absolute inset-0 pointer-events-none z-0"></div>

            {/* Main Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.03)] rounded-[2rem] p-8 md:p-10 flex flex-col">

                {/* Brand Logo / Header */}
                <div className="flex flex-col items-center mb-8 text-center w-full">

                    <img src="/Assets/hireloop.png" alt="Hireloop Logo" />

                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 w-full">
                        Create an account
                    </h1>
                    <p className="text-xs md:text-sm">
                        Get started with your free hireloop talent profile
                    </p>
                </div>

                {/* Form Container */}
                <form onSubmit={handleSignup} className="space-y-4 w-full">

                    {/* 1. Full Name Input Field */}
                    <div className="space-y-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider">
                            Full Name
                        </label>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Person className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                autoComplete="name"
                                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-current placeholder:opacity-40"
                                required
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* 2. Image URL Input Field */}
                    <div className="space-y-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider">
                            Profile Image URL
                        </label>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Picture className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type="url"
                                placeholder="https://example.com/avatar.jpg"
                                value={imageUrl}
                                autoComplete="url"
                                className="w-full bg-transparent border-none outline-none text-sm placeholder:text-current placeholder:opacity-40"
                                required
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* 3. Email Input Field */}
                    <div className="space-y-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider">
                            Email Address
                        </label>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Person className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type="email"
                                placeholder="name@company.com"
                                value={email}
                                autoComplete="email"
                                className="  w-full bg-transparent border-none outline-none text-sm placeholder:text-current placeholder:opacity-40"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* 4. Password Input Field */}
                    <div className="space-y-1.5 w-full">
                        <label className="text-xs font-semibold uppercase tracking-wider">
                            Password
                        </label>
                        <div className="relative flex items-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 shadow-sm transition-colors group w-full">
                            <Lock className="w-4 h-4 mr-3 shrink-0 transition-opacity" />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                autoComplete="new-password"
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
                    <div className="flex flex-col gap-4">
                        <Label>Your Role</Label>
                        <RadioGroup onChange={(value) => setRole(value)} defaultValue="job-seeker" name="role" orientation="horizontal">
                            <Radio value="job-seeker">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Job Seeker</Label>
                                </Radio.Content>
                            </Radio>
                            <Radio value="Recruiter">
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>Recruiter</Label>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 group    active:scale-[0.98] mt-2"
                    >
                        Create account
                        <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100  transform group-hover:translate-x-1" />
                    </button>
                </form>

                {/* Divider text */}
                <div className="relative flex items-center justify-center my-6 w-full">
                    <div className="absolute w-full h-[1px] bg-current opacity-10"></div>
                    <span className="relative bg-transparent px-3 text-xs uppercase tracking-wider font-medium">
                        Or sign up with
                    </span>
                </div>

                {/* Social Authentication */}
                <button className="w-full py-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 font-semibold text-sm rounded-xl flex items-center justify-center gap-3     active:scale-[0.98]">
                    <FcGoogle className="w-5 h-5 shrink-0" />
                    Sign up with Google
                </button>

                {/* Footer Navigation */}
                <p className="mt-8 text-center text-xs font-medium w-full">
                    Already have an account?{' '}
                    <a href="/login" className="font-bold hover:underline text-blue-500">
                        Sign in instead
                    </a>
                </p>

            </div>
        </section>
    );
}