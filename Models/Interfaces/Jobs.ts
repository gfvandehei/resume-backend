export interface JobRoles{
    display_name: string;
    project_name?: string;
    summary: string;
    start_date: string;
    end_date: string;
    technologies: Array<string>;
}

export interface BasicJobModel{
    id: string;
    title: string;
    type: "INTERN" | "PROFESSIONAL" | "CO-OP";
    workplace: {
        name: string;
        link: string;
    }
    description: string;
    start_date: string;
    end_date: string;
    roles?: Array<JobRoles>;
}

export interface BaseJobRetrievalInterface<T>{
    listJobs(): Array<T>;
    getJobByID(id: string): T;
    getJobsByWorkplace(workplace: string): Array<T>;
    getJobsByType(type: "INTERN" | "PROFESSIONAL" | "CO-OP"): Array<T>;
}