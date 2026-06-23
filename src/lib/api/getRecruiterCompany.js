'use server'

import { serverFetch } from "../core/server"


 

export const getRecruiterCompany = async (companyId) => {
    return serverFetch(`/api/companies?id=${companyId}`) 
}
