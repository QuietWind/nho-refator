export class Customer {
  private name: string
  private address: string

  constructor(name: string, address: string) {
    this.name = name
    this.address = address
  }

  public getName(): string {
    return name
  }

  public setName(name: string): void {
    this.name = name
  }

  public getAddress(): string {
    return this.address
  }

  public setAddress(address: string): void {
    this.address = address
  }
}
