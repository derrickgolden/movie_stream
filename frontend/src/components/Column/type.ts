import { HoveredMovie } from "../../sections/LandingPage";
import { MoviesDetailsRes } from "../apiCalls/types";

export interface RowProps{
    data: MoviesDetailsRes[];
    isLargeRow: boolean;
    setHoveredMovie: React.Dispatch<React.SetStateAction<MoviesDetailsRes | undefined >>;
    setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>;
}