
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Episode {
    id: number;
    video_url: string;
    runtime: number;
    overview: string;
    episode_id: number;
    episode_no: number;
    episode_name: string;
    episode_order: number;
    thumbnail_path: string;
    subtitles_url: string;
}

interface Season {
    season_id: number;
    season_name: string;
    season_order: number;
    trailer_url: string;
    episodes: Episode[];
}

export interface SeriesListDetails {
    video_id: number;
    title: string;
    description: string;
    release_date: string | null;
    is_series: number; // Use 0 or 1 to represent boolean-like behavior
    backdrop_path: string;
    poster_path: string;
    seasons: Season[];
    watch_progress: {
      progress: number;
      completed: boolean;
      episode_id: number | null;
    }
}


const initialState: SeriesListDetails[] = [];

const seriesListSlice = createSlice({
  name: 'seriesListDetails',
  initialState,
  reducers: {
    setSeriesListDetails: (state, action: PayloadAction<SeriesListDetails[]>) => {
      return action.payload;
    }
  }  
});

// Action creators for signup details
export const { setSeriesListDetails } = seriesListSlice.actions;

export default seriesListSlice.reducer;

