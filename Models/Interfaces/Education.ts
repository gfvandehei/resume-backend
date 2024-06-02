export interface Education{
    provider: string;
    type: "PRIMARY" | "CERTIFICATE" | "COURSE";
    degree?: string;
    certificate?: string;
    grade_or_gpa?: string;
    description: string;
    date_start: string;
    date_end: string;
    image?: string;
    link: string;
};

export interface PrimaryEducation extends Education{
    courses: Array<string>;
    gpa: number;
    degree: string;
};

export interface Certificate extends Education{
    certificate: string;
    skills: string;
};

export interface EducationProvider{
    listEducation(): Array<Education>;
    listEducationByType(type: string): Array<Education>;
}