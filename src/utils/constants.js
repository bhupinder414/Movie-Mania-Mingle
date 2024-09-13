export const MOVIE_SHIMMER_CONTAINER_LENGTH = 10;
export const ITEMS_PER_PAGE = 20;
export const REVIEW_SHIMMER_LENGTH = 2;
export const REVIEWS_LENGTH = 10;
export const KNOWN_FOR_LENGTH = 20;
export const VITE_IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;
export const VIDEO_IMAGE_URL = "https://i.ytimg.com/vi/{{key}}/hqdefault.jpg";
export const YOUTUBE_VIDEO_LINK = `https://www.youtube.com/embed/{{video_id}}?autoplay=1&mute=1`;
export const MAIN_PAGE_VIDEOS_LENGTH = 5;
export const VIDEO_SHIMMER_LENGTH = 3;
export const BRIEF_REVIEW_LENGTH = 490;
export const MOVIE_TYPE_KEY = "movie";
export const MOVIE_LABEL = "Movie";
export const SHOW_TYPE_KEY = "tv";
export const SHOW_LABEL = "TV Show";
export const SIMILAR_SHOW_LABEL = "Similar TV Shows";
export const MOVIE_SHOW_LABEL = "Similar Movies";
export const PERSON_TYPE_KEY = "person";
export const PAGE_KEY = "page";
export const SORT_BY_KEY = "sort_by";
export const GENRES_KEY = "genres";
export const VIDEO_TYPE_KEY = "video";
export const TRENDING_KEY = "now_playing";
export const TOP_RATED_KEY = "top_rated";
export const UPCOMING_KEY = "upcoming";
export const POPULAR_KEY = "popular";
export const RUNTIME_FROM = "runtime_from";
export const RUNTIME_TO = "runtime_to";
export const DEFAULT_SORTING = "popularity.desc";
export const DEFAULT_PAGE = 1;
export const RUNTIME_LOWER_RANGE = 0;
export const RUNTIME_UPPER_RANGE = 400;
export const VOTE_AVERAGE_LOWER_RANGE = 0;
export const VOTE_AVERAGE_UPPER_RANGE = 10;
export const LOADING_STATE = "loading";
export const AVATAR_TYPE = "avatar";
export const SEARCH_MOVIES_KEY = "movies";
export const SEARCH_SHOWS_KEY = "shows";
export const SEARCH_PERSONS_KEY = "persons";
export const QUERY_KEY = "query";
export const SEARCH_MOVIES_LABEL = "Movies";
export const SEARCH_SHOWS_LABEL = "TV Shows";
export const SEARCH_PERSONS_LABEL = "Persons";
export const NO_SEARCH_RESULT_MOVIE = "No Movie Found.";
export const NO_SEARCH_RESULT_TV = "No TV Show Found.";
export const NO_SEARCH_RESULT_PERSON = "No Person Found.";
export const PLACEHOLDER_TIMING = 10000;

export const MOVIE_TYPE_CONTAINERS = [
  {
    title: "Trending Now",
    linkTo: "/movies/trending",
    category: MOVIE_TYPE_KEY,
    type: "now_playing",
  },
  {
    title: "Popular",
    linkTo: "/movies/popular",
    category: MOVIE_TYPE_KEY,
    type: "popular",
  },
  {
    title: "Top Rated",
    linkTo: "/movies/top-rated",
    category: MOVIE_TYPE_KEY,
    type: "top_rated",
  },
  {
    title: "Upcoming",
    linkTo: "/movies/upcoming",
    category: MOVIE_TYPE_KEY,
    type: "upcoming",
  },
];

export const SHOWS_TYPE_CONTAINERS = [
  {
    title: "Top Rated",
    linkTo: "/tv/top-rated",
    category: SHOW_TYPE_KEY,
    type: "top_rated",
  },
  {
    title: "Popular",
    linkTo: "/tv/popular",
    category: SHOW_TYPE_KEY,
    type: "popular",
  },
];

export const movieSortOptions = [
  { id: "popularity.asc", label: "Popularity Ascending" },
  { id: "popularity.desc", label: "Popularity Descending" },
  { id: "revenue.asc", label: "Revenue Ascending" },
  { id: "revenue.desc", label: "Revenue Descending" },
  { id: "primary_release_date.asc", label: "Release Date Ascending" },
  { id: "primary_release_date.desc", label: "Release Date Descending" },
  { id: "title.asc", label: "Title Ascending" },
  { id: "title.desc", label: "Title Descending" },
  { id: "vote_average.asc", label: "Vote Average Ascending" },
  { id: "vote_average.desc", label: "Vote Average Descending" },
];

export const tvSortOptions = [
  { id: "first_air_date.asc", label: "Air Date Ascending" },
  { id: "first_air_date.desc", label: "Air Date Descending" },
  { id: "name.asc", label: "Name Ascending" },
  { id: "name.desc", label: "Name Descending" },
  { id: "popularity.asc", label: "Popularity Ascending" },
  { id: "popularity.desc", label: "Popularity Descending" },
  { id: "vote_average.asc", label: "Vote Average Ascending" },
  { id: "vote_average.desc", label: "Vote Average Descending" },
];

export const genders = [
  "Not Set/Not Specified",
  "Female",
  "Male",
  "Non-binary",
];

export const placeholders = [
  "Search for movies...",
  "Find your favorite TV shows...",
  "Discover trending actors...",
];
