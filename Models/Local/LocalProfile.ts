import {BaseProfileRetrievalInterface, IProfile} from "../Interfaces/Profile";

const LocalProfile: IProfile = {
    first_name: "Gabriel",
    last_name: "Vande Hei",
    about_me_blurb: "I design and build all aspects of high performance systems, from whiteboarding, to deployment",
    profile_image: "",
    title: "Full Stack Software Engineer"
}

export class LocalProfileModel implements BaseProfileRetrievalInterface{
    getProfile(){
        return LocalProfile;
    }
}