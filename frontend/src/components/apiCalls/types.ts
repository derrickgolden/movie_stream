export interface MovieListProps{
    video_id: number,
    title: string, name: string, original_name: string,
    video_url: string, movie: string, description: string, backdrop_path: string, poster_path: string
    is_series: boolean;
    subtitles_url: string;
    progress: number;
    completed: boolean;
    credits_start: number
}
export interface MovieFile {
    order: number; // Sequence order of the file
    url: string;   // URL of the movie file
    label: string; // Display label or title for the file
    movie_id: number; // Foreign key referencing the movie
    title: string;
    movie_file_id: number;
    video_id: number;
    trailer_url: string;
    subtitles_url: string;
    credits_start: string
  }

export  interface Episode {
    episode_id: number; // Unique identifier for the episode
    episode_name: string; // Name of the episode
    episode_order: number; // Order of the episode within the season
    thumbnail_path: string; // Path or URL to the episode thumbnail
    video_url: string; // URL of the episode source
    url: string;
    subtitles_url: string;
    credits_start: number;
  }
  
 export interface Season {
    season_id: number; // Unique identifier for the season
    season_name: string; // Name of the season
    season_order: number; // Order of the season
    episodes: Episode[]; // List of episodes in the season
    trailer_url: string;
  }
  
export  interface TvSeries {
    video_id: number;
    movie_id: number; // Unique identifier for the series
    title: string; // Title of the series
    description: string; // Description of the series
    release_date: string; // Release date of the series in YYYY-MM-DD format
    seasons: Season[]; // List of seasons in the series
    watch_progress: {
      progress: number;
      completed: boolean;
      episode_id: number | null;
    }
  }
  
  export interface WatchedMovieOrSeries {
    movie_id: number;
    title: string;
    is_series: boolean;
    progress: number;
    completed: boolean;
    updated_at: string;
    season_order: number | null;
    episode_order: number | null;
}

export interface MoviesSeriesCategories {
  genre_id: number;
  genre_name: string;
  movies_series?: {
      video_id: number;
      title: string;
      is_series: number;
      description: string;
      backdrop_path: string;
  }[];
}

export interface MoviesDetailsRes {
  video_id: number;
  title: string;
  description: string;
  release_date: string; // ISO string
  is_series: 0 | 1;
  backdrop_path: string;
  poster_path: string;
  progress: number | null;
  completed: boolean | number | null;
  trailer_url: string;
  runtime: number;
  genres: string[];
  watch_progress?: {
    episode_id: number | null;
    progress: number;
    completed: boolean;
  } | null;
  total_seasons?: number | null;
  watch_count: number;
}

export interface LandingPageMovieDetails{
  movies: MoviesDetailsRes[];
  series: MoviesDetailsRes[];
  watching: MoviesDetailsRes[];
  newUploads: MoviesDetailsRes[];
}
  