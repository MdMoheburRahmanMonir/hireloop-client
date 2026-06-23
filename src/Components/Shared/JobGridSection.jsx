import React from 'react';

export default function JobGridSection() {
    // Mock Data for the 6 cards based on your layout
    const jobs = [
        { id: 1, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
        { id: 2, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
        { id: 3, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
        { id: 4, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
        { id: 5, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
        { id: 6, title: 'Frontend Developer', location: 'New York, USA', type: 'Hybrid', salary: '€25–€40/hour' },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center   font-sans min-h-screen">

            {/* Top Subtitle */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                    Smart Job Discovery
                </span>
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-2xl mb-16  ">
                The roles you'd never find by searching
            </h2>

            {/* 3x2 Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="dark:bg-white/5 bg-black/5  backdrop-blur-[7px] border border-white/10 shadow shadow-lg dark:shadow-white/20 shadow-black/20 rounded-2xl p-8 flex flex-col justify-between text-left  hover:-translate-y-1 hover:shadow-md  "
                    >
                        <div>
                            {/* Job Title */}
                            <h3 className="text-xl font-bold   mb-3">
                                {job.title}
                            </h3>

                            {/* Short Description */}
                            <p className="text-sm   leading-relaxed mb-6">
                                Showcase your commitment to diversity and inclusion by highlighting initiatives.
                            </p>

                            {/* Tag Details Container */}
                            <div className="flex flex-col gap-3 mb-8">
                                {/* Location Tag */}
                                <div className="flex items-center gap-2 text-xs font-medium  ">
                                    <svg className="w-4 h-4  " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{job.location}</span>
                                </div>

                                {/* Job Type Tag (Hybrid/Remote) */}
                                <div className="flex items-center gap-2 text-xs font-medium  ">
                                    <svg className="w-4 h-4  " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>{job.type}</span>
                                </div>

                                {/* Salary Tag */}
                                <div className="flex items-center gap-2 text-xs font-medium  ">
                                    <svg className="w-4 h-4  " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16c1.657 0 3-.895 3-2s-1.343-2-3-2-3-.895-3-2 1.343-2 3-2m0 8V7m0 9v1" />
                                    </svg>
                                    <span>{job.salary}</span>
                                </div>
                            </div>
                        </div>

                        {/* Apply Button Action */}
                        <button className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors w-fit group">
                            Apply Now
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            {/* Bottom CTA Button */}
            <button className="mt-4 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-sm rounded-xl shadow-sm  active:scale-[0.98]">
                View all job open
            </button>

        </section>
    );
}