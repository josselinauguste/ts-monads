import * as Book from "./domain/book"
import * as Dialer from "./domain/dialer"
import { Maybe, Just } from "./monads/maybe"

function read_name(): Maybe<string> {
    return Just("josselin auguste")
}

console.log("We want monads")

read_name()
    .map((n) => n.split(" ")[0])
    .map((n) => n.toUpperCase()) 
    .map((n) => { console.log(`Dialing ${n}...`); return n})
    .bind((n) => Book.find(n))
    .bind((c) => Dialer.dial(c))
    .map((r) => { console.log("Call OK."); return r})
