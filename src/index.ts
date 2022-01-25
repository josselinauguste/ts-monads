import * as Book from "./domain/book"
import * as Dialer from "./domain/dialer"
import { Maybe } from "./monads/maybe"

function read_name(): Maybe<string> {
    return new Maybe("josselin auguste")
}

console.log("We want monads")

const first_name = read_name()
    .map((n) => n.split(" ")[0])
    .map((n) => n.toUpperCase()) 
    .map((n) => { console.log(`Dialing ${n}...`); return n})
if (first_name.isValue()) {
    const contact = Book.find(first_name.value as string)
    if (contact.isValue()) {
        const response = Dialer.dial(contact.value as string)
        if (response.isValue()) {
            console.log("Call OK.")
        }
    }
}

