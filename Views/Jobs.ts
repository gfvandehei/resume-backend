import {Router} from "express";
import {BaseJobRetrievalInterface, BasicJobModel} from "../Models/Interfaces/Jobs"

export interface ResourceListObject<T>{
    data: T;
    item_link: string;
}

export const createJobsRouter = (model: BaseJobRetrievalInterface<BasicJobModel>) => {
    const JobsRouter = Router();

    JobsRouter.get("/", (req, res) => {
        //list all the jobs I have had
        const allJobs = model.listJobs();
        const resource_list = allJobs.map((job) => {
            return {
                data: job,
                item_link: req.baseUrl+`/${job.id}`
            }
        })
        res.send({
            "data": resource_list
        })
    });
    
    JobsRouter.get("/:jobid", (req, res) => {
        res.send({
            "data": model.getJobByID(req.params.jobid)
        })
    });

    return JobsRouter;
}

