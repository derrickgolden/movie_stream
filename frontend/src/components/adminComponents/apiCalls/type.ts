export interface MovieRequestRes {
    movie_request_id: number;
    name: string; // Name of the user
    phone: string; // Phone number of the user
    apartment: string; // Apartment information
    movie_name: string; // Name of the movie or series requested
    movie_type: 'movie' | 'series'; // Type of the request (movie or series)
    description: string; // Optional description of the request
    notify: boolean; // Whether the user wants to be notified
    status: 'pending' | 'inProgress' | 'uploaded' | 'cancelled'
    request_date: string; // ISO string representing the request date
  }
  export interface UserWatchStats {
    user_id: number;
    name: string;
    mac: string;
    apartment: string;
    phone: string;
    last_login: string; // ISO date string
    total_watched: number;
    last_watched_at: string; // Timestamp or formatted date string
}
