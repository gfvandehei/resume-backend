import {Router} from "express";
import {BaseProfileRetrievalInterface} from "../Models/Interfaces/Projects";


export const createProjectsRouter = (model: BaseProfileRetrievalInterface) => {
    const ProjectRouter = Router();

    ProjectRouter.get("/", (req, res) => {
        res.send({
            "data": model.listProjects()
        })
    });

    ProjectRouter.get("/:project_id", (req, res) => {
        res.send({
            "data": model.getProject(req.params.project_id)
        })
    })
    
    return ProjectRouter;
}

