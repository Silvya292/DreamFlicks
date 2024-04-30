export class TvSerie {
  readonly id: number;
  readonly type: string;
  readonly title: string;
  readonly overview: string;
  readonly poster: string;
  trailer: string;
  readonly releaseDate: string;
  readonly numberOfSeasons: number;
  readonly numberOfEpisodes: number;
  readonly genres: string[];

  constructor(
    id: number,
    title: string,
    poster: string,
    releaseDate: string,
    overview?: string,
    numberOfSeasons?: number,
    numberOfEpisodes?: number,
    genres?: string[],
    trailer?: string
  ) {
    this.id = id;
    this.type = 'tv';
    this.title = title;
    this.overview = overview;
    this.poster = poster;
    this.trailer = trailer;
    this.releaseDate = releaseDate;
    this.numberOfSeasons = numberOfSeasons;
    this.numberOfEpisodes = numberOfEpisodes;
    this.genres = genres;
  }
}
