import React from 'react';

export default function CTAAndFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center font-sans ">

            {/* ========================================================
          1. CTA SECTION (The upper container with the text & buttons)
         ======================================================== */}
            <section className="relative w-full max-w-7xl mx-auto px-6 py-28 md:py-36 flex flex-col items-center text-center  ">

                {/* Placeholder wrapper for your custom background image/effect */}
                <div className="dark:block hidden absolute inset-0 pointer-events-none z-0">
                    <img src="/Assets/cta-bg.png" alt="bg image" />
                </div>

                {/* Text and Actions Container */}
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                        Your next role is <br /> already looking for you
                    </h2>

                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mb-10 leading-relaxed">
                        Build a profile in three minutes. The matches start arriving tomorrow morning.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-indigo-500/20   active:scale-[0.98]">
                            Create a free account
                        </button>
                        <button className="w-full sm:w-auto px-6 py-3.5 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm rounded-xl hover:bg-slate-100 dark:hover:bg-white/10  active:scale-[0.98]">
                            View pricing
                        </button>
                    </div>
                </div>
            </section>

            {/* ========================================================
          2. FOOTER SECTION 
         ======================================================== */}
            <footer className="w-full max-w-7xl mx-auto px-6 pt-16 pb-8 border-t border-slate-100 dark:border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-6 mb-16 text-left">

                    {/* Brand/Logo Column */}
                    <div className="lg:col-span-2 flex flex-col items-start">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Custom Programming Hero Logo/Icon Placeholder */}
                            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                                P
                            </div>
                            <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                                Programming<br /><span className="text-xs font-medium text-slate-400 block -mt-1">Hero</span>
                            </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Job discovery</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Worker AI</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Companies</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Salary data</a></li>
                        </ul>
                    </div>

                    {/* Navigations Links */}
                    <div>
                        <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4">
                            Navigations
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Help center</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Career library</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-xs font-bold tracking-wider uppercase text-slate-400 dark:text-slate-500 mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Brand Guideline</a></li>
                            <li><a href="#" className="hover:text-indigo-500 transition-colors">Newsroom</a></li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom Meta Section */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 dark:border-white/5 gap-4 text-xs text-slate-400 dark:text-slate-500 font-medium">

                    {/* Social Icons Placeholder Links */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Facebook</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pinterest</a>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
                    </div>

                    {/* Legal and Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                        <span>Copyright {currentYear} — Programming Hero</span>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms & Policy</a>
                            <span>·</span>
                            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Guideline</a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
}