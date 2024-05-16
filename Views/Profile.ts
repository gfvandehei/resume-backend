import {Router} from "express";
import {BaseProfileRetrievalInterface} from "../Models/Interfaces/Profile";


export const createProfileRouter = (model: BaseProfileRetrievalInterface) => {
    const ProfileRouter = Router();

    ProfileRouter.get("/", (req, res) => {
        res.send({
            "data": model.getProfile()
        })
    });
    
    return ProfileRouter;
}

