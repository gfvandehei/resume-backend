import {IProjectRoot, IProjectComponent, BaseProfileRetrievalInterface} from "../Interfaces/Projects";

const Projects: {[name: string]: IProjectRoot} = {
    "Resume-Site": {
        name: "Resume-Site",
        brief_description: "This web page(s), created to display some information about myself",
        subcomponents: [
            {
                name: "Resume-Site-Backend",
                description: "A Node (Express) based backend I am serving resume information from",
                link_variable_map: {},
                technologies: [{
                        technology_name: "Typescript",
                        usage_description: "The statically typed language I have written the backend in",
                        why_description: "I choose Typescript over Javascript due to the fact it is statically typed, allowing me to catch some syntax and semantic errors that would require a bit more debugging in vanilla Javascript and getting rid of some of its ambiguity"
                    }, {
                        technology_name: "Node.js",
                        usage_description: "The runtime I am running the javascript (compiled from the Typescript) for the server through",
                        why_description: "Node.js was choosen as the backend runtime due to its ease of use, my familiarity with it, and the fact that I was using React for the frontend (also TS)"
                    },
                    {
                        technology_name: "MongoDB",
                        usage_description: "The document based NoSQL database I am storing all of this data in, unless I am just loading JSON files (unless?)",
                        why_description: "Easy to use, and a simple transition from basic json documents where I was prototyping, when the model changes often (as it does early in development) this allows me to adapt quickly without having to change the database model"
                    },
                    {
                        technology_name: "Docker",
                        usage_description: "Portability and deployment of the backend in a container, dependency management",
                        why_description: "Containers are fantastic, I love containers"
                    }
                ]
            }, {
                name: "Resume-Site-Frontend",
                description: "A React application built through Vite.js",
                link_variable_map: {},
                technologies: [{
                    technology_name: "Typescript",
                    usage_description: "The statically typed language I have written the frontend in",
                    why_description: "I choose Typescript over Javascript due to the fact it is statically typed, allowing me to catch some syntax and semantic errors that would require a bit more debugging in vanilla Javascript and getting rid of some of its ambiguity"
                }, {
                    technology_name: "React",
                    usage_description: "The javascript framework I decided to build the frontend on top of",
                    why_description: "React is quick to get up and running, and easy to build reusable components in speeding up development. Familiarity does not hurt."
                }, {
                    technology_name: "Vite.js",
                    usage_description: "A fantastic drop in replacement for the create react app, makes bootstrapping a react application easy and provides a ton of development tools",
                    why_description: "Speedy bootstrapping, quick development server, and fantastic support. I am a big fan of Vite after using create-react-app"
                }, {
                    technology_name: "Apache Web Server",
                    usage_description: "Chances are if you are not accessing this though the development server, you are accessing this through Apache Web Server deployed with docker",
                    why_description: "In all honesty Apache Web Server is my go to, I just happened to use it before NGINX"
                }, {
                    technology_name: "Docker",
                    usage_description: "Portability and deployment of the Apache in a container, dependency management",
                    why_description: "Containers are fantastic for deploying things, and docker manages containers"
                }]
            }
        ],
    }
}

export class LocalProjectsModel implements BaseProfileRetrievalInterface{
    listProjects(): IProjectRoot[] {
        return Object.values(Projects);
    }

    getProject(name: string, populated?: boolean | undefined): IProjectRoot {
        return Projects[name];
    }
}