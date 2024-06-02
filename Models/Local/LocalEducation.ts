import {Education, EducationProvider} from "../Interfaces/Education";

const LocalEducation: Education[] = [
    {
        provider: "Rensselaer Polytechnic Institute",
        date_end: "06/01/2020",
        date_start: "08/01/2016",
        description: "My current highest level of education, at RPI I studied computer science, specializing in system design, on completion I earned a Bachelors of Science in Computer Science (GPA 3.18)",
        link: "https://science.rpi.edu/computer-science",
        type: "PRIMARY",
        degree: "Bachelors of Science in Computer Science",
        grade_or_gpa: "3.18"
    },
    {
        provider: "MIT Institute for Data, Systems, and Society",
        description: "An 12 week online certificate program describing data science fundamentals and machine learning",
        date_start: "05/12/2024",
        date_end: "Present",
        type: "CERTIFICATE",
        link: "https://idss-gl.mit.edu/mit-idss-data-science-machine-learning-online-program"
    },
    {
        provider: "Voidstar Security",
        description: "A week long crash course into digital communication interfaces, hardware debugging, and firmware extraction techniques",
        date_start: "04/10/2023",
        date_end: "04/15/2023",
        type: "COURSE",
        link: "https://voidstarsec.com/training"
    }
]

export class LocalEducationProvider implements EducationProvider{
    listEducation(): Education[] {
        return Object.values(LocalEducation);
    }

    listEducationByType(type: string): Education[] {
        let education_of_type: Education[] = [];
        Object.values(LocalEducation).forEach((education) => {
            if(education.type === type){
                education_of_type.push(education);
            }
        })
        return education_of_type;
    }
}