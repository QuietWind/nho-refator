import { Order } from "./Order"

export class OrderReceipt {
  private order: Order

  constructor(o: Order) {
    this.order = o
  }

  public printReceipt(): string {
    var output: string[] = []

    // print headers
    output.push("======Printing Orders======\n")

    // print date, bill no, customer name
    // output.push("Date - " + order.getDate();
    output.push(this.order.getCustomerName())
    output.push("\t")
    output.push(this.order.getCustomerAddress())
    output.push("\n")

    //        output.push(order.getCustomerLoyaltyNumber());

    // prints lineItems
    var totSalesTx = 0
    var tot = 0

    for (var i = 0; i < this.order.getLineItems().length; i++) {
      var lineItem = this.order.getLineItems()[i]

      output.push(lineItem.getDescription())
      output.push("\t")
      output.push(lineItem.getPrice() + "")
      output.push("\t")
      output.push(lineItem.getQuantity() + "")
      output.push("\t")
      output.push(lineItem.totalAmount() + "")
      output.push("\n")

      // calculate sales tax @ rate of 10%
      var salesTax = lineItem.totalAmount() * 0.1
      totSalesTx += salesTax

      // calculate total amount of lineItem = price * quantity + 10 % sales tax
      tot += lineItem.totalAmount() + salesTax
    }

    // prints the state tax
    output.push("Sales Tax")
    output.push("\t")
    output.push(totSalesTx + "")

    // print total amount
    output.push("Total Amount")
    output.push("\t")
    output.push(tot + "")

    return output.join("")
  }
}
