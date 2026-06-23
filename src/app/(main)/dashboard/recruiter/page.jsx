
import DashboardStats from '@/Components/Shared/Dashboard/DashboardStats';
import RecruiterTable from '@/Components/Shared/Dashboard/RecruiterTable';
import TopCompaniesList from '@/Components/Shared/Dashboard/TopCompaniesList';
import React from 'react';

const RecruiterPage = () => {
    return (
        <main className='w-full'>
            <h1 className='text-3xl font-bold mb-6' >Welcome to your Recruiter Dashboard</h1>

            <DashboardStats />
            <div className='grid grid-cols-3 ' >
                <RecruiterTable /> 
                <TopCompaniesList /> 
            </div>
            
        </main>
    );
};

export default RecruiterPage;