export class LineItem {
  private desc: string
  private p: number
  private qty: number

  constructor(desc: string, p: number, qty: number) {
    this.desc = desc
    this.p = p
    this.qty = qty
  }

  public getDescription(): string {
    return this.desc
  }

  public getPrice(): number {
    return this.p
  }

  public getQuantity(): number {
    return this.qty
  }

  public totalAmount(): number {
    return this.p * this.qty
  }
}
