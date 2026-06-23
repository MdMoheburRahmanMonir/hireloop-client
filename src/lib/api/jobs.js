import { serverFetch } from "../core/server";

 
export async function getJobs({ companyId, status = "active" }) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users?CompanyId=${companyId}&status=${status}`);
        const jobs = await response.json();
        return jobs;
    } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
    }
}

export async function  getJobFromApi() {
    return serverFetch('/api/jobs')
}