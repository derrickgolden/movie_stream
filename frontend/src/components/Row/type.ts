import { HoveredMovie } from "../../sections/LandingPage";

export interface RowProps{
    title: string;
    fetchUrl: string; 
    isLargeRow: boolean;
    setHoveredMovie: React.Dispatch<React.SetStateAction<HoveredMovie>>;
    setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
    type: "movies" | "series" | "both";
    theDevice: "laptop" | "phone" | "tv";
}