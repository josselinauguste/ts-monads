import * as Book from "./domain/book"
import * as Dialer from "./domain/dialer"

function read_name(): string {
    return "josselin auguste"
}

console.log("We want monads")

const name = read_name()
if (name !== undefined) {
    let first_name = name.split(" ")[0]
    first_name = first_name.toUpperCase()
    console.log("Dialing {first_name}...")

    const contact = Book.find(first_name)
    const response = Dialer.dial(contact)
    if (response !== undefined) {
        console.log("Call OK.")
    }
}

