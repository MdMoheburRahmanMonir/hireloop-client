import React from 'react';

export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            title: 'Smart Search',
            description: 'Find your ideal job with advanced filters.',
            // Search Loupe Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Salary Insights',
            description: 'Get real salary data to negotiate confidently.',
            // Analytics/Trend Line Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'Top Companies',
            description: 'Apply to vetted companies that are hiring.',
            // Office/Building Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            id: 4,
            title: 'Saved Jobs',
            description: 'Manage apps & save jobs to your dashboard.',
            // Bookmark Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
            ),
        },
        {
            id: 5,
            title: 'One-Click Apply',
            description: 'Simplify your job applications for an easier process!',
            // Magic/Sparkle Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
        {
            id: 6,
            title: 'Resume Builder',
            description: 'Create professional resumes with modern templates.',
            // Document/Profile ID Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        {
            id: 7,
            title: 'Skill-Based Matching',
            description: 'Discover jobs that match your skills and experience.',
            // Hexagon Shield Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 8,
            title: 'Career Growth',
            description: 'Boost your career with expert interview tips.',
            // Growth Chart Icon
            icon: (
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center font-sans">

            {/* Small Badge Content */}
            <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                    Features Job
                </span>
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
            </div>

            {/* Main Feature Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-3xl mb-20 leading-tight">
                Everything you need to succeed
            </h2>

            {/* 4-Column Feature Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {features.map((item) => (
                    <div
                        key={item.id}
                        className="group dark:bg-white/5 bg-black/5  backdrop-blur-[7px] border border-white/10 shadow shadow-lg dark:shadow-white/20 shadow-black/20 rounded-2xl p-6 flex flex-col items-start text-left  hover:-translate-y-1 hover:bg-white/50 hover:shadow-md  "
                    >
                        {/* Transparent Glass Icon Box Container */}
                        <div className="p-3 bg-black/15 dark:bg-white/15 shadow-md shadow-black/20 dark:shadow-white/20 rounded-xl mb-5 group-hover:scale-105 transition-transform  ">
                            {item.icon}
                        </div>

                        {/* Feature Text Info */}
                        <h3 className="text-lg font-bold  mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm   leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}