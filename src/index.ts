import * as Book from "./domain/book"
import * as Dialer from "./domain/dialer"
import { Maybe } from "./monads/maybe"

function read_name(): Maybe<string> {
    return new Maybe("josselin auguste")
}

console.log("We want monads")

const name = read_name()
if (name.isValue()) {
    let first_name = name.value?.split(" ")[0]
    if (first_name) {
        first_name = first_name.toUpperCase()
        console.log("Dialing {first_name}...")

        const contact = Book.find(first_name)
        if (contact.isValue()) {
            const response = Dialer.dial(contact.value as string)
            if (response.isValue()) {
                console.log("Call OK.")
            }
        }
    }
}

