import DashboardSidebar from '@/Components/Shared/Dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen w-11/12 max-w-7xl mx-auto">
            <div>
                <DashboardSidebar />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;