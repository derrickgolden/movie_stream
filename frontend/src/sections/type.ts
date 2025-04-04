import { LandingPageMovieDetails } from "../components/apiCalls/types";

export interface ToggleProps{
    toggle: {
        link: string;
        isOpen: boolean;
    };
    setToggle: React.Dispatch<React.SetStateAction<{
        link: string;
        isOpen: boolean;
    }>>;
    setIsLandingReady: React.Dispatch<React.SetStateAction<boolean>>;
    setColumnShow: React.Dispatch<React.SetStateAction<"movies" | "series" | "watching" | "newuploads">>;
    columnShow: "movies" | "series" | "watching" | "newuploads";
    pageDetails: LandingPageMovieDetails | undefined

}