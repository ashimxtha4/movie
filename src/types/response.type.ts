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

export type genresType = { id: number; name: string };
export type productionCompanyType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type producationCountriesType = {
  iso_3166_1: string;
  name: string;
};

export type spokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type movieDetailType = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: genresType[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompanyType[];
  production_countries: producationCountriesType[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: spokenLanguageType[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
let a = {
  adult: false,
  backdrop_path: "/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg",
  belongs_to_collection: {
    id: 403374,
    name: "Jack Reacher Collection",
    poster_path: "/qtafXiYDUMKxzsssU41qWey5oiT.jpg",
    backdrop_path: "/vViRXFnSyGJ2fzMbcc5sqTKswcd.jpg",
  },
  budget: 60000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 53,
      name: "Thriller",
    },
  ],
  homepage: "",
  id: 343611,
  imdb_id: "tt3393786",
  origin_country: ["US"],
  original_language: "en",
  original_title: "Jack Reacher: Never Go Back",
  overview:
    "When Major Susan Turner is arrested for treason, ex-investigator Jack Reacher undertakes the challenging task to prove her innocence and ends up exposing a shocking conspiracy.",
  popularity: 63.989,
  poster_path: "/cOg3UT2NYWHZxp41vpxAnVCOC4M.jpg",
  production_companies: [
    {
      id: 82819,
      logo_path: "/gXfFl9pRPaoaq14jybEn1pHeldr.png",
      name: "Skydance Media",
      origin_country: "US",
    },
    {
      id: 83645,
      logo_path: null,
      name: "Huahua Media",
      origin_country: "CN",
    },
    {
      id: 3407,
      logo_path: "/iVMjKOFyRvm9PW45lW1wW6TSvnj.png",
      name: "Shanghai Film Group",
      origin_country: "CN",
    },
    {
      id: 21777,
      logo_path: null,
      name: "TC Productions",
      origin_country: "US",
    },
    {
      id: 4,
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
      name: "Paramount Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "CN",
      name: "China",
    },
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2016-10-19",
  revenue: 162100000,
  runtime: 118,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Never give in. Never give up. Never go back.",
  title: "Jack Reacher: Never Go Back",
  video: false,
  vote_average: 5.987,
  vote_count: 4835,
};

export type findMovietype = {
  page: number;
  results: singleResultType[];
  total_page: number;
  total_results: number;
};
