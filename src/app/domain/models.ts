export interface Movie {
  id: string;
  title: string;
  summary: string;
  actors: string[];
  avgRating: number;
  reviews: Review[];
  images: string[];
}

export interface Review {
  username: string;
  rating: number;
  review: string;
}
