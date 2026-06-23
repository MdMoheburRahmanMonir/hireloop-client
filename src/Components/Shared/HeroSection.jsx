import React from 'react';

export default function HeroSection() {
    return (
        <section className="imgUrl bg-center bg-cover overflow relative w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center min-h-screen  ">

            {/* 1. Top Badge (50,000+ New Jobs) */}
            <div className="inline-flex items-center gap-2 bg-gray-900/5 border border-gray-900/10 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                {/* Figma Briefcase Badge Icon */}
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-semibold tracking-wider   uppercase">
                    50,000+ New Jobs This Month
                </span>
            </div>

            {/* 2. Main Headings */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-4xl font-sans">
                Find Your Dream Job Today
            </h1>
            <p className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
                HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role – faster.
            </p>

            {/* 3. Search Bar Container */}
            <div className=" w-full max-w-3xl flex flex-col md:flex-row items-center bg-white border border-gray-200/80 p-2 md:pl-6 lg:pl-6 pl-2 rounded-2xl md:rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] gap-4 md:gap-0 mb-6">

                {/* Search Input Icon */}
                <div className="flex items-center gap-3 w-full flex-1">
                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Job title, skill or company"
                        className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
                    />
                </div>

                <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-4" />

                {/* Location/Globe Input Icon */}
                <div className="flex items-center gap-3 w-full flex-1">
                    <svg className="w-5 h-5  text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Location or Remote"
                        className="w-full bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Search Submit Button */}
                <button className="w-full md:w-11 md:h-11 bg-cyan-600 hover:bg-cyan-700  text-white  rounded-xl md:rounded-full flex items-center justify-center p-3 md:p-0 shrink-0 shadow-sm shadow-indigo-200">
                    <svg className="w-5 h-5  " fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>

            {/* 4. Trending Tags */}
            <div className="flex text-white flex-col sm:flex-row items-center gap-3 text-sm mb-28">
                <span className="  font-medium">Trending Position</span>
                <div className="flex flex-wrap gap-2 justify-center">
                    {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map((tag) => (
                        <span
                            key={tag}
                            className="dark:bg-white/10 bg-black/10 px-4 py-1.5 rounded-full text-xs font-medium   cursor-pointer hover:bg-gray-200/80 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* 5. Assisting Title */}
            <h2 className="text-2xl text-white md:text-3xl font-semibold max-w-xl mb-12 leading-snug">
                Assisting over 15,000 job seekers find their dream positions.
            </h2>

            {/* 6. Transparent Glassmorphism Stats Cards */}
            <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-5 w-full max-w-5xl z-10">

                {/* Card 1: Active Jobs */}
                <div className="bg-white/10 backdrop-blur-xl  shadow shadow-lg dark:shadow-white/10 shadow-black/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left  hover:-translate-y-1  ">
                    <div className="p-2.5 bg-gray-900/5 border border-gray-900/5 rounded-xl mb-6  ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold mb-1 tracking-tight ">50K</span>
                    <span className="text-xs md:text-sm   font-medium">Active Jobs</span>
                </div>

                {/* Card 2: Companies */}
                <div className="backdrop-blur-xl bg-white/10  shadow shadow-lg dark:shadow-white/10 shadow-black/10  shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left  hover:-translate-y-1  ">
                    <div className="p-2.5 bg-gray-900/5 border border-gray-900/5 rounded-xl mb-6  ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold mb-1 tracking-tight ">12K</span>
                    <span className="text-xs md:text-sm   font-medium">Companies</span>
                </div>

                {/* Card 3: Job Seekers */}
                <div className="bg-white/10 backdrop-blur-xl shadow shadow-lg dark:shadow-white/10 shadow-black/10  shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left  hover:-translate-y-1  ">
                    <div className="p-2.5 bg-gray-900/5 border border-gray-900/5 rounded-xl mb-6  ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold mb-1 tracking-tight ">2M</span>
                    <span className="text-xs md:text-sm   font-medium">Job Seekers</span>
                </div>

                {/* Card 4: Satisfaction Rate */}
                <div className="bg-white/10 backdrop-blur-xl  shadow shadow-lg dark:shadow-white/10 shadow-black/10   shadow-[0_8px_32px_0_rgba(31,38,135,0.04)] rounded-2xl p-6 md:p-8 flex flex-col items-start text-left transition-all hover:-translate-y-1  ">
                    <div className="p-2.5 bg-gray-900/5 border border-gray-900/5 rounded-xl mb-6  ">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                    </div>
                    <span className="text-3xl md:text-4xl font-bold mb-1 tracking-tight ">97%</span>
                    <span className="text-xs md:text-sm   font-medium">Satisfaction Rate</span>
                </div> 
            </div>

        </section>
    );
}