export type singleResultType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: 1159311;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 461.924;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type findMovietype = {
  page: number;
  results: singleResultType[];
  total_page: number;
  total_results: number;
};
