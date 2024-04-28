export class Film {
  readonly id: number;
  readonly type: string;
  readonly title: string;
  readonly overview: string;
  readonly poster: string;
  trailer?: string;
  readonly releaseDate: string;
  readonly genres: string[];

  constructor(
    id: number,
    title: string,
    overview: string,
    poster: string,
    releaseDate: string,
    genres: string[],
    trailer?: string
  ) {
    this.id = id;
    this.type = 'film';
    this.title = title;
    this.overview = overview;
    this.poster = poster;
    this.trailer = trailer;
    this.releaseDate = releaseDate;
    this.genres = genres;
  }
}
