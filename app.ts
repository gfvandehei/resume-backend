import express from "express";
import {LocalJobsModel} from "./Models/Local/LocalJobs";
import {createJobsRouter} from "./Views/Jobs";
import { createProfileRouter } from "./Views/Profile";
import { LocalProfileModel } from "./Models/Local/LocalProfile";
import {createProjectsRouter} from "./Views/Projects";
import { LocalProjectsModel } from "./Models/Local/LocalProject";
import { createEducationRouter } from "./Views/Education";
import { LocalEducationProvider } from "./Models/Local/LocalEducation";

const app = express();
const port = 3000;

const jobs_model = new LocalJobsModel();
const profile_model = new LocalProfileModel();
const projects_model = new LocalProjectsModel();
const education_model = new LocalEducationProvider();

app.use("/jobs", createJobsRouter(jobs_model));
app.use("/profile", createProfileRouter(profile_model));
app.use("/project", createProjectsRouter(projects_model));
app.use("/education", createEducationRouter(education_model));

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})