import { LineItem } from "./ListItem"

export class Order {
  private nm: string
  private addr: string
  private li: LineItem[]

  constructor(nm: string, addr: string, li: LineItem[]) {
    this.nm = nm
    this.addr = addr
    this.li = li
  }

  public getCustomerName(): string {
    return this.nm
  }

  public getCustomerAddress(): string {
    return this.addr
  }

  public getLineItems(): LineItem[] {
    return this.li
  }
}
