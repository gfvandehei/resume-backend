import {BaseJobRetrievalInterface, BasicJobModel, JobRoles} from "../Interfaces/Jobs";

const Jobs: Array<BasicJobModel> = [
    {
        id: "1",
        title: "Assistant Staff, Software Engineering",
        type: "PROFESSIONAL",
        workplace: {
            name: "MIT Lincoln Laboratories, Cyber Physical Systems Group",
            link: "https://www.ll.mit.edu/r-d/cyber-security-and-information-sciences/cyber-physical-systems"
        },
        description: "At Lincoln Laboratories I have worked in a variety of projects and roles, ranging from being an individual contributor on prototype systems,\
         to testing new exploits on 5G devices, to leading a development project of my own. Working in this cutting edge space has exposed me to new technologies seemingly daily, honing my development\
         skills as a full stack engineer through developing software on a range of systems, from the LLSC TX-Green supercomputer, to embedded microcontrollers, in a healthy variety of languages",
        end_date: "Present",
        start_date: "05-01-2022",
        roles: [
            {
                display_name: "Project Lead",
                project_name: "Project #1",
                start_date: "05-01-2024",
                end_date: "Present",
                summary: "On request of the projects sponsor I got the opportunity to act as both the lead developer, and project lead on a new development effort for a prototype testbed system,\
                    this was my first time filling these roles, and there was of course an interesting learning curve to some of the new administrative tasking that came with them. However the reward\
                    of guiding the design and seeing things go from imagination to physcal presence, while still being able to contribute to the codebase was has been unmatched.",
                technologies: ["Python 3.12", "C++ (20)", "Typescript", "Software Defined Radios", "AI/ML", "HPC", "Apache Kafka", "React", "PostgresDB", "Linux"]
            },
            {
                display_name: "Individual Contributor",
                project_name: "Project #2",
                start_date: "01-01-2024",
                end_date: "Present",
                summary: "On Project #2 I acted as a contributor to both the web-app frontend of our prototype system, and added features/squashed bugs on another software component that interfaced with software defined\
                    radios. Recently the prototype system that was built has been deployed operationally by the programs sponsor.",
                technologies: ["C++ (16)", "Software Defined Radios", "Raspberry PI", "Nvidia Jetson", "Generative AI", "React", "Linux", "Embedded Systems"]
            }
        ]
    }
]

export class LocalJobsModel implements BaseJobRetrievalInterface<BasicJobModel>{
    getJobByID(id: string): BasicJobModel {
        // in this case the ID is just the {job role}:{workplace name}
        const arr_id = id.split(":");
        const title = arr_id[0];
        const workplace_name = arr_id[1];
        const found = Jobs.find((job) => job.title === title && job.workplace.name === workplace_name); 
        if(found == undefined){
            throw(Error("Job not found"));
        } else{
            return found;
        }
    }

    getJobsByType(type: "INTERN" | "PROFESSIONAL" | "CO-OP"): BasicJobModel[] {
        return Jobs.filter((job) => job.type === type);
    }

    getJobsByWorkplace(workplace: string): BasicJobModel[] {
        return Jobs.filter((job) => job.workplace.name === workplace)
    }

    listJobs(): BasicJobModel[] {
        return Jobs;    
    }    
}