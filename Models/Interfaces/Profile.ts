export interface IProfile{
    first_name: string;
    last_name: string;
    title: string;
    about_me_blurb: string;
    profile_image: string;
}

export interface BaseProfileRetrievalInterface{
    getProfile(): IProfile;
};