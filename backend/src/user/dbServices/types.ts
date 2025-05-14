
export interface MovieDetails {
    is_active: boolean;
    title: string;
    slug: string;
    adult: boolean;
    id: number;
    description: string;
    runtime: number;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    is_series: boolean;
    genres: {id: number, name: string}[]
    type: "movie" | "series";
  }
  
  export interface MovieFile {
    title: string; // Title of the movie
    credits_start: number;
    order: number; // Sequence order of the file
    url: string;   // URL of the movie file
    label: string; // Display label or title for the file
    movie_id: number; // Foreign key referencing the movie
    id: number;    // Unique identifier for the file
    isEdit: boolean;
    trailer_url: string;
    subtitles_url: string;
  }
  
  interface SeasonInfo {
    season_id: number;
    season_name: string; // Name of the season
    order_no: string;    // Order number of the season
    trailer_url: string;
    isEdit: boolean;
  }
  
 export interface SeriesData {
    seriesDetails: MovieFile; // Details about the series
    seasonInfo: SeasonInfo;       // Details about the season
  }

  interface Episode {
    episode_id: number;         // Unique identifier for the episode
    season_id: number | null;   // Foreign key to the season_info table
    episode_name: string;       // Name of the episode
    episode_order: number | null; // Episode order within the season
    thumbnail_path: string | null; // Path or URL to the thumbnail image
    url: string;                // Source URL for the episode
    overview: string | null;    // Overview or description of the episode
    runtime: number | null;     // Runtime of the episode in minutes
    still_path: string | null;  // Path to the still image of the episode
    id: number;                 // Identifier for the episode (from external sources like TMDB)
    episode_no: number;         // Episode number in the season
    season_no: number;          // Season number the episode belongs to
    subtitles_url: string;
    isEdit: false;
    credits_start: number;
  }
  
  
 export interface episodeData {
    epidodeDetails: Episode;
    season: SeasonInfo;
  }
  
  
export interface RegisterShopProps{
    shopDetails:{
        shop_name: string;
        location: string;
        shop_email: string;
        shop_tel: string;
        extra_info: string;
    }
    user: {
        user_id: number
    }
    logo: {
        path: string;
        filename : string;
    }
};

export interface UpdateInvoiceProps {
    remaining: number;
    change: number;
    payment_status: string;
    customerGave: {[key: string]: string};
    sale_id: number;
    updated_at: Date;
};

export interface RequestMovie {
  movieName: string,
  movieType: 'movie' | 'series',
  description: string,
  notify: boolean;
}

export interface FeedBackArg {
  subject: string,
  message: string,
  sender_type: 'client' | 'admin'
}

export interface MovieProgressBody {
  user_id: number, 
  movie_id: number;
  progress: number;
  is_series: boolean,
  episode_id: number;
  isCompleted: number;
}

