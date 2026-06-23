import React from 'react';
// Importing specific GravityUI icons matching the Figma design
import { 
  ChevronRight, 
  ArrowUpRightSquare 
} from '@gravity-ui/icons';
import { FaFacebook } from 'react-icons/fa';

const topCompanies = [
  {
    id: 1,
    name: 'Google Inc.',
    industry: 'Technology',
    location: 'Mountain View',
    activeJobs: 24,
    icon: <FaFacebook className="w-5 h-5  " />, // Exact brand color
  },
  {
    id: 2,
    name: 'Meta Platforms',
    industry: 'Social Media',
    location: 'Menlo Park',
    activeJobs: 18,
    icon: <FaFacebook className="w-5 h-5  " />, // Exact brand color
  },
  {
    id: 3,
    name: 'Stripe',
    industry: 'Fintech',
    location: 'San Francisco',
    activeJobs: 12,
    icon: <FaFacebook className="w-5 h-5 " />, // Using Layers for Stripe-like structure
  },
  {
    id: 4,
    name: 'Tesla',
    industry: 'Automotive',
    location: 'Austin',
    activeJobs: 31,
    icon: <FaFacebook className="w-5 h-5  " />, // Matches the lightning bolt in your design
  },
];

export default function TopCompaniesList() {
  return (
    <div className="bg-black/1 dark:bg-white/10 col-span-1 rounded-lg p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[16px] tracking-tight">My Top Companies</h2>
        <button className=" transition-colors flex items-center gap-0.5">
          View all
        </button>
      </div>  
      

      {/* Companies List */}
      <div className="space-y-4 mb-6">
        {topCompanies.map((company) => (
          <div 
            key={company.id} 
            className="flex items-center justify-between p-2.5 rounded-xl   transition-colors group cursor-pointer"
          >
            {/* Left side: Logo & Details */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-black/40 dark:bg-white/10 flex items-center justify-center shadow shadow-lg shadow-black/10 dark:shadow-white/10">
                {company.icon}
              </div>
              <div>
                <h3 className="font-medium text-sm transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {company.industry} • {company.location}
                </p>
              </div>
            </div>

            {/* Right side: Active Jobs Count */}
            <div className="text-right">
              <div className="text-base font-semibold  ">
                {company.activeJobs}
              </div>
              <div className="text-[10px] text-zinc-500  tracking-widest font-semibold mt-0.5">
                Active Jobs
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Action Button */}
      <button className="w-full py-3.5 px-4 rounded-2xl shadow-lg shadow-black/10 hover:shadow-black/20 dark:shadow-white/10 hover:dark:shadow-white/20 bg-transparent   text-sm font-medium  flex items-center justify-center gap-2 group">
        <span>View All Companies</span>
        <FaFacebook className="w-4 h-4 transition-colors  " />
      </button>
    </div>
  );
}