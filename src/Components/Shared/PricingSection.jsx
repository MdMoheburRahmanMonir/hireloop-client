'use client'
import React, { useState } from 'react';
import { Rocket, Timeline, Diamond, Plus } from '@gravity-ui/icons'; 
import {ArrowRight} from '@gravity-ui/icons';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: '0',
      icon: <Rocket className="w-5 h-5 text-indigo-500" />,
      features: [
        'Daily AI match brief (top 5)',
        'Verified salary bands',
        'Company insight dashboards',
        '1-click apply, unlimited',
      ],
    },
    {
      name: 'Growth',
      price: isYearly ? '14' : '17',
      icon: <Timeline className="w-5 h-5 text-purple-500" />,
      popular: true,
      features: [
        'Daily AI match brief (top 5)',
        'Verified salary bands',
        'Company insight dashboards',
        '1-click apply, unlimited',
      ],
    },
    {
      name: 'Premium',
      price: isYearly ? '80' : '99',
      icon: <Diamond className="w-5 h-5 text-pink-500" />,
      features: [
        'Everything in Pro',
        'Multi-profile career portfolios',
        'Shared talent rooms',
        'Recruiter view (read-only)',
      ],
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. Pricing Badge */}
        <div className="flex items-center gap-2 mb-6 border border-slate-200 dark:border-white/10 px-4 py-1 rounded-full bg-slate-50 dark:bg-white/5">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 text-slate-800 dark:text-slate-200">
            Pricing
          </span>
        </div>

        {/* 2. Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-10 max-w-3xl leading-[1.1] text-slate-900 dark:text-white">
          Pay for the leverage, <br /> not the listings
        </h2>

        {/* 3. Monthly/Yearly Toggle */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-white/5 rounded-full mb-16 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 text-sm font-medium rounded-full  ${
              !isYearly ? 'bg-white dark:bg-white/10 shadow-sm' : 'opacity-50'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 text-sm font-medium rounded-full  ${
              isYearly ? 'bg-white dark:bg-white/10 shadow-sm' : 'opacity-50'
            }`}
          >
            Yearly <span className="ml-1 text-[10px] text-indigo-500 font-bold">-25%</span>
          </button>
        </div>

        {/* 4. Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl text-slate-900 dark:text-white">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col bg-slate-50 dark:bg-[#0a0a0a] border ${
                plan.popular 
                ? 'border-indigo-500/50 dark:border-indigo-500/30' 
                : 'border-slate-200 dark:border-white/10'
              } rounded-[2rem] p-8  hover:translate-y-[-4px]`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold  ">{plan.name}</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold  ">${plan.price}</span>
                  <span className="text-xs opacity-50 font-medium">/month</span>
                </div>
              </div>

              <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10 mb-8" />

              {/* Card Content / Features */}
              <div className="flex-grow">
                <p className="text-xs font-semibold uppercase tracking-wider mb-6 opacity-60">
                  Start building your insights hub:
                </p>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm opacity-85">
                      <Plus className="w-4 h-4 mt-0.5 opacity-60 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className={`w-full py-4 rounded-xl text-sm font-bold  flex items-center justify-center gap-2 group ${
                plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-indigo-500/20' 
                : 'bg-blue-500/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-blue-500 dark:hover:bg-white/10 text-slate-900 dark:text-white'
              }`}>
                Choose This Plan
                <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100  transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}