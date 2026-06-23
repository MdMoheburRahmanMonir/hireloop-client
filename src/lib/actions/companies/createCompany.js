'use server'

import { serverMutations } from "@/lib/core/server"

export const createCompany = async (newCompanyData) => {
    return serverMutations('/api/companies', newCompanyData)
}
 