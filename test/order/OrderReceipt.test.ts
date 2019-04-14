import { Order } from "./../../src/order/Order"
import { OrderReceipt } from "../../src/order/OrderReceipt"
import { LineItem } from "../../src/order/ListItem"

describe("Order test", () => {
  it("should print order customer information", () => {
    var order = new Order("Mr X", "Chicago, 60601", [])
    var receipt = new OrderReceipt(order)

    var output = receipt.printReceipt()

    expect(output).toContain("Mr X")
    expect(output).toContain("Chicago, 60601")
  })

  it("should print line item and sales tax information", () => {
    var lineItems: LineItem[] = [
      new LineItem("milk", 10.0, 2),
      new LineItem("biscuits", 5.0, 5),
      new LineItem("chocolate", 20.0, 1)
    ]
    var receipt = new OrderReceipt(new Order("tw", "shanghai", lineItems))

    var output = receipt.printReceipt()

    console.log(output)

    expect(output).toContain("milk\t10\t2\t20\n")
    expect(output).toContain("biscuits\t5\t5\t25\n")
    expect(output).toContain("chocolate\t20\t1\t20\n")
    expect(output).toContain("Sales Tax\t6.5")
    expect(output).toContain("Total Amount\t71.5")
  })
})
