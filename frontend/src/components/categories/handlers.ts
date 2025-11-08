import { MoviesSeriesCategories } from "../apiCalls/types";

type CategoryClick = {
    category: MoviesSeriesCategories
    setCategory: React.Dispatch<React.SetStateAction<MoviesSeriesCategories | undefined>>
}

export const handleCategoryClick = ({category, setCategory}: CategoryClick) =>{
    setCategory(category);
}