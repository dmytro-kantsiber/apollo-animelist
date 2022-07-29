export const CLIENT_ID = "8495";

export const BASE_URL = "https://graphql.anilist.co/";

export const USER_AGENT = "jobangelion-app";

export const PER_PAGE = 18;

export const MEDIA_LIST_ENTRY_STATUS = [
  {
    title: "Not in list",
    value: "Not in list",
  },
  {
    title: "Current watching",
    value: "CURRENT",
  },
  {
    title: "Planning",
    value: "PLANNING",
  },
  {
    title: "Completed",
    value: "COMPLETED",
  },
  {
    title: "Dropped",
    value: "DROPPED",
  },
  {
    title: "Paused",
    value: "PAUSED",
  },
  {
    title: "Repeating",
    value: "REPEATING",
  },
];

export const SEARCH_OPTIONS = [
  {
    title: "Format",
    type: "format_in",
    values: [
      { name: "Any", value: "Any" },
      { name: "TV", value: "TV" },
      { name: "TV Short", value: "TV_SHORT" },
      { name: "Movie", value: "MOVIE" },
      { name: "Special", value: "SPECIAL" },
      { name: "OVA", value: "OVA" },
      { name: "ONA", value: "ONA" },
      { name: "Music", value: "MUSIC" },
    ],
  },
  {
    title: "Status",
    type: "status_in",
    values: [
      { name: "Any", value: "Any" },
      { name: "Finished", value: "FINISHED" },
      { name: "Releasing", value: "RELEASING" },
      { name: "Not yet released", value: "NOT_YET_RELEASED" },
      { name: "Cancelled", value: "CANCELLED" },
      { name: "Hiatus", value: "HIATUS" },
    ],
  },
  {
    title: "Genre",
    type: "genre_in",
    values: [
      { name: "Any", value: "Any" },
      { name: "Action", value: "ACTION" },
      { name: "Adventure", value: "ADVENTURE" },
      { name: "Comedy", value: "COMEDY" },
      { name: "Drama", value: "DRAMA" },
      { name: "Ecchi", value: "ECCHI" },
      { name: "Fantasy", value: "FANTASY" },
      { name: "Hentai", value: "HENTAI" },
      { name: "Horror", value: "HORROR" },
      { name: "Mahou Shoujo", value: "MAHOU SHOUJO" },
      { name: "Mecha", value: "MECHA" },
      { name: "Music", value: "MUSIC" },
      { name: "Mystery", value: "MYSTERY" },
      { name: "Psychological", value: "PSYCHOLOGICAL" },
      { name: "Romance", value: "ROMANCE" },
      { name: "Sci-Fi", value: "SCI-FI" },
      { name: "Slice of Life", value: "SLICE OF LIFE" },
      { name: "Sports", value: "SPORTS" },
      { name: "Supernatural", value: "SUPERNATURAL" },
      { name: "Thriller", value: "THRILLER" },
    ],
  },
  {
    title: "Sort",
    type: "sort",
    values: [
      { name: "Any", value: "Any" },
      { name: "Average Score(DESC)", value: "SCORE_DESC" },
      { name: "Average Score(ASC)", value: "SCORE" },
      { name: "Title(DESC)", value: "TITLE_ROMAJI_DESC" },
      { name: "Title(ASC)", value: "TITLE_ROMAJI" },
      { name: "Popularity(DESC)", value: "POPULARITY_DESC" },
      { name: "Popularity(ASC)", value: "POPULARITY" },
      { name: "Newest", value: "START_DATE_DESC" },
      { name: "Oldest", value: "START_DATE" },
    ],
  },
];
