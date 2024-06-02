import {Router} from "express";
import {Education, EducationProvider} from "../Models/Interfaces/Education";


export const createEducationRouter = (model: EducationProvider) => {
    const educationRouter = Router();

    educationRouter.get("/", (req, res) => {
        //list all the jobs I have had
        const allEducation = model.listEducation();
        res.send({
            "data": allEducation
        })
    });
    
    educationRouter.get("/:educationType", (req, res) => {
        res.send({
            "data": model.listEducationByType(req.params.educationType)
        })
    });

    return educationRouter;
}

