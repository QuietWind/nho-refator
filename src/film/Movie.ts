export class Movie {
  static CHILDREN: number = 2
  static REGULAR: number = 0
  static NEW_RELEASE: number = 1

  private title: string
  private priceCode: number

  constructor(title: string, priceCode: number) {
    this.title = title
    this.priceCode = priceCode
  }

  public getPriceCode(): number {
    return this.priceCode
  }

  public getTitle(): string {
    return this.title
  }
}
