import { TechnologyUsage } from "./Technologies";

export interface IProjectComponent{
    name: string;
    description: string;
    git?: string;
    technologies: Array<TechnologyUsage>;
    link_variable_map: {
        [key: string]: string
    }
}

export interface IProjectRoot{
    name: string;
    brief_description: string;
    git?: string;
    subcomponents: Array<IProjectComponent | string>
    thumbnail?: string; // image to display
    technologies?: Array<string>; //populated through looking at components
}

export interface BaseProfileRetrievalInterface{
    listProjects(): Array<IProjectRoot>;
    getProject(name: string, populated?: boolean): IProjectRoot;
};