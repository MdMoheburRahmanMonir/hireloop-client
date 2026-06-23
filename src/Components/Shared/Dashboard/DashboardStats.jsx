import { Briefcase, CircleCheck, Flame, Persons } from '@gravity-ui/icons';
import React from 'react';

const DashboardStats = () => {
    const statsData = [
        {
            id: 1,
            title: 'Total Job Posts',
            value: '48',
            icon: <Briefcase width={22} height={22} />,
        },
        {
            id: 2,
            title: 'Total Applicants',
            value: '1,284',
            icon: <Persons width={22} height={22} />,
        },
        {
            id: 3,
            title: 'Active Jobs',
            value: '18',
            icon: <Flame width={22} height={22} />,
        },
        {
            id: 4,
            title: 'Jobs Closed',
            value: '32',
            icon: <CircleCheck width={22} height={22} />,
        },
    ];
    return (
        <div className='flex justify-between gap-4 pb-5' >
            {statsData.map((stat) => (
                <div key={stat.id} className='flex p-5 bg-white/10 rounded-lg gap-9 w-full' >
                    <div className="flex items-center gap-4" >
                        <div className='p-2 flex justify-start w-fit bg-black/20 dark:bg-white/20 rounded-lg'>
                            {stat.icon}
                        </div>
                        
                        <div>
                            <p className='text-sm  w-full'>{stat.title}</p>
                            <p className='text-2xl font-bold'>{stat.value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DashboardStats;