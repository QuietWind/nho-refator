import { Movie } from "./Movie"
import { Rental } from "./Rental"

export class Customer {
  private name: string
  private rentals: Rental[] = []

  constructor(name: string) {
    this.name = name
  }

  addRental(rental: Rental) {
    this.rentals.push(rental)
  }

  public getName(): string {
    return this.name
  }

  public statement(): string {
    var totalAmount = 0
    var frequentRenterPoints = 0
    var rentals = this.rentals
    var result: string[] = ["Rental Record for " + this.getName() + "\n"]

    for (var i = 0; i < rentals.length; i++) {
      var each = rentals[i]
      //show figures for this rental
      //determine amounts for each line
      var thisAmount = 0
      switch (each.getMovie().getPriceCode()) {
        case Movie.REGULAR:
          thisAmount += 2
          if (each.getDaysRented() > 2)
            thisAmount += (each.getDaysRented() - 2) * 1.5
          break
        case Movie.NEW_RELEASE:
          thisAmount += each.getDaysRented() * 3
          break
        case Movie.CHILDREN:
          thisAmount += 1.5
          if (each.getDaysRented() > 3)
            thisAmount += (each.getDaysRented() - 3) * 1.5
          break
      }
      //add frequent renter points
      frequentRenterPoints++
      if (
        each.getMovie().getPriceCode() == Movie.NEW_RELEASE &&
        each.getDaysRented() > 1
      )
        frequentRenterPoints++

      //show figures for this rental
      result.push("\t")
      result.push(each.getMovie().getTitle())
      result.push("\t")
      result.push(thisAmount + "")
      result.push("\n")
      totalAmount += thisAmount
    }

    //add footer lines

    result.push("Amount owed is ")
    result.push(totalAmount + "")
    result.push("\n")

    result.push("You earned ")
    result.push(frequentRenterPoints + "")
    result.push(" frequent renter points")
    return result.join("")
  }
}
