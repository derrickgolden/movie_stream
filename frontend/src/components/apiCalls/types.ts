export interface MovieListProps{
    video_id: number,
    title: string, name: string, original_name: string,
    video_url: string, movie: string, description: string, backdrop_path: string, poster_path: string
    is_series: boolean;
}
export interface MovieFile {
    order: number; // Sequence order of the file
    url: string;   // URL of the movie file
    label: string; // Display label or title for the file
    movie_id: number; // Foreign key referencing the movie
    title: string;
    movie_file_id: number;
  }

export  interface Episode {
    episode_id: number; // Unique identifier for the episode
    episode_name: string; // Name of the episode
    episode_order: number; // Order of the episode within the season
    thumbnail_path: string | null; // Path or URL to the episode thumbnail
    video_url: string; // URL of the episode source
    url: string;
  }
  
 export interface Season {
    season_id: number; // Unique identifier for the season
    season_name: string; // Name of the season
    season_order: number; // Order of the season
    episodes: Episode[]; // List of episodes in the season
  }
  
export  interface TvSeries {
    movie_id: number; // Unique identifier for the series
    title: string; // Title of the series
    description: string; // Description of the series
    release_date: string; // Release date of the series in YYYY-MM-DD format
    seasons: Season[]; // List of seasons in the series
  }
  
  