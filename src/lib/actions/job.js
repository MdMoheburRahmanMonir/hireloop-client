'use server'

const uri = process.env.NEXT_PUBLIC_BASE_URL;

export async function createJob(data) {
    try {
        const response = await fetch(`${uri}/api/jobs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
        console.log(result);
    } catch (error) {
        console.error("Error creating job:", error);
        throw error;
    }
}