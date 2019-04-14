import { Movie } from "./Movie"

export class Rental {
  private movie: Movie
  private daysRented: number

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie
    this.daysRented = daysRented
  }

  getMovie(): Movie {
    return this.movie
  }

  getDaysRented(): number {
    return this.daysRented
  }
}
