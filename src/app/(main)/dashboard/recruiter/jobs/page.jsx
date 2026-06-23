import { getJobs } from '@/lib/api/jobs';
import React from 'react';

import { Table } from "@heroui/react";
// import { Eye, Pencil, Trash2 } from "lucide-react";
import { FaEdit, FaEye, FaRegEye, MdModeEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';


const RecruiterJobPage = async () => {
    const companyId = "company_123"; // Replace with actual company ID
    const jobs = await getJobs(companyId);
    console.log(jobs);
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Jobs Table" className="min-w-[700px]">

                        {/* Header */}
                        <Table.Header>
                            <Table.Column isRowHeader>Job Title</Table.Column>
                            <Table.Column>Type / Category</Table.Column>
                            <Table.Column>Location</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Actions</Table.Column>
                        </Table.Header>

                        {/* Body */}
                        <Table.Body>
                            {jobs.map((job) => (
                                <Table.Row key={job._id}>

                                    {/* Job Title */}
                                    <Table.Cell>{job.jobTitle}</Table.Cell>

                                    {/* Type / Category */}
                                    <Table.Cell>
                                        {job.jobType} / {job.jobCategory}
                                    </Table.Cell>

                                    {/* Location */}
                                    <Table.Cell>{job.location}</Table.Cell>

                                    {/* Status */}
                                    <Table.Cell>
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-semibold text-white ${job.status === "active"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                                }`}
                                        >
                                            {job.status}
                                        </span>
                                    </Table.Cell>

                                    {/* Actions */}
                                    <Table.Cell>
                                        <div className="flex gap-3 items-center">

                                            <button title="View">
                                                <FaRegEye size={18} />
                                            </button>

                                            <button title="Edit">
                                                <FaEdit size={18} />
                                            </button>

                                            <button title="Delete">
                                                <MdDelete size={18} />
                                            </button>

                                        </div>
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>

                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default RecruiterJobPage;