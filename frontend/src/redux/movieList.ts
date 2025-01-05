
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MovieListDetails {
  video_id: number,
  trailer_url: string;
  title: string, name: string, original_name: string,
    url: string, movie: string, overview: string, backdrop_path: string, poster_path: string,
    is_series: boolean;
    description: string;
    video_url: string;
}

const initialState: MovieListDetails[] = [];

const movieListSlice = createSlice({
  name: 'movieListDetails',
  initialState,
  reducers: {
    setMovieListDetails: (state, action: PayloadAction<MovieListDetails[]>) => {
      return action.payload;
    }
  }  
});

// Action creators for signup details
export const { setMovieListDetails } = movieListSlice.actions;

export default movieListSlice.reducer;

