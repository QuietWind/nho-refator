import { Customer } from "../../src/film/Customer"
import { Rental } from "../../src/film/Rental"
import { Movie } from "../../src/film/Movie"

describe("film test", () => {
  it("call film statement will correct", () => {
    var customer = new Customer("阳阳")
    customer.addRental(new Rental(new Movie("猫和老鼠", Movie.CHILDREN), 4))
    customer.addRental(
      new Rental(new Movie("拯救大兵日嗯", Movie.NEW_RELEASE), 5)
    )
    customer.addRental(new Rental(new Movie("魔道祖师", Movie.REGULAR), 6))

        console.log(customer.statement())

    expect(customer.statement()).toContain(
      "Rental Record for 阳阳\n" +
        "\t猫和老鼠\t3\n" +
        "\t拯救大兵日嗯\t15\n" +
        "\t魔道祖师\t8\n" +
        "Amount owed is 26\n" +
        "You earned 4 frequent renter points"
    )
  })
})
